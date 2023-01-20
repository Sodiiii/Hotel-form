import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles/AppInput.scoped.scss";
import { uid } from "uid";
import SvgSelector from "../SvgSelector/SvgSelector";
import { useInput } from "../../../scripts/hooks";

const AppInput = ({
  id,
  className,
  mode,
  type,
  label,
  isDisabled,
  placeholder,
  onInput,
  svgId,
  iconPosition,
  value,
  autoComplete,
  validations,
  validationText,
  onEnterActionFunc,
  checkValid,
  ...attr
}) => {
  const inputClasses = classNames(
      "app-input__input",
      inputModes(mode),
      inputIsDisabledStyles(),
      className
  );
  const inputIconPosition = classNames("input-with-icon", inputItemStyles());
  const labelClasses = classNames("app-input__label", labelModes(mode));
  const valueData = useInput(value, validations);

  function inputIsDisabledStyles() {
    if (isDisabled) return "app-input__input_disabled";
  }

  function labelModes(mode) {
    if (!label && mode.includes("emptyLabel")) return "app-input__label_empty";
    if (mode.includes("search")) return "app-input__label_search";
  }
  function inputItemStyles() {
    if (iconPosition === "right") return "";
    else return "input-with-icon__left";
  }
  function inputModes(mode) {
    if (mode.includes("white")) return "app-input__input_white";
    if (mode.includes("with-icon")) {
      if (iconPosition === "left") return "app-input__with-icon_left";
      if (iconPosition === "right") return "app-input__with-icon_right";
    }
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEnterActionFunc();
    }
  };
  useEffect(() => {
    checkValid(valueData.inputValid);
  });
  return (
    <div className="app-input">
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {!mode.includes("with-icon") && (
        <input
          id={id}
          onChange={(e) => valueData.onChange(e.target.value, onInput)}
          onBlur={valueData.onBlur}
          value={valueData.value}
          autoComplete={autoComplete.toString()}
          type={type}
          disabled={isDisabled}
          placeholder={placeholder}
          className={inputClasses}
          onKeyDown={handleKeyDown}
          {...attr}
        />
      )}
      {mode.includes("with-icon") && (
        <div className="input-wrapper">
          <>
            <input
              id={id}
              onChange={(e) => mode.includes('search') ? onInput(e.target.value) : valueData.onChange(e.target.value, onInput)}
              onBlur={valueData.onBlur}
              autoComplete={autoComplete.toString()}
              value={valueData.value}
              type={type}
              disabled={isDisabled}
              placeholder={placeholder}
              className={inputClasses}
              onKeyDown={handleKeyDown}
              {...attr}
            />
            <SvgSelector id={svgId} className={inputIconPosition} />
          </>
        </div>
      )}
      {valueData.isDirty && valueData.isEmpty && validations?.isEmpty && (
        <div className="input__error-text">{validationText.isEmpty}</div>
      )}
      {valueData.isDirty &&
        valueData.minLengthError &&
        validations?.minLength && (
          <div className="input__error-text">{validationText.minLength}</div>
        )}
      {valueData.isDirty &&
        valueData.maxLengthError &&
        validations?.maxLength && (
          <div className="input__error-text">{validationText.maxLength}</div>
        )}
      {valueData.isDirty && valueData.emailError && validations?.isEmail && (
        <div className="input__error-text">{validationText.isEmail}</div>
      )}
      {valueData.isDirty && valueData.dateError && validations?.date && (
          <div className="input__error-text">{validationText.date}</div>
      )}
      {valueData.isDirty &&
        valueData.mobilePhoneError &&
        validations?.isMobilePhone && (
          <div className="input__error-text">
            {validationText.isMobilePhone}
          </div>
        )}
    </div>
  );
};

AppInput.defaultProps = {
  id: `input-${uid()}`,
  iconPosition: "right",
  className: "",
  type: "text",
  label: "",
  placeholder: "",
  mode: "default",
  isDisabled: false,
  autoComplete: false,
  value: "",
  validations: {},
  validationText: {
    isEmpty: "Поле не может быть пустым!",
    maxLength: "Слишком длинный текст!",
    minLength: "Текст слишком короткий!",
    isEmail: "Некорректный емаил!",
    isMobilePhone: "Некорректный мобильный телефон!",
    date: 'Введите дату в формате "чч.мм.гггг"'
  },
  checkValid: () => {},
  onEnterActionFunc: () => {},
  onInput: () => {}
};

AppInput.propTypes = {
  id: PropTypes.string.isRequired,
  iconPosition: PropTypes.string,
  onInput: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  mode: PropTypes.string,
  isDisabled: PropTypes.bool,
  autoComplete: PropTypes.bool,
  validations: PropTypes.object,
  validationText: PropTypes.object,
  checkValid: PropTypes.func,
  onEnterActionFunc: PropTypes.func,
};

export default AppInput;
