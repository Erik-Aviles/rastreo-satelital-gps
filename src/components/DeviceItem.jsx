import React from "react";
import { TbLock, TbLockOpen } from "react-icons/tb";
import { Link } from "react-router-dom";
import "../styles/DeviceItem.css";

const DeviceItem = ({device}) => {

  const slug = (`${device.marca}-${device.placa}`).toLowerCase()
  console.log(slug)

  
  return (
    <article className="DeviceItem">
      <div className="Item-info">
        <h4>{device.marca}</h4>
        <p>{device.placa}</p>
        <p>{device.crawlStatuses.state}</p>

        <div type="button">
          <TbLock title="Bloqueo" size={25} color="green" />
          <TbLockOpen title="Desbloqueo" size={25} color="red" />
        </div>
      </div>
      <Link to={`/my-devices/${slug}`}>
        <button className="Item-button_mostrar">Mostrar</button>
      </Link>
    </article>
  );
};

export default DeviceItem;
