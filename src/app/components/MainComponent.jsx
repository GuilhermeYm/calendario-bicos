"use client";

import React from "react";
import "./style/MainComponentStyle.css";
import { SlCalender } from "react-icons/sl";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { useEffect, useState } from "react";
import useDays from "../hooks/useDays";

const MainComponent = () => {
  const { days, totalDays } = useDays();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [ totalDaysMain, setTotalDaysMain ] = useState(0);

  const indentifyMonth = (month) => {
    switch (month) {
      case 1:
        return "Janeiro";
      case 2:
        return "Fevereiro";
      case 3:
        return "Março";
      case 4:
        return "Abril";
      case 5:
        return "Maio";
      case 6:
        return "Junho";
      case 7:
        return "Julho";
      case 8:
        return "Agosto";
      case 9:
        return "Setembro";
      case 10:
        return "Outubro";
      case 11:
        return "Novembro";
      case 12:
        return "Dezembro";
      default:
        return "Mês não identificado";
    }
  }

  useEffect(() => {
    setDay(days.dia);
    setMonth(indentifyMonth(days.mes));
    setYear(days.ano);
    setTotalDaysMain(totalDays);
  }, [days]);

  return (
    <>
      <h1 className="titleMainContainer">
        👋 Olá, bem-vindo ao caléndario Bicos
      </h1>
      {/* Template do calendário*/}
      <article className="articleContainer">
        <section className="miscellaneousMainContainer">
          <button className="lastMonth buttonMain">
            <GrFormPreviousLink />
          </button>
          <h2 className="nameMonth">
            <SlCalender />
            <div className="nameMonth-space">{month}</div>
            <div className="styleMonth">
                <i className="inline-block">de</i>
                <p className="inline-block">{year}</p>
            </div>
          </h2>
          <button className="nextMonth buttonMain">
            <GrFormNextLink />
          </button>
        </section>
        <section className="containerDays">
          <div className="dom">
            <h2 className="dayOfTheWeek">Domingo</h2>
            <div className="dayCounterContainer">
              <p className="dayCounter">1</p>
            </div>
          </div>
          <div className="seg">
            <h2 className="dayOfTheWeek">Segunda-feira</h2>
            <p className="dayCounter">2</p>
          </div>
          <div className="terc">
            <h2 className="dayOfTheWeek">Terça-Feira</h2>
            <p className="dayCounter">3</p>
          </div>
          <div className="quart">
            <h2 className="dayOfTheWeek">Quarta-feira</h2>
            <p className="dayCounter">4</p>
          </div>
          <div className="quint">
            <h2 className="dayOfTheWeek">Quinta-Feira</h2>
            <p className="dayCounter">5</p>
          </div>
          <div className="sex">
            <h2 className="dayOfTheWeek">Sexta-feira</h2>
            <p className="dayCounter">6</p>
          </div>
          <div className="sab">
            <h2 className="dayOfTheWeek">Sábado</h2>
            <p className="dayCounter">7</p>
          </div>
        </section>
      </article>
    </>
  );
};

export default MainComponent;
