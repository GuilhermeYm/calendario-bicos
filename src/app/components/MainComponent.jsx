import React from "react";
import "./style/MainComponentStyle.css";
import { SlCalender } from "react-icons/sl";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const MainComponent = () => {
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
            <div className="nameMonth-space">Janeiro</div>
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
