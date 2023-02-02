import React from "react";
import '../styles/SelecctList.css'

const SelecctList = ({ title, options }) => {
  let id = `select-${title}`;
  let labelTitle = title.charAt(0).toUpperCase() + title.slice(1)
  return (
    <div className="SelecctList">
      <label htmlFor={id}>{labelTitle}</label>
      <select name={id} id={id}>
        <option className="Elegir" value="">Elegir {title}</option>
        {options.map(el => <option key={el} value={el}>{el}</option>)}
      </select>
    </div>
  );
};

export default SelecctList;
