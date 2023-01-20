import React, { useState } from "react";
import "../mainpage.scss";
import AppInput from "../../layout/AppInput/AppInput";
import AppPhoneInput from "../../layout/AppPhoneInput/AppPhoneInput";
import AppButton from "../../layout/AppButton/AppButton";

const SecondStep = ({
  step,
  steps,
  setStep,
  name,
  setName,
  surname,
  setSurname,
  secname,
  setSecname,
  phone,
  setPhone,
}) => {
  const [isNameVal, setNameVal] = useState(false);
  const [isSurnameVal, setSurnameVal] = useState(false);
  const [isPhoneVal, setPhoneVal] = useState(false);

  const checkValidName = (isValid) => {
    setNameVal(isValid);
  };
  const checkValidSurname = (isValid) => {
    setSurnameVal(isValid);
  };
  const checkValidPhone = (isValid) => {
    setPhoneVal(isValid);
  };

  const isDisabledActionButton = () => {
    return !isNameVal || !isSurnameVal || !isPhoneVal;
  };
  function NextStep() {
    setStep((step += 1));
  }
  function StepBack() {
    setStep((step -= 1));
  }
  return (
    <>
      <h2 className="title">Бронирование номера</h2>
      <h2 className="subtitle">Данные покупателя</h2>
      <div className="input-line">
        <h4 className="line-name">Фамилия*</h4>
        <AppInput
          validations={{ isEmpty: true }}
          onInput={(e) => setName(e)}
          value={name}
          checkValid={checkValidSurname}
        />
      </div>
      <div className="input-line">
        <h4 className="line-name">Имя*</h4>
        <AppInput
          validations={{ isEmpty: true }}
          onInput={(e) => setSurname(e)}
          value={surname}
          checkValid={checkValidName}
        />
      </div>
      <div className="input-line">
        <h4 className="line-name">Отчество</h4>
        <AppInput onInput={(e) => setSecname(e)} value={secname} />
      </div>
      <div className="input-line">
        <h4 className="line-name">Номер телефона*</h4>
        <AppPhoneInput
          validations={{ isEmpty: true, minLength: 18 }}
          onInput={(e) => setPhone(e)}
          value={phone}
          checkValid={checkValidPhone}
        />
      </div>
      <div className="control-area">
        <h4 className="back-line" onClick={() => StepBack()}>
          Назад к рассчету стоимости
        </h4>
        <div className="btn">
          <AppButton
            isDisabled={isDisabledActionButton()}
            onClick={() => NextStep()}
          >
            Далее
          </AppButton>
        </div>
      </div>
    </>
  );
};

export default SecondStep;
