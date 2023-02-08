import React from "react";
import ButtonSalir from "../components/ButtonSalir";
import TitleH2 from "../components/TitleH2";
import "../styles/Device.css";

const Device = () => {
  return (
    <section className="Device">
      <TitleH2>Dispositivo</TitleH2>
      <div className="Device-data info">
        {" "}
        <h3 className="Device_subTitle">Datos del dispositivo</h3>
        <ul className="Device-conteiner_info">
          <li className="data-title">
            Placa: <span className="data">AEI123</span>
          </li>
          <li className="data-title">
            Marca: <span className="data">Mazda</span>
          </li>
          <li className="data-title">
            Modelo: <span className="data">xxxx</span>
          </li>
          <li className="data-title">
            Año: <span className="data">2020</span>
          </li>
          <li className="data-title">
            Imai: <span className="data">65432109874</span>
          </li>
          <li className="data-title">
            Fecha y hora suscripcion:{" "}
            <span>
              <span className="data">01/01/2020</span>
              <span className="data"> - </span>
              <span className="data">13:00</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="Last-updated-data info">
        {" "}
        <h3 className="Device_subTitle">Datos de ultima actualizacion</h3>
        <ul className="Device-conteiner_info">
          <li className="data-title">
            Direccion salida: <span className="data">Av. Walter Andrade</span>
          </li>
          <li className="data-title">
            Direccion llegada: <span className="data">Av. Jaime Roldos</span>
          </li>
          <li className="data-title">
            Estado: <span className="data">Apagado</span>
          </li>
          <li className="data-title">
            Bateria: <span className="data">Conectada</span>
          </li>
          <li className="data-title">
            Fecha/hora encendido: <span className="data">01/03/2020</span>
            <span className="data"> - </span>
            <span className="data">13:00</span>
          </li>
          <li className="data-title">
            Fecha/hora apagado:{" "}
            <span>
              <span className="data">01/01/2020</span>
              <span className="data"> - </span>
              <span className="data">13:00</span>
            </span>
          </li>
          <li className="data-title">
            Kilometros recorridos: <span className="data">30 km</span>
          </li>
          <li className="data-title">
            Velocidad: <span className="data">80 km/h</span>
          </li>
        </ul>
      </div>

      <ButtonSalir />
    </section>
  );
};

export default Device;
