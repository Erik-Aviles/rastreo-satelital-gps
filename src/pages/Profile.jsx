import React from "react";
import { CiUser } from "react-icons/ci";
import ButtonSalir from "../components/ButtonSalir";
import TitleH2 from "../components/TitleH2";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
      <TitleH2>Mi Cuenta</TitleH2>
      <figure className="Logo-User">
        <p>Hola: Erika</p>
        <a href="/">
          <CiUser size={50}/>
        </a>
      </figure>

      <div className="Profile_data-content">
        <p className="Profile_title">Datos personales</p>
        <div className="Profile_personal-data">
          <div className="sub-Content">
            <p className="Profile_subtitle">Nombre Completo</p>
            <p className="data_user">Erika Patricia Aviles Cortez</p>
          </div>
        </div>
      </div>
      <div className="Profile_data-content">
        <p className="Profile_title">Datos de contactos</p>
        <div className="Profile_personal-data">
          <div className="sub-Content border-botton">
            <p className="Profile_subtitle">Correo electronico</p>
            <p className="data_user">erik8822@hotmail.com</p>
          </div>
          <div className="sub-Content ">
            <p className="Profile_subtitle">Numero de celular</p>
            <p className="data_user">0963616800</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
