import React from "react";
import { Helmet } from "react-helmet";
import "../styles/RegisterDevice.css";

import ButtonSalir from "./ButtonSalir";
import SelecctList from "./SelecctList";
import TitleH2 from "./TitleH2";

const tipoCombustible = ["Gasolina", "Disel", "Eléctrico", "Otro"];

const RegisterDevice = () => {
  return (
    <>
      <Helmet>
        <title>Registro de dispositivo - Rastreo Satelital</title>
      </Helmet>
      <section className="Register-Device">
        <TitleH2>Registro de dispositivo</TitleH2>
        <form className="Device_Content-form">
          <div className="Device-label-input">
            <label className="label-design" htmlFor="placa">
              Placa
            </label>
            <input
              className="input-design"
              type="text"
              id="placa"
              name="placa"
              placeholder="Ej: 'ABC123'"
              required
            />
          </div>
          <div className="Device-label-input">
            <label className="label-design" htmlFor="gps-imei">
              Imei del gps
            </label>
            <input
              className="input-design"
              type="text"
              id="gps-imei"
              name="gps-imei"
              placeholder="Ej: '0987654321'"
              required
            />
          </div>
          <div className="Device-label-input">
            <label className="label-design" htmlFor="placa">
              Placa
            </label>
            <input
              className="input-design"
              type="text"
              id="placa"
              name="placa"
              placeholder="Ej: 'ABC123'"
              required
            />
          </div>
          <div className="Device-label-input">
            <label className="label-design" htmlFor="gps-imei">
              Imei del gps
            </label>
            <input
              className="input-design"
              type="text"
              id="gps-imei"
              name="gps-imei"
              placeholder="Ej: '0987654321'"
              required
            />
          </div>
          <div className="Device-label-input">
            <label className="label-design" htmlFor="placa">
              Placa
            </label>
            <input
              className="input-design"
              type="text"
              id="placa"
              name="placa"
              placeholder="Ej: 'ABC123'"
              required
            />
          </div>
          <div className="Device-label-input">
            <label className="label-design" htmlFor="gps-imei">
              Imei del gps
            </label>
            <input
              className="input-design"
              type="text"
              id="gps-imei"
              name="gps-imei"
              placeholder="Ej: '0987654321'"
              required
            />
          </div>
          <div className="Device-label-input">
            <label className="label-design" htmlFor="placa">
              Placa
            </label>
            <input
              className="input-design"
              type="text"
              id="placa"
              name="placa"
              placeholder="Ej: 'ABC123'"
              required
            />
          </div>
          <div className="Device-label-input">
            <label className="label-design" htmlFor="gps-imei">
              Imei del gps
            </label>
            <input
              className="input-design"
              type="text"
              id="gps-imei"
              name="gps-imei"
              placeholder="Ej: '0987654321'"
              required
            />
          </div>
          <div className="Device-label-input">
            <label className="label-design" htmlFor="year">
              Marca
            </label>
            <input
              className="input-design"
              type="text"
              id="year"
              name="year"
              placeholder="*Ej: ´2020´"
            />
          </div>
          <div className="Device-label-input">
            <label className="label-design" htmlFor="modelo">
              Modelo - año
            </label>
            <input
              className="input-design"
              type="text"
              id="modelo"
              name="modelo"
              placeholder="Ej: 'Mazda'"
            />
          </div>
          <div className="Device-label-input">
            <label className="label-design" htmlFor="color">
              Color
            </label>
            <input
              className="input-design"
              type="text"
              id="color"
              name="color"
              placeholder="Escribir color"
            />
          </div>
          <div className="Device-label-input">
            <label className="label-design" htmlFor="chasis">
              Chasis
            </label>
            <input
              className="input-design"
              type="text"
              id="chasis"
              name="chasis"
              placeholder="*Ej: ´1234567890´"
            />
          </div>
          <div className="Device-label-input">
            <label className="label-design" htmlFor="combustible">
              Combustible
            </label>
            <select
              className="input-design"
              name="combustible"
              id="combustible"
            >
              <option value="">Elegir</option>
              {tipoCombustible.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
          <div className="Device-label-input">
            <label className="label-design" htmlFor="image">
              Imagen dispositivo
            </label>
            <input
              className="input-design"
              type="file"
              id="image"
              name="image"
            />
          </div>
        </form>
        <div className="container-button-register">
          <button className="Button-register" type="button">
            Registrar
          </button>
        </div>
        <ButtonSalir size={20} />
      </section>
    </>
  );
};

export default RegisterDevice;
