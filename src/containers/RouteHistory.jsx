import React from "react";
import { Helmet } from "react-helmet";
import ButtonSalir from "../components/ButtonSalir";
import RouteHistoryTable from "../components/RouteHistoryTable";
import SelecctList from "../components/SelecctList";
import TitleH2 from "../components/TitleH2";

const devices = ["AEI123", "ZYH463", "USD098"];
const period = ["Hoy", "Ayer", "Semana actual", "Ultimo mes"];
const RouteHistory = () => {
  return (
    <>
      <Helmet>
        <title>Historial- Rastreo Satelital</title>
      </Helmet>
      <section className="Route-History">
        <TitleH2>Route history</TitleH2>
        <div className="select-device">
          <div className="choose-option">
            <SelecctList title="device" options={devices} />
            <SelecctList title="periodo" options={period} />
            <button type="button">Mostrar</button>
          </div>
          <div className="displays-selection">
            <p>USD098</p>
            <p>Hoy</p>
          </div>
        </div>
        <div className="route-history-display">
          <RouteHistoryTable />
        </div>
        <div className="button-options-below">
          <button>Exportar</button>
          <button>Reporte</button>
          {/* mensaje via whatsApp */}
          <button>Limpiar</button>
          <ButtonSalir>X</ButtonSalir>
        </div>
      </section>
    </>
  );
};

export default RouteHistory;
