import React from "react";
import "../styles/DeviceItem.css";

const DeviceItem = () => {
  return (
    <section className="DeviceItem">
      <div >
        <h4>Mazda</h4>
        <p>ABC-123</p>
        <div className="DeviceItem_button">
          <button>bloqueo</button>
          <button>desbloqueo</button>
        </div>
      </div>
      <button>Mostrar</button>
    </section>
  );
};

export default DeviceItem;
