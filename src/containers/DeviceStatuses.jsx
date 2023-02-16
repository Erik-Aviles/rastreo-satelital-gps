import React from "react";
import inicialData from "../const/inicialData";
import ShowDeviceTable from "../components/ShowDeviceTable";
import '../styles/DeviceStatuses.css'
const DeviceStatuses = () => {
  const columns = [
    { name: "Nombre disp.", selector: (row) => row.name },
    { name: "Direccion actual", selector: (row) => row.address },
    { name: "Posicion", selector: (row) => `${row.latitude} / ${row.longitude}`},
    { name: "Estado", selector: (row) => row.state },
    { name: "Hora encendido", selector: (row) => row.starTime },
    { name: "Hora apagado", selector: (row) => row.endTime },
    { name: "Velocidad", selector: (row) => row.velocity },
    { name: "Bloqueo", selector: (row) => row.blocked },
    { name: "Duracion encendido", selector: (row) => row.duration },
    { name: "Distancia recorrida", selector: (row) => row.totalDistance },
    { name: "Horas recorridas", selector: (row) => row.hours },
  ];

  return (
    <div className="Device-Statuses">
      <ShowDeviceTable columns={columns} data={inicialData} />
    </div>
  );
};

export default DeviceStatuses;
