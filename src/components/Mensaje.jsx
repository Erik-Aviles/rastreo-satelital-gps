import React from "react";

const Mensaje = ({ src, alt, children }) => {
  return (
    <div>
      <img src={src} alt={alt} />
      {children}
    </div>
  );
};

export default Mensaje;
