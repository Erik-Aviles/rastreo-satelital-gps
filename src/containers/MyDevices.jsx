import React from "react";
import ButtonSalir from "../components/ButtonSalir";
import DeviceItem from "../components/DeviceItem";
import Search from "../components/Search";
import TitleH2 from "../components/TitleH2";
import "../styles/MyDevices.css";

const MyDevices = () => {
  return (
    <section className="MyDevices">
      <TitleH2>Mis Dispositivos</TitleH2>
      <Search />
      <div className="MyDevices-items">
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
        <DeviceItem />
      </div>
      <ButtonSalir>X</ButtonSalir>
    </section>
  );
};

export default MyDevices;
