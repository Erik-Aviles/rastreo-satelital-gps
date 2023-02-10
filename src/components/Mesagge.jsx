import React from "react";
import '../styles/Mensaje.css'

const Mesagge = ({children, text, textColor}) => {
  return (
    <div className="Mesagge">
      {children}
      <p style={{color: textColor}} >{text}</p>
    </div>
  );
};

export default Mesagge;
