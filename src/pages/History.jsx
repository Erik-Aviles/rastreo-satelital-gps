import React from "react";
import { Helmet } from "react-helmet";
import inicialData from "../const/inicialData";
import TitleH2 from "../components/TitleH2";
import ShowDeviceTable from "../components/ShowDeviceTable";
import { inicialDataDevice } from "../const/inicailDataDevice";
import "../styles/History.css";

const period = ["Hoy", "Ayer", "Semana actual", "Ultimo mes"];
const History = () => {
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
        <title>Historial - Rastreo Satelital</title>
      </Helmet>
      <section className="History">
        <TitleH2>Historial de rutas</TitleH2>
        <div className="choose-option">
          <div className="SelecctList">
            <select name="select-device" id="select-device">
              <option className="SelecctList_option" value="">
                {"Dispositivos"}
              </option>
              {inicialDataDevice.map((el) => (
                <option key={el.id} value={el.placa}>
                  {`${el.placa} `.toUpperCase() + ` - ${el.marca}`}
                </option>
              ))}
            </select>
          </div>
          <div className="SelecctList">
            <select name="select-period" id="select-period">
              <option className="SelecctList_option" value="">
                {"Periodo"}
              </option>
              {period.map((el, index) => (
                <option key={`select-${index}`} value={`select-${index}`}>
                  {el}
                </option>
              ))}
            </select>
          </div>
          <button type="button">Mostrar</button>
        </div>
        <div className="route-history-display">
          <ShowDeviceTable title="" columns={columns} data={inicialData} />
        </div>
        <div className="button-options-below">
          <button>Exportar</button>
          <button>Reporte</button>
          {/* mensaje via whatsApp */}
          <button>Limpiar</button>
        </div>
      </section>
    </>
  );
};

export default History;
