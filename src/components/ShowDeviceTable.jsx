import React, { useEffect, useState } from "react";
import "styled-components";
import DataTable, { createTheme } from "react-data-table-component";
import inicialData from "./const/inicialData";
import "../styles/ShowDeviceTable.css";

const customStyles = {
  header: {
    style: {
      fontSize: "18px",
      minHeight: "40px",
      fontWeight: 700,
      paddingLeft: "10px",
      backgroundColor: "var(--color-button-dark)",
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      borderBottomColor: 'var(--color-light-2)',
    },
  },
  head: {
    style: {
      color: "var(--color-dark-3)",
      fontSize: "12px",
      fontWeight: 500,
    },
  },
  headRow: {
    style: {
      backgroundColor: "var(--color-button-medium)",
      minHeight: "32px",
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      borderBottomColor: 'var(--color-light-2)',
    },
  },
  rows: {
    style: {
      minHeight: "30px", // override the row height
      fontSize: "10px",
    },
},
  headCells: {
    style: {
      paddingLeft: "10px", // override the cell padding for head cells
      paddingRight: "8px",

    },

  },
  cells: {
    style: {
      paddingLeft: "10px", // override the cell padding for data cells
      paddingRight: "8px",
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      borderBottomColor: 'var(--color-light-2)',

    },
  },
 
};

const ShowDeviceTable = ({ columns, data }) => {
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
    <section className="Show-Device-Table">
      {!inicialData ? (
        "No hay datos que mostrar"
      ) : (
        <DataTable
          className="kNUuTe"
          title="Dispositivos disponibles"
          columns={columns}
          data={data}
          customStyles={customStyles}
        />
      )}
    </section>
  );
};

export default ShowDeviceTable;
