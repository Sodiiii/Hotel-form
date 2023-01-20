import React, { useEffect, useState } from "react";
import "../mainpage.scss";
import AppInput from "../../layout/AppInput/AppInput";
import AppButton from "../../layout/AppButton/AppButton";
import { uid } from "uid";
import AppCheckbox from "../../layout/AppCheckbox/AppCheckbox";

const FirstStep = ({
  step,
  steps,
  setStep,
  price,
  adults,
  setAdults,
  kids,
  setKids,
  children,
  setChildren,
  type,
  setType,
  nights,
  setNights,
  insurance,
  setInsurance,
  summ,
}) => {
  const [rooms, setRooms] = useState([
    {
      id: uid(),
      name: "Эконом",
      value: 1800,
      selected: false,
    },
    {
      id: uid(),
      name: "Стандарт",
      value: 2800,
      selected: false,
    },
    {
      id: uid(),
      name: "Люкс",
      value: 4000,
      selected: false,
    },
  ]);

  const [ins, setIns] = useState([
    {
      id: uid(),
      name: "Страховка",
      value: 10,
      selected: false,
    },
  ]);

  const [isAdultsVal, setAdultsVal] = useState(false);
  const [isNightsVal, setNightsVal] = useState(false);

  const checkValidAdults = (isValid) => {
    setAdultsVal(isValid);
  };

  const checkValidNights = (isValid) => {
    setNightsVal(isValid);
  };
  const isDisabledActionButton = () => {
    return !isAdultsVal || !isNightsVal;
  };

  function setSelectedRooms(idx) {
    price(rooms[idx].value);
    if (idx === 0) {
      rooms[idx].selected = !rooms[idx].selected;
      rooms[idx + 2].selected = false;
      rooms[idx + 1].selected = false;
    }
    if (idx === 1) {
      rooms[idx - 1].selected = false;
      rooms[idx].selected = !rooms[idx].selected;
      rooms[idx + 1].selected = false;
    }
    if (idx === 2) {
      rooms[idx - 2].selected = false;
      rooms[idx - 1].selected = false;
      rooms[idx].selected = !rooms[idx].selected;
    }
    setRooms(rooms);
  }

  function setSelectedIns(idx) {
    ins[idx].selected = !ins[idx].selected;
    ins[idx].selected ? setInsurance(ins[idx].value) : setInsurance(0);
    setIns(ins)
  }

  function NextStep() {
    localStorage.setItem("rooms", JSON.stringify(rooms));
    localStorage.setItem("adults", adults);
    localStorage.setItem("kids", kids);
    localStorage.setItem("children", children);
    localStorage.setItem("nights", nights);
    localStorage.setItem("ins", insurance);
    setStep((step += 1));
  }

  useEffect(() => {
    if (!!JSON.parse(localStorage.getItem("rooms"))?.length)
      setRooms(JSON.parse(localStorage.getItem("rooms")));
    setAdults(localStorage.getItem("adults") || 0);
    setKids(localStorage.getItem("kids") || 0);
    setChildren(localStorage.getItem("children") || 0);
    setNights(localStorage.getItem("nights") || 0);
    setInsurance(localStorage.getItem("ins") || 0);
  }, []);

  return (
    <>
      <h2 className="title">Бронирование номера</h2>
      <h2 className="subtitle">Расчет стоимости</h2>
      <div className="input-line">
        <h4 className="line-name">Количество взрослых*</h4>
        <AppInput
          type="number"
          min="0"
          validations={{ isEmpty: true }}
          onInput={(e) => setAdults(e)}
          value={adults}
          checkValid={checkValidAdults}
        />
      </div>
      <div className="input-line">
        <h4 className="line-name">Количество детей от 5 до 12 лет</h4>
        <AppInput
          type="number"
          min="0"
          onInput={(e) => setKids(e)}
          value={kids}
        />
      </div>
      <div className="input-line">
        <h4 className="line-name">Количество детей до 5 лет</h4>
        <AppInput
          type="number"
          min="0"
          max={adults * 3}
          value={children}
          onInput={(e) => setChildren(e)}
        />
      </div>
      <div className="input-line">
        <h4 className="line-name">Тип номера*</h4>
        <div className="check-area">
          {!!rooms?.length &&
            rooms.map((option, idx) => {
              return (
                <div className="check-item" key={idx}>
                  <input
                    id={option.id}
                    name="group"
                    type="radio"
                    value={option.value}
                    onChange={() => setSelectedRooms(idx)}
                    checked={option.selected}
                  />
                  <h4 className="line-name">{option?.name}</h4>
                </div>
              );
            })}
        </div>
      </div>
      <div className="input-line">
        <h4 className="line-name">Количество ночей*</h4>
        <AppInput
          type="number"
          min="0"
          validations={{ isEmpty: true }}
          value={nights}
          onInput={(e) => setNights(e)}
          checkValid={checkValidNights}
        />
      </div>
      <div className="input-line">
        <h4 className="line-name">Страховка</h4>
        <div className="check-area">
          {!!ins?.length &&
            ins.map((option, idx) => {
              return (
                <div className="check-item">
                  <AppCheckbox
                    onChange={() => setSelectedIns(idx)}
                    checked={option?.selected}
                    mode="blue"
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="input-line">
        <h4 className="line-name">Итого:</h4>
        <h4 className="line-name">{summ}₽</h4>
      </div>
      <div className="btn-first">
        <AppButton
          isDisabled={isDisabledActionButton()}
          onClick={() => NextStep()}
        >
          Далее
        </AppButton>
      </div>
    </>
  );
};

export default FirstStep;
