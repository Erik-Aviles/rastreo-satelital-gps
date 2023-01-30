import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "../styles/RouteHistoryDisplay.css";
const user = [
  {
    id: 8,
    name: "AEI123",
    address: "Av. Walter Andrade",
    state: "En movimiento",
    totalDistance: "5000 km",
    starTime: " 23-01-24 12:30",
    endTime: "23-01-24 14:00:11",
    duration: "02:30",
    latitude: "1,7746744",
    longitude: "-2,7746744",
    velocity: "60 km",
    blocked: "No",
    distance: "24 km",
    hours: "1234 h 11 m",
    odometer: "1234 h 11 m",
  },

];
const columns = [
  { name: "ID", selector: (row) => row.id },
  { name: "Nombre disp.", selector: (row) => row.name },
  { name: "Direccion", selector: (row) => row.address },
  { name: "Estado", selector: (row) => row.state },
  { name: "Hora inicio", selector: (row) => row.starTime },
  { name: "Hora fin", selector: (row) => row.endTime },
  { name: "Total distancia", selector: (row) => row.totalDistance },
  { name: "Duracion", selector: (row) => row.duration },
  { name: "Latitud", selector: (row) => row.latitude },
  { name: "Longitud", selector: (row) => row.longitude },
  { name: "Velocidad", selector: (row) => row.velocity },
  { name: "Bloqueo", selector: (row) => row.blocked },
  { name: "Distancia", selector: (row) => row.distance },
  { name: "Total horas", selector: (row) => row.hours },
  { name: "Odometro", selector: (row) => row.odometer },
];

const RouteHistoryTable = () => {
  /*   //1.- Configurar los hooks
  const [user, setUser] = useState([]);
  
  //2.- Funcion para configurar los datos con fetch

  const URL = "https://gorest.co.in/public/v2/users";
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUser(data);
  };
  useEffect(() => {
    showData();
  }, []); */

  //3.- Configurar las columnas para datatable
/*   const columns = [
    { name: "ID", selector: (row) => row.id },
    { name: "NAME", selector: (row) => row.name },
    { name: "GENDER", selector: (row) => row.gender },
    { name: "STATUS", selector: (row) => row.status },
  ]; */

  //4.- Mostar la data en datatatle

  console.log(<DataTable columns={columns} data={user} />);
  return (
    <section>
      {!user ? (
        "No hay datos que mostrar"
      ) : (
        <DataTable columns={columns} data={user} />
      )}
    </section>
  );
};

export default RouteHistoryTable;
