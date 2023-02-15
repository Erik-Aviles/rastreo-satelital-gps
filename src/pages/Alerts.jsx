import React from "react";
import ButtonSalir from "../components/ButtonSalir";
import TitleH2 from "../components/TitleH2";
import TypeAlert from "../components/TypeAlert";
import "../styles/Alerts.css";

const inicialAlerts = [
  "Exceso de velocidad",
  "Bateria desconectada",
  "Motor encendido",
  "Motor apagado",
  "Geocercas",
];

const Alerts = () => {
  return (
    <section className="Alerts">
      <TitleH2>Alertas</TitleH2>
      <div className="Alert-containert">
        {inicialAlerts.map((title) => (
          <TypeAlert key={`alert-${title}`} title={title} />
        ))}
      </div>
      <ButtonSalir size={20}/>
    </section>
  );
};

export default Alerts;
