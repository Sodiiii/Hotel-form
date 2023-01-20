import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles/AppButton.scoped.scss";
const AppButton = ({
  children,
  onClick,
  mode,
  isDisabled,
  active,
  className,
}) => {
  const classes = classNames(
    "app-button",
    { active },
    btnModes(mode),
    btnIsDisabledStyles(),
    className
  );

  function btnModes(mode) {
    const modes = {
      default: "app-button_blue",
      red: "app-button_red",
      blue: "app-button_blue",
      green: "app-button_green",
      "blue-gradient": "app-button_blue-gradient",
      "search-filter": "app-button_search",
    };
    return modes[mode];
  }

  function btnIsDisabledStyles() {
    if (isDisabled) return "app-button_disabled";
  }

  return (
    <button className={classes} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

AppButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  active: PropTypes.bool,
};

AppButton.defaultProps = {
  onClick: () => {},
  children: "",
  className: "",
  mode: "default",
  isActive: false,
  isDisabled: false,
};

export default AppButton;
