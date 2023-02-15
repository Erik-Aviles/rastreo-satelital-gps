import React from "react";
import ButtonSalir from "./ButtonSalir";
import Logo from "./Logo";
import {
  UserIcon,
  AlertIcon,
  DeviceIcon,
  HistoryIcon,
  InfoAppIcon,
  LogoutIcon,
  ForwardIcon,
} from "./Icons";
import "../styles/MenuDesplegable.css";

const MenuDesplegable = ({handleToggleMenu}) => {
  const styles = {
    size: 30,
    color: "var(--color-medium)",
  };
  return (
    <section className="Menu">
      <nav className="nav-menu">
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
                <a href="/">
                  <h4>Cerrar sesion</h4>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default MenuDesplegable;
