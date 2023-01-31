import React from "react";
import { Helmet } from "react-helmet";
import ButtonSalir from "../components/ButtonSalir";
import inicialData from "../components/const/inicialData";
import SelecctList from "../components/SelecctList";
import TitleH2 from "../components/TitleH2";
import ShowDeviceTable from "../components/ShowDeviceTable";

const devices = ["AEI123", "ZYH463", "USD098"];
const period = ["Hoy", "Ayer", "Semana actual", "Ultimo mes"];
const RouteHistory = () => {
  const columns = [
    { name: "Nombre disp.", selector: (row) => row.name },
    { name: "Direccion", selector: (row) => row.address },
    { name: "Latitud", selector: (row) => row.latitude },
    { name: "Longitud", selector: (row) => row.longitude },
    { name: "Estado", selector: (row) => row.state },
    { name: "Hora inicio", selector: (row) => row.starTime },
    { name: "Hora fin", selector: (row) => row.endTime },
    { name: "Velocidad", selector: (row) => row.velocity },
    { name: "Bloqueo", selector: (row) => row.blocked },
    { name: "Duracion", selector: (row) => row.duration },
    { name: "Distancia", selector: (row) => row.distance },
    { name: "Total distancia", selector: (row) => row.totalDistance },
    { name: "Total horas", selector: (row) => row.hours },
    { name: "Odometro", selector: (row) => row.odometer },
  ];
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
          <ShowDeviceTable  columns={columns} data={inicialData}/>
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
