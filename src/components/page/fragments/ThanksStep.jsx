import React, { useState } from "react";
import "../mainpage.scss";
import SvgSelector from "../../layout/SvgSelector/SvgSelector";
import AppButton from "../../layout/AppButton/AppButton";

const ThanksStep = ({
  step,
  steps,
  setStep,
  price,
  adults,
  kids,
  children,
  type,
  nights,
  insurance,
  name,
  surname,
  secname,
  phone,
}) => {
  function DoItAgain() {
    setStep((step = 1));
    price("");
    adults(0);
    kids(0);
    children();
    type();
    nights("");
    insurance("0");
    name("");
    surname("");
    phone("");
    secname("");
    localStorage.clear()
  }

  return (
    <>
      <div className="thanks-wrapper">
        <div className="thanks-logo">
          <SvgSelector id="thanks" />
        </div>
        <h4 className="title">Заказ успешно оплачен</h4>
        <AppButton onClick={() => DoItAgain()}>Далее</AppButton>
      </div>
    </>
  );
};

export default ThanksStep;
