import React from "react";
import { TbShare } from "react-icons/tb";

const ButtonShare = ({ title, size, color }) => {
  return (
    <figure className="Button-Share">
      <TbShare title={title} size={size} color={color} />
    </figure>
  );
};

export default ButtonShare;
