import React from "react";
import { Helmet } from "react-helmet";
import SelecctList from "./SelecctList";
import TitleH2 from "./TitleH2";
import "../styles/RegisterUser.css";

const devicesType = ["auto", "Carro", "Otros"];

const RegisterUser = () => {
  return (
    <>
      <Helmet>
        <title>Registro de usuario - Rastreo Satelital</title>
      </Helmet>
      <section className="Register-user">
        <div className="Top-frame frame"></div>
        <div className="Middle-frame">
          <TitleH2>Registro de Usuario</TitleH2>
          <form className="Content-form">
            <div className="date-user">
              <div className="name-user">
                <label className="label-design" htmlFor="name">
                  Nombres
                </label>
                <input
                  className="input-design"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Escribir nombre"
                  required
                />
              </div>
              <div className="name-user">
                <label className="label-design" htmlFor="apellido">
                  Apellidos
                </label>
                <input
                  className="input-design"
                  type="text"
                  id="apellido"
                  name="apellido"
                  placeholder="Escribir apellido"
                  required
                />
              </div>
            </div>
            <div className="label-input">
              <label className="label-design" htmlFor="email">
                Email
              </label>
              <input
                className="input-design"
                type="email"
                id="email"
                name="email"
                placeholder="hello@dayli.com"
                required
              />
            </div>

            <div className="label-input">
              <label className="label-design" htmlFor="adrdress">
                Direccion
              </label>
              <input
                className="input-design"
                type="text"
                id="adrdress"
                name="adrdress"
                placeholder="Escribir direccion"
                required
              />
            </div>

            <div className="label-input">
              <label className="label-design" htmlFor="password">
                Contraseña
              </label>
              <input
                className="input-design"
                type="password"
                id="password"
                name="password"
                placeholder="**********"
                required
              />
            </div>
            <div className="label-input">
              <label className="label-design" htmlFor="confir-password">
                Confirmar Contraseña
              </label>
              <input
                className="input-design"
                type="password"
                id="confir-password"
                name="confir-password"
                placeholder="**********"
                required
              />
            </div>
            <SelecctList title="dispositivo" options={devicesType} />
            {/* <select>
            <option>Seleccionar</option>
            <option>Moto</option>
            <option>Carro</option>
            <option>Otros</option>
          </select> */}

            <button className="Button-register" type="button">Registrar</button>
          </form>
          <div className="Register-user_content--select-two">
            <p> Ya tienes una cuenta?</p>
            <a href="/"> Login</a>
          </div>
        </div>
        <div className="Frame-below frame"></div>
      </section>
    </>
  );
};

export default RegisterUser;
