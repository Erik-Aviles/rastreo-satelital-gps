import React from "react";
import { Helmet } from "react-helmet";
import SelecctList from "./SelecctList";

const devicesType = ['auto', 'Carro', 'Otros']

const RegisterUser = () => {
  return (
    <>
      <Helmet>
        <title>Registro de usuario - Rastreo Satelital</title>
      </Helmet>
      <section className="RegisterUser">
        <figure className="RegisterUser-container_logo">
          <img className="logo-image" src="" alt="Soy un logo" />
        </figure>
        <h2 className="RegisterUser-title subtitle">Registro</h2>
        <form className="RegisterUser_content-form">
          <div>
            <div>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="" placeholder="Escribir nombre" />
            </div>
            <div>
              <label htmlFor="apellido">Apellidos</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Escribir apellido"
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            placeholder="hello@dayli.com" />

          <label htmlFor="adrdress">Direccion</label>
          <input
            type="text"
            id="adrdress"
            name="adrdress"
            placeholder="Escribir direccion"
          />

          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            placeholder="**********" />
          <label htmlFor="confir-password">Confirmar Contraseña</label>
          <input
            type="password"
            id="confir-password"
            name="confir-password"
            placeholder="**********"
          />
          <SelecctList title='dispositivo' options={devicesType}/>
          {/* <select>
            <option>Seleccionar</option>
            <option>Moto</option>
            <option>Carro</option>
            <option>Otros</option>
          </select> */}


          <button type="button">Registrar</button>
        </form>
        <div className="RegisterUser_content--select-two">
          <p> Ya tienes una cuenta?</p>
          <a href="/"> Login</a>
        </div>
      </section>
    </>
  );
};

export default RegisterUser;
