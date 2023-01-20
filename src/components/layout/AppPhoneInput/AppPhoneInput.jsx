import React, { useEffect, useRef } from "react";
import { IMaskInput } from "react-imask";
import "../AppInput/styles/AppInput.scoped.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useInput } from "../../../scripts/hooks";

const AppPhoneInput = ({
  value,
  placeholder,
  label,
  onInput,
  mode,
  className,
  isDisabled,
  validations,
  validationText,
  onEnterActionFunc,
  checkValid,
}) => {
  const ref = useRef(null);
  const phoneMask = "+7 (000) 000-00-00";
  const inputRef = useRef(null);
  const valueData = useInput(value, validations);
  const inputClasses = classNames(
    "app-input__input",
    inputModes(mode),
    inputIsDisabled(),
    className
  );

  function inputModes(mode) {
    if (mode.includes("white")) return "app-input__input_white";
  }

  function inputIsDisabled() {
    if (isDisabled) return "app-input__input_disabled";
  }

  useEffect(() => {
    checkValid(valueData.inputValid);
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEnterActionFunc();
    }
  };

  return (
    <div className="app-input">
      <label htmlFor="phone" className="app-input__label">
        {label}
      </label>
      <IMaskInput
        id="phone"
        className={inputClasses}
        mask={phoneMask}
        value={valueData?.value ? valueData?.value : ""}
        ref={ref}
        disabled={isDisabled}
        inputRef={inputRef}
        onBlur={valueData?.onBlur}
        onKeyDown={handleKeyDown}
        onAccept={(value, mask) =>
          valueData?.onChange(value ? value : "", onInput)
        }
        placeholder={placeholder}
      />
      {valueData.isDirty && valueData.isEmpty && validations?.isEmpty && (
        <div className="input__error-text">{validationText.isEmpty}</div>
      )}
      {valueData.isDirty &&
        valueData.minLengthError &&
        validations?.minLength && (
          <div className="input__error-text">{validationText.minLength}</div>
        )}
    </div>
  );
};

AppPhoneInput.defaultProps = {
  mode: "default",
  className: "",
  label: "",
  placeholder: "",
  value: "",
  onInput: () => "",
  isDisabled: false,
  validations: {},
  checkValid: () => {},
  onEnterActionFunc: () => {},
  validationText: {
    isEmpty: "Мобильный телефон не может быть пустым!",
    isMobilePhone: "Некорректный мобильный телефон!",
    minLength: "Номер телефона недостаточной длины!",
  },
};

AppPhoneInput.prototype = {
  mode: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onInput: PropTypes.func,
  isDisabled: PropTypes.bool,
  validationText: PropTypes.object,
  checkValid: PropTypes.func,
  validations: PropTypes.object,
  onEnterActionFunc: PropTypes.func,
};

export default AppPhoneInput;
