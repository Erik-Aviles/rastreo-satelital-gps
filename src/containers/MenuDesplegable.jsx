import React from "react";
import "../styles/MenuDesplegable.css";

const MenuDesplegable = () => {
  return (
    <div className="Menu-desplegable">
      <div className="Menu-desplegable_header">
        <h3>Erika</h3>
        <figure>
          <img src="" alt="user" />
        </figure>
      </div>
      <div className="Menu-desplegable_body">
        <ul>
          <a href="/">
            <li>Mis dispositivos <span>&gt;</span></li>
          </a>
          <a href="/">
            <li>Historial <span>&gt;</span></li>
          </a>
          <a href="/">
            <li>Alertas <span>&gt;</span></li>
          </a>
          <a href="/">
            <li>Perfil <span>&gt;</span></li>
          </a>
          <a href="/">
            <li>Informacion de la app <span>&gt;</span></li>
          </a>
          <a href="/">
            <li>Salir</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default MenuDesplegable;
