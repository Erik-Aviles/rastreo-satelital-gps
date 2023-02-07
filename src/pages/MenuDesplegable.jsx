import React from "react";
import ButtonSalir from "../components/ButtonSalir";
import Logo from "../components/Logo";
import {
  UserIcon,
  AlertIcon,
  DeviceIcon,
  HistoryIcon,
  InfoAppIcon,
  LogoutIcon,
  ForwardIcon,
} from "../components/Icons";
import "../styles/MenuDesplegable.css";

const MenuDesplegable = () => {
  const styles = {
    size: 30,
    color: "var(--color-medium)",
  };
  return (
    <div className="Menu">
      <div className="menu-logos">
        <Logo />
        <ButtonSalir>X</ButtonSalir>
      </div>
      <div className="menu-user">
        <UserIcon />
      </div>

      <div className="menu-container_desplegable">
        <ul className="menu_desplegable">
          <li className="menu-item">
            <div className="menu-desplegable_left">
              <div className="menu-container-icons">
                <DeviceIcon />
              </div>
              <h4>Mis dispositivos</h4>
            </div>
            <a href="/">
              <div className="menu-desplegable_rigth">
                <ForwardIcon />
              </div>
            </a>
          </li>
          <li className="menu-item">
            <div className="menu-desplegable_left">
              <div className="menu-container-icons">
                <HistoryIcon />
              </div>
              <h4>Historial</h4>
            </div>
            <a href="/">
              <div className="menu-desplegable_rigth">
                <ForwardIcon />
              </div>
            </a>
          </li>
          <li className="menu-item">
            <div className="menu-desplegable_left">
              <div className="menu-container-icons">
                <AlertIcon />
              </div>
              <h4>Alertas</h4>
            </div>
            <a href="/">
              <div className="menu-desplegable_rigth">
                <ForwardIcon />
              </div>
            </a>
          </li>
          <li className="menu-item">
            <div className="menu-desplegable_left">
              <div className="menu-container-icons">
                <InfoAppIcon />
              </div>
              <h4>Informacion de la app</h4>
            </div>
            <a href="/">
              <div className="menu-desplegable_rigth">
                <ForwardIcon />
              </div>
            </a>
          </li>

          <li className="menu-item">
            <div className="menu-desplegable_left">
              
                <div className="menu-container-icons">
                  <LogoutIcon />
                </div>
                <a href="/"><h4>Cerrar sesion</h4></a>
              
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuDesplegable;
