import React, { useEffect, useState } from "react";
import "../mainpage.scss";
import AppButton from "../../layout/AppButton/AppButton";

const ThirdStep = ({
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
  summ,
}) => {
  function NextStep() {
    setStep((step += 1));
  }
  function StepBack() {
    setStep((step -= 1));
  }
  const [insMessage, setInsMessage] = useState("Страховка включена");
  const [roomType, setRoomType] = useState("");

  useEffect(() => {
    price === 1800
      ? setRoomType("эконом")
      : price === 2800
      ? setRoomType("стандарт")
      : setRoomType("люкс");
  }, [price]);
  useEffect(() => {
    insurance === 10
      ? setInsMessage("Страховка включена")
      : setInsMessage("Без страховки");
  }, [insurance]);
  return (
    <>
      <h2 className="title">Бронирование номера</h2>
      <h2 className="subtitle">Подтверждение заказа</h2>
      <h4 className="line-name">
        {surname} {name} {secname}
      </h4>
      <h4 className="line-name">{phone}</h4>
      <h4 className="line-name">
        Номер {roomType}, количество ночей: {nights}{" "}
      </h4>
      <h4 className="line-name">
        взрослых: {adults}, детей от 12 лет: {kids} и детей младше 12 лет:{" "}
        {children}
      </h4>
      <h4 className="line-name">{insMessage}</h4>
      <div className="input-line">
        <h4 className="line-name">К оплате {summ} ₽</h4>
      </div>
      <div className="control-area">
        <h4 className="back-line" onClick={() => StepBack()}>
          Назад к данным покупателя
        </h4>
        <div className="btn">
          <AppButton onClick={() => NextStep()}>Оплатить</AppButton>
        </div>
      </div>
    </>
  );
};

export default ThirdStep;
