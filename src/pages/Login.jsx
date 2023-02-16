import React from "react";
import { Helmet } from "react-helmet";
import { NavLink, useNavigate } from "react-router-dom";
import TitleH2 from "../components/TitleH2";
import "../styles/Login.css";

const Login = () => {
  const navegate = useNavigate()
  const onClickLogin = () => {
    navegate('/home')
  }
  return (
    <>
      <Helmet>
        <title>Login - Rastreo Satelital</title>
      </Helmet>
      <section className="Login">
        <div className="Top-frame">
          <img
            className="logo-image"
            src="../assets/images/DrawKit Vector Illustration Sleep & Health (5).png"
            alt="Soy un logo"
          />
        </div>
        <div className="Middle-frame">
          <TitleH2>Login</TitleH2>
          <form className="Login-Content-form">
            <label className="label-design" htmlFor="email">
              Email
            </label>
            <input
              className="input-design"
              type="email"
              id="email"
              placeholder="hello@dayli.com"
            />
            <label className="label-design" htmlFor="password">
              Password
            </label>
            <input
              className="input-design"
              type="password"
              id="password"
              placeholder="**********"
            />
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
            <button onClick={onClickLogin} className="Button-Login" type="button">Login</button>
          </form>
          <div className="Login_content--select-two">
            <p> No tienes una cuenta?</p>
            <NavLink to='/register-user' className='Nav-login'> Registrate</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
