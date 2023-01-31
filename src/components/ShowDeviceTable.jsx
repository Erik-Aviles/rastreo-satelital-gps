import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import "../styles/RouteHistoryDisplay.css";
import inicialData from "./const/inicialData";


const ShowDeviceTable = ({columns, data}) => {
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

  //4.- Mostar la data en datatatle

  return (
    <section>
      {!inicialData ? (
        "No hay datos que mostrar"
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </section>
  );
};

export default ShowDeviceTable;
