import React, { useEffect, useState } from "react";
import "./mainpage.scss";
import "./fragments/FirstStep";
import "./fragments/SecondStep";
import "./fragments/ThirdStep";
import "./fragments/ThanksStep";
import FirstStep from "./fragments/FirstStep";
import SecondStep from "./fragments/SecondStep";
import ThirdStep from "./fragments/ThirdStep";
import ThanksStep from "./fragments/ThanksStep";

const Mainpage = () => {
  const [step, setStep] = useState(1);
  const [steps] = useState([1, 2, 3, 4]);
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  const [children, setChildren] = useState();
  const [type, setType] = useState(0);
  const [nights, setNights] = useState("");
  const [insurance, setInsurance] = useState(0);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [secname, setSecname] = useState("");
  const [phone, setPhone] = useState("");
  const [summ, setSumm] = useState(0);

  useEffect(() => {
    setSumm(
      adults * nights * ((price / 100) * insurance + price) +
        (kids / 2) * nights * ((price / 100) * insurance + price)
    );
  }, [price, insurance, nights, adults, kids]);
  return (
    <>
      <div className="page-wrapper">
        {step === 1 && (
          <FirstStep
            step={step}
            steps={steps}
            setStep={setStep}
            adults={adults}
            setAdults={setAdults}
            kids={kids}
            setKids={setKids}
            children={children}
            setChildren={setChildren}
            type={type}
            setType={setType}
            nights={nights}
            setNights={setNights}
            insurance={insurance}
            setInsurance={setInsurance}
            price={setPrice}
            summ={summ}
          />
        )}
        {step === 2 && (
          <SecondStep
            step={step}
            steps={steps}
            setStep={setStep}
            name={name}
            setName={setName}
            surname={surname}
            setSurname={setSurname}
            secname={secname}
            setSecname={setSecname}
            phone={phone}
            setPhone={setPhone}
          />
        )}
        {step === 3 && (
          <ThirdStep
            step={step}
            steps={steps}
            setStep={setStep}
            adults={adults}
            kids={kids}
            children={children}
            type={type}
            nights={nights}
            insurance={insurance}
            price={price}
            name={name}
            surname={surname}
            secname={secname}
            phone={phone}
            summ={summ}
          />
        )}
        {step === 4 && (
          <ThanksStep
            step={step}
            steps={steps}
            setStep={setStep}
            adults={setAdults}
            kids={setKids}
            children={setChildren}
            type={setType}
            nights={setNights}
            insurance={setInsurance}
            price={setPrice}
            name={setName}
            surname={setSurname}
            secname={setSecname}
            phone={setPhone}
          />
        )}
      </div>
    </>
  );
};

export default Mainpage;
