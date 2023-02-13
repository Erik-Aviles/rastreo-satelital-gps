import React from "react";
import "../styles/TitleH2.css";
import { AiOutlineLeft } from "react-icons/ai";

const TitleH2 = ({ children }) => {
  return (
    <div className="Container_Title-h2">
      <figure>
        <a href="">
          <AiOutlineLeft size={30} color={'var(--color-medium)'}/>
        </a>
      </figure>
      <h2 className="Title-h2">{children}</h2>
    </div>
  );
};

export default TitleH2;
