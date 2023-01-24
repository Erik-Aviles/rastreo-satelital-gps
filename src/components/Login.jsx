import React from "react";
import { Helmet } from "react-helmet";

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
        <h2 className="Login-title subtitle">Login</h2>
        <form className="Login_content-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="hello@dayli.com" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="**********" />
          <div className="Login_content--select-one">
            <div className="Login_content-2--rigth">
              <input type="radio" id="radio" />
              <label htmlFor="radio">Recordarme </label>
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
    </>
  );
};

export default Login;
