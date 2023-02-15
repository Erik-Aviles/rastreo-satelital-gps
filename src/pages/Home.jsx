import React, { useState } from "react";
// import SelecctList from "../components/SelecctList";
import "../styles/Home.css";
import {
  MdOutlineFollowTheSigns,
  MdOutlineDeliveryDining,
} from "react-icons/md";
import { AiOutlineAim } from "react-icons/ai";
import { GrLastfm } from "react-icons/gr";
import DeviceStatuses from "../containers/DeviceStatuses";
import Header from "../components/Header";
import MenuDesplegable from "../components/MenuDesplegable";

const viewMaps = [
  "Google clásico",
  "Google satelite",
  "Google streest",
  "Carto",
  "OSM",
];
const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleMenu = () => {
    setIsActive(!isActive);
  };
  const style = { size: 20 };
  return (
    <>
      <Header handleToggleMenu={handleToggleMenu}/>
    {isActive && <MenuDesplegable handleToggleMenu={handleToggleMenu}/>}
      <section className="Home">
        <div className="Home-container_top-frame">
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
        <div className="Mapa-container">Mapa</div>{/* Aqui deveria ir el mapa */}
        <DeviceStatuses />
      </section>
    </>
  );
};

export default Home;
