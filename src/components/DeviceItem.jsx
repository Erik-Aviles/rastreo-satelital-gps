import React from "react";
import { TbLock, TbLockOpen } from "react-icons/tb";
import "../styles/DeviceItem.css";

const DeviceItem = () => {
  return (
    <article className="DeviceItem">
      <div className="Item-info">
        <h4>Mazda</h4>
        <p>ABC-123</p>
        <p>Apagado</p>

        <div type="button">
          <TbLock title="Bloqueo" size={25} color="green" />
          <TbLockOpen title="Desbloqueo" size={25} color="red" />
        </div>
      </div>
      <button className="Item-button_mostrar">Mostrar</button>
    </article>
  );
};

export default DeviceItem;
