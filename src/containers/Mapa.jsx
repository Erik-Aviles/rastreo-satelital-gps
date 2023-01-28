import React from "react";
import SelecctList from "../components/SelecctList";
import TitleH2 from "../components/TitleH2";
import DeviceStatuses from "./DeviceStatuses";

const viewMaps = ["Google satelite", "Google clásico", "Google streest"];
const Mapa = () => {
  return (
    <section className="Mapa">
      <TitleH2>Mapa</TitleH2>
      <div className="Select-mapas">
        <SelecctList title="Mapa" options={viewMaps} />
        <button>in-line</button>
        <button>runtime</button>
        <button>last route</button>
      </div>
      <div className="Mapa-container">Mapa</div>
      <DeviceStatuses />
    </section>
  );
};

export default Mapa;
