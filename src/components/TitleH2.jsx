import React from "react";
import "../styles/TitleH2.css";
import { AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const TitleH2 = ({ children }) => {
  const navegate = useNavigate();
  const onClick = () => {
    navegate(-1);
  };

  return (
    <div className="Container_Title-h2">
      <figure onClick={onClick}>
        <AiOutlineLeft size={30} color={"var(--color-medium)"} />
      </figure>
      <h2 className="Title-h2">{children}</h2>
    </div>
  );
};

export default TitleH2;
