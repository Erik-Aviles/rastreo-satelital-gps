import React from "react";
import { useParams } from "react-router-dom";
import TitleH2 from "../components/TitleH2";
import { inicialDataDevice } from "../const/inicailDataDevice";

import "../styles/Device.css";

const Device = () => {
  const { slug } = useParams();
  console.log(slug);
  const goDevice = inicialDataDevice.find(
    (device) => `${device.marca}-${device.placa}`.toLowerCase() === slug
  );

  return (
    <section className="Device">
      <TitleH2>Dispositivo</TitleH2>
      <div className="Device-container">
        <div className="Device-data ">
          <h3 className="Device_subTitle">Datos del dispositivo</h3>
          <div className="Device-conteiner_info">
            <p className="data-title">
              Placa: <span className="data">{goDevice.placa}</span>
            </p>
            <p className="data-title">
              Marca: <span className="data">{goDevice.marca}</span>
            </p>
            <p className="data-title">
              Modelo: <span className="data">{goDevice.modelo}</span>
            </p>
            <p className="data-title">
              Imai: <span className="data">{goDevice.imei}</span>
            </p>
            <p className="data-title">
              Fecha y hora suscripcion:
              <span className="data">{goDevice.dateSuscription}</span>
            </p>
          </div>
        </div>
        <div className="Device-data ">
          <h3 className="Device_subTitle">Datos de ultima actualizacion</h3>
          <div className="Device-conteiner_info">
            <div className="data-title">
              <p> Direccion salida: </p>
              <span className="data">
                {goDevice.crawlStatuses.departureAddress}
              </span>
            </div>
            <div className="data-title">
              <p> Direccion llegada: </p>
              <span className="data">
                {goDevice.crawlStatuses.arrivalAddress}
              </span>
            </div>
            <div className="data-title">
              <p> Estado: </p>{" "}
              <span className="data">{goDevice.crawlStatuses.state}</span>
            </div>
            <div className="data-title">
              <p> Fecha/hora encendido: </p>
              <span className="data">{goDevice.crawlStatuses.starTime}</span>
            </div>
            <div className="data-title">
              <p> Fecha/hora apagado:</p>
              <span className="data">{goDevice.crawlStatuses.endTime}</span>
            </div>
            <div className="data-title">
              <p> Kilometros recorridos: </p>
              <span className="data">{goDevice.crawlStatuses.distance}</span>
            </div>
            <div className="data-title">
              <p> Velocidad: </p>
              <span className="data">{goDevice.crawlStatuses.velocity}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Device;
