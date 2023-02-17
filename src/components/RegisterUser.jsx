import React from "react";
import { Helmet } from "react-helmet";
import SelecctList from "./SelecctList";
import TitleH2 from "./TitleH2";
import "../styles/RegisterUser.css";
import ButtonSalir from "./ButtonSalir";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineCheck } from 'react-icons/ai'

const devicesType = ["auto", "Carro", "Otros"];

const RegisterUser = () => {
  const navegate = useNavigate();
  const onClicGoRegisterDevice = () => {
    navegate("/register-device");
  };
  const onClicRegisterUser = () => {
    navegate("/login");
  };

  return (
    <>
      <Helmet>
        <title>Registro de usuario - Rastreo Satelital</title>
      </Helmet>
      <section className="Register-user">
        <TitleH2>Registro de Usuario</TitleH2>
        <form className="Register-user_Content-form">
          <div className=" label-input">
            <div className="name-user">
              <label className="label-design" htmlFor="name">
                Nombres
              </label>
              <input
                className="Register-user_input-design"
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
                className="Register-user_input-design"
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
              className="Register-user_input-design"
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
              className="Register-user_input-design"
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
              className="Register-user_input-design"
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
              className="Register-user_input-design"
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
              className="Register-user_input-design"
              type="password"
              id="confir-password"
              name="confir-password"
              placeholder="**********"
              required
            />
          </div>
          <div className="label-input ">
            <label className="label-design" htmlFor="device">
              Dispositivo
            </label>
            <div className="Register-user_input-design">
              <button
                onClick={onClicGoRegisterDevice}
                className="button-register-device"
                type="button"
                id="register-device"
              >
                Registrar dispositivo
              </button>
              <label htmlFor="">ADE-234</label>
              <AiOutlineCheck color='green'/>
            </div>
          </div>
        </form>
        <div className="User_container-button-register">
          <button onClick={onClicRegisterUser} className="Button-register" type="button">
            Resgistrar
          </button>
        </div>
        <div className="Register-user_content--select-two">
          <p> Ya tienes una cuenta?</p>
          <Link to="/login"> Login</Link>
        </div>
      </section>
    </>
  );
};

export default RegisterUser;
