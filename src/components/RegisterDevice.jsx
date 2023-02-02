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
      <section className="Register-user">
        <div className="Frame-below frame"></div>

        <div className="Middle-frame">
          <TitleH2>Registro de dispositivo</TitleH2>
          <form className="Content-form">
            <label className="label-design" htmlFor="name">
              Nombre
            </label>
            <input
              className="input-design"
              type="text"
              id="name"
              name="name"
              placeholder="Escribir nombre"
            />
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
            <label className="label-design" htmlFor="modelo">
              Modelo
            </label>
            <input
              className="input-design"
              type="text"
              id="modelo"
              name="modelo"
              placeholder="Ej: 'Mazda'"
            />
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
            <label className="label-design" htmlFor="year">
              Año
            </label>
            <input
              className="input-design"
              type="text"
              id="year"
              name="year"
              placeholder="*Ej: ´2020´"
            />
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
            <SelecctList title="Combustible" options={tipoCombustible} />
            <div className="image">
              <label className="label-design" htmlFor="image">
                Subir foto
              </label>
              <input
                className="input-design"
                type="file"
                id="image"
                name="image"
              />
            </div>
          </form>

          <button
            className='Button-register'
            type="button"
          >
            Register
          </button>
          <ButtonSalir />
        </div>
        <div className="Top-frame frame"></div>
      </section>
    </>
  );
};

export default RegisterDevice;
