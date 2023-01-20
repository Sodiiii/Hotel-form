import React from "react";
import PropTypes from "prop-types";
import "./styles/AppCheckbox.scss";
import SvgSelector from "../SvgSelector/SvgSelector";


const AppCheckbox = ({
  label,
  isDisabled,
  onChange,
  mode,
  value,
  checked,
  className,
}) => {
  return (
    <label className="app-checkbox__content ">
      <input
        id="checkbox"
        type="checkbox"
        className="app-checkbox__input"
        value={value}
        onClick={(e) => onChange(e.target.value)}
        disabled={isDisabled}
      />
      <span className="app-checkbox__checkmark">
        <span className="app-checkbox__checkmark">
          {mode === "blue" && <SvgSelector id="ok" />}
          {mode === "green" && <SvgSelector id="green-mark-checkbox" />}
        </span>
      </span>
      <label htmlFor="checkbox" className="app-checkbox__label">
        {label}
      </label>
    </label>
  );
};

AppCheckbox.defaultProps = {
  label: "",
  onChange: () => {},
  isDisabled: false,
  mode: "green",
  value: false,
};

AppCheckbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  value: PropTypes.bool,
};

export default AppCheckbox;
