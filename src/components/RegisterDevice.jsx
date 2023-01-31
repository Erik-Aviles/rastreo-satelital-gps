import React from "react";
import { Helmet } from "react-helmet";
import ButtonSalir from "./ButtonSalir";
import SelecctList from "./SelecctList";
import TitleH2 from "./TitleH2";

const tipoCombustible  = ['Gasolina', 'Disel', 'Eléctrico', 'Otro']

const RegisterDevice = () => {
  return (
    <>
      <Helmet>
        <title>Registro de dispositivo - Rastreo Satelital</title>
      </Helmet>
      <section className="Register-User">
        <figure className="Register-User-container_logo">
          <img className="logo-image" src="" alt="Soy un logo" />
        </figure>
        <TitleH2>Registro de dispositivo</TitleH2>
        <form className="Register-User_content-form">
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
            placeholder="Ej: 'ABC123'"
            required
          />
          <label htmlFor="gps-imei">Imei del gps</label>
          <input
            type="text"
            id="gps-imei"
            name="gps-imei"
            placeholder="Ej: '0987654321'"
            required
          />

          <label htmlFor="modelo">Modelo</label>
          <input
            type="email"
            id="modelo"
            name="modelo"
            placeholder="Ej: 'Mazda'"
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
            placeholder="*Ej: ´2020´"
          />
          <label htmlFor="chasis">Chasis</label>
          <input
            type="password"
            id="chasis"
            name="chasis"
            placeholder="*Ej: ´1234567890´"
          />
          <label htmlFor="image">Subir foto</label>
          <input
            type="file"
            id="image"
            name="image"
            placeholder="Seleccionar Foto"
          />
          <SelecctList title= 'Combustible' options={tipoCombustible}/>
{/* 
          <label htmlFor="chasis">Combustible</label>
          <select>
            <option>Seleccionar</option>
            <option>gasolina</option>
            <option>disel</option>
            <option>Otros</option>
          </select> */}

          <button type="button">Registrar</button>
        </form>
        <ButtonSalir>X</ButtonSalir>
      </section>
    </>
  );
};

export default RegisterDevice;
