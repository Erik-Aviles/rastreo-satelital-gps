import React from "react";
import DeviceItem from "../components/DeviceItem";
import Search from "../components/Search";
import "../styles/MyDevices.css";

const MyDevices = () => {
  return (
    <section className="MyDevices">
      <div>
        <h3>Mis Dispositivos</h3>
        <div className="MyDevices-items">
          <DeviceItem/>
          <DeviceItem/>
          <DeviceItem/>
          <DeviceItem/>
        </div>
      </div>

      <Search />
      <button type="button">x</button>
    </section>
  );
};

export default MyDevices;
