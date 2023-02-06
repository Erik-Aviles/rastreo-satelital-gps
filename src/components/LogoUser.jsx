import React from "react";
import { CiUser } from "react-icons/ci";
import "../styles/LogoUser.css";

const LogoUser = ({display}) => {
  const styles = {
    size: 30,
    color: "var(--color-medium)",
  };
  return (
    <figure className="Logo-User-container_icons">
      {" "}
      {/* <p className={display}>Erika</p> */}
      <p style={{display: display}}>Erika</p>
      <a className="user-icon" href="/">
        <CiUser size={styles.size} color={styles.color} />
      </a>{" "}
    </figure>
  );
};

export default LogoUser;
