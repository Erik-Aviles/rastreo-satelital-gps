import React from "react";
import { Helmet } from "react-helmet";
import TitleH2 from "./TitleH2";

const RegisterDevice = () => {
  return (
    <>
      <Helmet>
        <title>Registro de dispositivo - Rastreo Satelital</title>
      </Helmet>
      <section className="RegisterUser">
        <figure className="RegisterUser-container_logo">
          <img className="logo-image" src="" alt="Soy un logo" />
        </figure>
        <TitleH2>Registro de dispositivo</TitleH2>
        <form className="RegisterUser_content-form">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Escribir nombre"
          />

          <label htmlFor="placa">Placa</label>
          <input
            type="text"
            id="placa"
            name="placa"
            placeholder="Ejemplo 'ABC123'"
            required
          />
          <label htmlFor="gps-imei">Imei del gps</label>
          <input
            type="text"
            id="gps-imei"
            name="gps-imei"
            placeholder="Ejemplo '0987654321'"
            required
          />

          <label htmlFor="modelo">Modelo</label>
          <input
            type="email"
            id="modelo"
            name="modelo"
            placeholder="Ejemplo 'Mazda'"
          />

          <label htmlFor="color">Color</label>
          <input
            type="text"
            id="color"
            name="color"
            placeholder="Escribir color"
          />

          <label htmlFor="year">Año</label>
          <input
            type="password"
            id="year"
            name="year"
            placeholder="*Ejemplo ´2020´"
          />
          <label htmlFor="chasis">Chasis</label>
          <input
            type="password"
            id="chasis"
            name="chasis"
            placeholder="*Ejemplo ´1234567890´"
          />

          <label htmlFor="chasis">Combustible</label>
          <select>
            <option>Seleccionar</option>
            <option>gasolina</option>
            <option>disel</option>
            <option>Otros</option>
          </select>

          <button type="button">Registrar</button>
        </form>
      </section>
    </>
  );
};

export default RegisterDevice;
