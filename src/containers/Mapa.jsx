import React from "react";
// import SelecctList from "../components/SelecctList";
import "../styles/Mapa.css";
import {
  MdOutlineFollowTheSigns,
  MdOutlineDeliveryDining,
} from "react-icons/md";
import { AiOutlineAim } from "react-icons/ai";
import { GrLastfm } from "react-icons/gr";
import DeviceStatuses from "./DeviceStatuses";
import Header from "../components/Header";

const viewMaps = [
  "Google clásico",
  "Google satelite",
  "Google streest",
  "Carto",
  "OSM",
];
const Mapa = () => {
  const style = { size: 20 };
  return (
    <>
      <Header />
      <section className="Mapa">
        <div className="Mapa-container_top-frame">
          <select className="select-map" name="mapa" id="mapa">
            {viewMaps.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <div className="group-button-top-left">
            <div title="Seguir" className="icons">
              <MdOutlineFollowTheSigns size={style.size} />
            </div>
            <div title="Rutas en vivo" className="icons">
              <MdOutlineDeliveryDining size={style.size} />
            </div>
            <div title="Ultima ruta" className="icons">
              <GrLastfm size={style.size} />
            </div>
            <div title="Enfoque" className="icons">
              <AiOutlineAim size={style.size} />
            </div>
          </div>
        </div>
        <div className="Mapa-container">Mapa</div>
        {/* <div className="container-device-Statuses">Device Statuses</div> */}
        <DeviceStatuses />
      </section>
    </>
  );
};

export default Mapa;
