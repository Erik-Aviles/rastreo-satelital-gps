import React from "react";

import {
  AlertIcon,
  DeviceIcon,
  HistoryIcon,
  InfoAppIcon,
  LogoutIcon,
  ForwardIcon,
} from "./Icons";
import "../styles/MenuDesplegable.css";
import { routing } from "../const/routing";
import { NavLink } from "react-router-dom";

const MenuDesplegable = () => {

  return (
    <section className="Menu">
      <nav className="nav-menu">
        <div className="menu-container_desplegable">
          <ul className="menu_desplegable">
            {routing.map((route) => (
              <li key={route.text} className="menu-item">
                <div className="menu-desplegable_left">
                  <div className="menu-container-icons">
                    {route.text === "Mis dispositivos" && <DeviceIcon />}
                    {route.text === "Historial" && <HistoryIcon />}
                    {route.text === "Alertas" && <AlertIcon />}
                    {route.text === "Sobre la APP" && <InfoAppIcon />}
                    {route.text === "Cerrar sesion" && <LogoutIcon />}
                  </div>
                  {route.text === "Cerrar sesion" ? (
                    <NavLink to={route.to}>
                      <h4 style={{ color: "var(--color-error)" }}>
                        {route.text}{" "}
                      </h4>
                    </NavLink>
                  ) : (
                    <h4>{route.text}</h4>
                  )}
                </div>
                <NavLink to={route.to}>
                  <div className="menu-desplegable_rigth">
                    {route.text === "Cerrar sesion" ? null : <ForwardIcon />}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default MenuDesplegable;
