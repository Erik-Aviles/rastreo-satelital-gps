import React from "react";
import TitleH2 from "../components/TitleH2";
import  '../styles/Profile.css'

const Profile = () => {
  return (
    <>
      <TitleH2>Mi Cuenta</TitleH2>
      <div className="Profile">
        <figure>
          <img src="" alt="user" />
        </figure>
        <div className="Profile_my-account">
          <p className="Profile_name-user">Erika Aviles Cortez</p>
          <p className="Profile_email-user" >erik8822@hotmail.com</p>
        </div>
        <button className="Profile_close-sesion">Cerrar sesion</button>
      </div>
    </>
  );
};

export default Profile;
