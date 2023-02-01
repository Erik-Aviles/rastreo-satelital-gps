import React from "react";
import "../styles/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiUser } from "react-icons/ci";

const Header = () => {
  const styles = {
    size: 40,
    color: 'var(--color-medium)',
  };
  return (
    <section className="Header">
      <figure>
        <a href="/">
          <GiHamburgerMenu size={styles.size} color={styles.color} />
        </a>{" "}
      </figure>

      <figure>
        {" "}
        <a href="/">
          <span>
            
             Dayli
           
          </span>
        </a>
      </figure>

      <figure className="Header-container_icons" >
        {" "}
        <p className="display">Mi cuenta</p>
        <a href="/">
          <CiUser className="Header_icons" size={20} color={styles.color} />
        </a>{" "}
      </figure>
    </section>
  );
};

export default Header;
