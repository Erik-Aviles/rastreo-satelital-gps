import React from "react";
import ButtonSalir from "../components/ButtonSalir";
import TitleH2 from "../components/TitleH2";
import TypeAlerts from "./TypeAlerts";

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
      <div>
        {inicialAlerts.map((title) => (
          <TypeAlerts key={`alert-${title}`} title={title} />
        ))}
      </div>
      <ButtonSalir>X</ButtonSalir>
    </section>
  );
};

export default Alerts;
