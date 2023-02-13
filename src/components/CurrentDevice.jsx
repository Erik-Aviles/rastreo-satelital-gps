import React from "react";
import ButtonSalir from "./ButtonSalir";
import { AiTwotoneFlag } from "react-icons/ai";
import { FcAutomotive } from "react-icons/fc";
import { BsSlashLg } from "react-icons/bs";
import "../styles/CurrentDevice.css";

const CurrentDevice = () => {
  return (
    <article className="Current-Device">
      <div className="Dta-current">
        <div className="time-current">
          <p>01-03-2020</p>
          <BsSlashLg size={15} />
          <div className="motor-state">
            <FcAutomotive />
            <p>Apagado</p>
          </div>
        </div>
        <ButtonSalir size={15} />
      </div>

      <div className="Dta-current-address">
        <div className="address-data">
          <div className="address-data_left">
            <AiTwotoneFlag color="green" size={20} />
            <p className="address-name">
              Av. Walter Andrade Andrade Andrade Andrade
            </p>
          </div>
          <p className="time-data">14:30</p>
        </div>
        <div className="address-data">
          <div className="address-data_left">
            <AiTwotoneFlag color="black" size={20} />
            <p className="address-name">
              Av. Walter Andrade Walter v v Walter v v Walter
            </p>
          </div>
          <p className="time-data">14:30</p>
        </div>
      </div>

      <div className="box-data">
        <p className="box1 box">
          {" Placa: "}
          <span>
            H1342
          </span>
        </p>
        <p className="box2 box">
          {"Velocidad: "}
          <span>
            80 km/h
          </span>
        </p>
        <p className="box3 box">
          {"Duracion: "}
          <span>
            1:34:00
          </span>
        </p>
        <p className="box4 box">
          {"Kilometros: "}
          <span>
            80 km
          </span>
        </p>
      </div>
    </article>
  );
};

export default CurrentDevice;
