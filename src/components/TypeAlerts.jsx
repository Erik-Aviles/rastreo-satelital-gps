import React from "react";

const TypeAlerts = ({ title }) => {
  return (
    <article className="Alerts_cart">
      <p className="Alerts_title">{title}</p>
      <button type="button" className="Alerts_button off">
        off
      </button>
      <button type="button" className="Alerts_button on">
        on
      </button>
    </article>
  );
};

export default TypeAlerts;
