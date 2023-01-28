import React from "react";
import ButtonSalir from "./ButtonSalir";
import '../styles/CurrentDevice.css'

const CurrentDevice = () => {
  return (
    <article className="Current-Device">
      <ButtonSalir>x</ButtonSalir>
      <h4>AEI1234</h4>
      <div>
        <p>01-03-2020</p>
        <p>14:30</p>
      </div>
      <div>
        <ul>
          <li>
            Motor:{" "}
            <span>
              <em>Apagado</em>
            </span>
          </li>
          <li>
            Velocidad: <span>80 km/h</span>
          </li>
          <li>
            Horas acumuladas: <span>7:34:00</span>
          </li>
          <li>
            Kilometros recorridos: <span>30 km</span>
          </li>
          <li>
            Direccion: <span>Av. Walter Andrade</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CurrentDevice;
