import React from "react";

const SelecctList = ({ title, options }) => {
  let id = `select-${title}`;
  let labelTitle = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <div className="SelecctList">
      <select name={id} id={id}>
        <option className="SelecctList_option" value="">{labelTitle}</option>
        {options.map(el => <option key={el.id} value={el.placa}>{el.crawlStatuses.period}</option>)}
      </select>
    </div>
  );
};

export default SelecctList;
