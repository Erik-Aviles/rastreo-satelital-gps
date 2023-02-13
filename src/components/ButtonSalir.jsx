import React from "react";
import { TfiClose } from "react-icons/tfi";
// import "../styles/ButtonSalir.css";

const ButtonSalir = ({ size, color }) => {
  return (
    <div className="Continer_button-salir">
      <TfiClose size={size} color={color} />
    </div>
  );
};

export default ButtonSalir;
