import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { AiOutlineBars } from "react-icons/ai";
import Logo from "./Logo";
import { UserIcon } from "./Icons";

const Header = ({handleToggleMenu}) => {

  const [width, setWidth] = useState(screen.width);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(screen.width));
  }, []);

  const styles = {
    size: 30,
    color: "var(--color-medium)",
  };
  return (
    <section className="Header">
      <figure onClick={handleToggleMenu}>
        <AiOutlineBars size={styles.size} color={styles.color} />
      </figure>
     
      
      <Logo />
      <UserIcon text="Erika" display={width >= 768 ? "block" : "none"} />
    </section>
  );
};

export default Header;
