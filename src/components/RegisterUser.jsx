import React from "react";
import { Helmet } from "react-helmet";
import SelecctList from "./SelecctList";
import TitleH2 from "./TitleH2";
import "../styles/RegisterUser.css";
import ButtonSalir from "./ButtonSalir";

const devicesType = ["auto", "Carro", "Otros"];

const RegisterUser = () => {
  return (
    <>
      <Helmet>
        <title>Registro de usuario - Rastreo Satelital</title>
      </Helmet>
      <section className="Register-user">
        <TitleH2>Registro de Usuario</TitleH2>
        <form className="Content-form">
          <div className=" label-input">
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
            <label className="label-design" htmlFor="phono">
              Celular
            </label>
            <input
              className="input-design"
              type="text"
              id="phono"
              name="phono"
              placeholder="Escribir numero de celular"
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

          <div className="label-input">
            <label className="label-design" htmlFor='device'>Dispositivo</label>
            <select className="input-design" name="device" id="device">
              <option value="">Elegir</option>
              {devicesType.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
              //{" "}
            </select>
          </div>
        </form>
        <div className="container-button-register">
          <button className="Button-register" type="button">
            Registrar
          </button>
        </div>
        <div className="Register-user_content--select-two">
          <p> Ya tienes una cuenta?</p>
          <a href="/"> Login</a>
        </div>
        <ButtonSalir size={20} />
      </section>
    </>
  );
};

export default RegisterUser;
