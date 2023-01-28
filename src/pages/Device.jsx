import React from "react";
import TitleH2 from "../components/TitleH2";

const Device = () => {
  return (
    <section className="Device">
      <TitleH2>Dispositivo</TitleH2>
      <h3>Datos del dispositivo</h3>
      <ul>
        <li>
          Placa: <span>AEI123</span>
        </li>
        <li>
          Marca: <span>Mazda</span>
        </li>
        <li>
          Modelo: <span>xxxx</span>
        </li>
        <li>
          Año: <span>2020</span>
        </li>
        <li>
          Imai: <span>65432109874</span>
        </li>
        <li>
          Fecha y hora suscripcion: <span>01/01/2020</span>
          <span> - </span>
          <span>13:00</span>
        </li>
      </ul>
      <h3>Datos de ultima actualizacion</h3>
      <ul>
        <li>
          Direccion salida: <span>Av. Walter Andrade</span>
        </li>
        <li>
          Direccion llegada: <span>Av. Jaime Roldos</span>
        </li>
        <li>
          Estado: <span>Apagado</span>
        </li>
        <li>
          Bateria: <span>Conectada</span>
        </li>
        <li>
          Fecha/hora encendido: <span>01/03/2020</span>
          <span> - </span>
          <span>13:00</span>
        </li>
        <li>
          Fecha/hora apagado: <span>01/03/2020</span>
          <span> - </span>
          <span>13:30</span>
        </li>
        <li>
          Kilometros recorridos: <span>30 km</span>
        </li>
        <li>
          Velocidad: <span>80 km/h</span>
        </li>
      </ul>
    </section>
  );
};

export default Device;
