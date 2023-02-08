import React from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import "../styles/TypeAlert.css";

const TypeAlert = ({ title }) => {
  return (
    <article className="Type-Alerts">
      <p className="Type-Alerts_title">{title}</p>
      <div type="button" className="Alerts_button off">
        {/* <BsToggleOff size={30} color="var(--color-light-dark-3)" title="off" />{" "} */}
        <BsToggleOn size={30} color="green" title="on" />
      </div>
    </article>
  );
};

export default TypeAlert;
