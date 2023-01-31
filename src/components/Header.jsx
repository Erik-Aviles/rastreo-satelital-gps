import React from "react";
import "../styles/Header.css";
import {GiHamburgerMenu }from 'react-icons/gi'
import {GrUser }from 'react-icons/gr'

const Header = () => {
  return (
    <section className="Header">
      <figure>
        <a href="/">
          <GiHamburgerMenu />
        </a>{" "}
      </figure>

      <figure>
        {" "}
        <a href="/">
          <p><strong><em>Dayli</em></strong></p>
        </a>
      </figure>

      <figure>
        {" "}
        <p className="display">erik8822@hotmail.com</p>
        <a href="/">
          <GrUser/>
        </a>{" "}
      </figure>
    </section>
  );
};

export default Header;
