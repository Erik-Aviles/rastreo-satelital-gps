import React from "react";

const SelecctList = ({ title, options }) => {
  let id = `select-${title}`;
  let labelTitle = title.charAt(0).toUpperCase() + title.slice(1)
  return (
    <>
      <label htmlFor={id}>{labelTitle}</label>
      <select name={id} id={id}>
        <option value="">Elige un {title}</option>
        {options.map(el => <option key={el} value={el}>{el}</option>)}
      </select>
    </>
  );
};

export default SelecctList;
