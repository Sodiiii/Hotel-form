import {useEffect, useState} from "react";
export const Mounted = (Func) => useEffect(() => Func(), [])

export const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                default:
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (validations?.isEmpty) {
            if (isEmpty) setInputValid(false)
            else setInputValid(true)
        }
        if (validations?.minLength) {
            if (minLengthError) setInputValid(false)
            else setInputValid(true)
        }
        if (validations?.maxLength) {
            if (maxLengthError) setInputValid(false)
            else setInputValid(true)
        }
    }, [isEmpty, maxLengthError, minLengthError,  validations?.isEmpty, validations?.minLength, validations?.maxLength])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        inputValid
    }
}

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const [valRules, setValRules] = useState(validations)
    const valid = useValidation(value, valRules)

    const onChange = (e, onInput) => {
        if (e?.target?.value) {
            setValue(e.target.value)
            onInput(e.target.value);
        } else {
            setValue(e)
            onInput(e);
        }
    }

    const onBlur = () => {
        setDirty(true)
    }

    useEffect(() => {
        setValRules(validations)
    }, [validations])

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}
