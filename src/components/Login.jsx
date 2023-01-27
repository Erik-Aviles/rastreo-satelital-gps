import React from "react";
import { Helmet } from "react-helmet";
import TitleH2 from "./TitleH2";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login - Rastreo Satelital</title>
      </Helmet>
      <section className="Login">
        <figure className="Login-container_logo">
          <img className="logo-image" src="" alt="Soy un logo" />
        </figure>
        <TitleH2>Login</TitleH2>
        <h2 className="Login-title subtitle">Login</h2>
        <form className="Login_content-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="hello@dayli.com" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="**********" />
          <div className="Login_content--select-one">
            <div className="Login_content-2--rigth">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Recordarme </label>
            </div>
            <div className="Login_content-2--left">
              <a href="/">
                <p htmlFor="forgot-password">Olvide mi contraseña</p>
              </a>
            </div>
          </div>
          <button type="button">Login</button>
        </form>
        <div className="Login_content--select-two">
          <p> No tienes una cuenta?</p>
          <a href="/"> Registrate</a>
        </div>
      </section>
      {/* <form>
        <fieldset>
          <legend>Información Personal</legend>
          Nombre: <input name="nombre" type="text" tabindex="1" />
          Apellidos: <input name="apellidos" type="text" tabindex="2" />
        </fieldset>

        <fieldset>
          <legend>edad</legend>
          <input type="checkbox" tabindex="20" name="edad" value="20-39" />{" "}
          20-39
          <input type="checkbox" tabindex="21" name="edad" value="40-59" />{" "}
          40-59
          <input type="checkbox" tabindex="22" name="edad" value="60-79" />{" "}
          60-79
        </fieldset>
      </form> */}
    </>
  );
};

export default Login;
