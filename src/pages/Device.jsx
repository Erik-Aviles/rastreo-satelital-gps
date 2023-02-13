import React from "react";
import ButtonSalir from "../components/ButtonSalir";
import TitleH2 from "../components/TitleH2";
import "../styles/Device.css";

const Device = () => {
  return (
    <section className="Device">
      <TitleH2>Dispositivo</TitleH2>
      <div className="Device-data ">
        <h3 className="Device_subTitle">Datos del dispositivo</h3>
        <div className="Device-conteiner_info">
          <p className="data-title">
            Placa: <span className="data">AEI123</span>
          </p>
          <p className="data-title">
            Marca: <span className="data">Mazda</span>
          </p>
          <p className="data-title">
            Modelo: <span className="data">xxxx</span>
          </p>
          <p className="data-title">
            Año: <span className="data">2020</span>
          </p>
          <p className="data-title">
            Imai: <span className="data">65432109874</span>
          </p>
          <p className="data-title">
            Fecha y hora suscripcion:{" "}
            <span>
              <span className="data">1/01/2020</span>
              <span className="data"> - </span>
              <span className="data">13:00</span>
            </span>
          </p>
        </div>
      </div>
      <div className="Device-data ">
        {" "}
        <h3 className="Device_subTitle">Datos de ultima actualizacion</h3>
        <div className="Device-conteiner_info">
          <div className="data-title">
           <p> Direccion salida: </p>  <span className="data">Av. Walter Andrade</span>
          </div>
          <div className="data-title">
           <p> Direccion llegada: </p> <span className="data">Av. Jaime Roldos</span>
          </div>
          <div className="data-title">
           <p> Estado: </p> <span className="data">Apagado</span>
          </div>
          <div className="data-title">
           <p> Bateria: </p> <span className="data">Conectada</span>
          </div>
          <div className="data-title">
           <p> Fecha/hora encendido: </p> <span className="data"> 1/03/2020</span>
            <span className="data"> - </span>
            <span className="data">13:00</span>
          </div>
          <div className="data-title">
           <p> Fecha/hora apagado:</p> 
            <span>
              <span className="data"> 1/01/2020</span>
              <span className="data"> - </span>
              <span className="data">13:00</span>
            </span>
          </div>
          <div className="data-title">
           <p> Kilometros recorridos: </p> <span className="data">30 km</span>
          </div>
          <div className="data-title">
           <p> Velocidad: </p> <span className="data">80 km/h</span>
          </div>
        </div>
      </div>
      <ButtonSalir size={20}/>
    </section>
  );
};

export default Device;
