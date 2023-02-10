import React from "react";
import { TbLock } from "react-icons/tb";

const ButtonLock = ({ title, size, color }) => {
  return (
    <figure className="Button-Lock Mesagge-button  error">
      <TbLock title={title} size={size} color={color} />
    </figure>
  );
};

export default ButtonLock;
