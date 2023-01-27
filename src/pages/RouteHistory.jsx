import React from "react";
import { Helmet } from "react-helmet";
import RouteHistoryTable from "../components/RouteHistoryTable";
import SelecctList from "../components/SelecctList";

const devices = ['AEI123', 'ZYH463' , 'USD098']
const period = ['Hoy','Ayer', 'Semana actual', 'Ultimo mes']
const RouteHistory = () => {
  return (
    <>
      <Helmet>
        <title>Historial- Rastreo Satelital</title>
      </Helmet>
      <section className="Route-History">
        <div>
          <h2>Route history</h2>
        </div>
        <div className="select-device">
          <div className="choose-option">
            <SelecctList 
              title="device" 
              options={devices} 
            />
            <SelecctList 
              title="periodo" 
              options={period} 
            />
            {/* <select name="device" id="">
              <option value="1">Seleccionar</option>
              <option value="1">AEI123</option>
              <option value="2">ZYH463</option>
              <option value="3">USD098</option>
            </select>
            <select name="period" id="">
              <option value="1">Seleccionar</option>
              <option value="1">Hoy</option>
              <option value="2">Ayer</option>
              <option value="3">Semana actual</option>
              <option value="4">Semana pasada</option>
              <option value="4">Ultimo mes</option>
            </select> */}
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
          <button>X</button>
        </div>
      </section>
    </>
  );
};

export default RouteHistory;
