import React from "react";
import ButtonSalir from "../components/ButtonSalir";
import "../styles/MenuDesplegable.css";

const MenuDesplegable = () => {
  return (
    <div className="Menu-desplegable">
      <div className="Menu-desplegable_header">
        <div>
          <figure>
            <img src="" alt="logo" />
          </figure>
          <ButtonSalir>X</ButtonSalir>
        </div>
        <div>
          <h3>Erika</h3>
          <figure>
            <img src="" alt="user" />
          </figure>
        </div>
      </div>
      <div className="Menu-desplegable_body">
        <ul>
          <a href="/">
            <li>
              Mis dispositivos <span>&gt;</span>
            </li>
          </a>
          <a href="/">
            <li>
              Historial <span>&gt;</span>
            </li>
          </a>
          <a href="/">
            <li>
              Alertas <span>&gt;</span>
            </li>
          </a>
          <a href="/">
            <li>
              Perfil <span>&gt;</span>
            </li>
          </a>
          <a href="/">
            <li>
              Informacion de la app <span>&gt;</span>
            </li>
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
