import React from "react";
import { TbLockOpen } from "react-icons/tb";

const ButtonUnlock = ({ title, size, color }) => {
  return (
    <figure className="Button-Unlock  Mesagge-button exit">
      <TbLockOpen title={title} size={size} color={color} />
    </figure>
  );
};

export default ButtonUnlock;
