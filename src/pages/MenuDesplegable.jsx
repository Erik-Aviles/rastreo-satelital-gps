import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ButtonSalir from "../components/ButtonSalir";
import Logo from "../components/Logo";
import LogoUser from "../components/LogoUser";
import "../styles/MenuDesplegable.css";

const MenuDesplegable = () => {
  const styles = {
    size: 30,
    color: "var(--color-medium)",
  };
  return (
    <div className="Menu-container-desplegable">
      <div className="menu-logos">
        <Logo />
        <ButtonSalir>X</ButtonSalir>
      </div>
      <div className="menu-user">
        <LogoUser />
      </div>

      <div className="menu-container_desplegable">
        <ul className="menu_desplegable">
          <li className="menu-item">
            <div className="menu-desplegable_left">
              <span>logo</span>
              <h4>Mis dispositivos</h4>
            </div>
            <a href="/">
              <span className="menu-desplegable_rigth">&gt;</span>
            </a>
          </li>
          <li className="menu-item">
            <div className="menu-desplegable_left">
              <span>logo</span>
              <h4>Historial</h4>
            </div>
            <a href="/">
              <span className="menu-desplegable_rigth">&gt;</span>
            </a>
          </li>
          <li className="menu-item">
            <div className="menu-desplegable_left">
              <span>logo</span>
              <h4>Alertas</h4>
            </div>
            <a href="/">
              <span className="menu-desplegable_rigth">&gt;</span>
            </a>
          </li>
          <li className="menu-item">
            <div className="menu-desplegable_left">
              <span>logo</span>
              <h4>Perfil</h4>
            </div>
            <a href="/">
              <span className="menu-desplegable_rigth">&gt;</span>
            </a>
          </li>
          <li className="menu-item">
            <div className="menu-desplegable_left">
              <span>logo</span>
              <h4>Informacion de la app</h4>
            </div>
            <a href="/">
              <span className="menu-desplegable_rigth">&gt;</span>
            </a>
          </li>

          <a href="/">
            <li className="menu-item">Salir</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default MenuDesplegable;
