import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import { UserIcon } from "./Icons";

const Header = () => {
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
      <figure>
        <a href="/">
          <GiHamburgerMenu size={styles.size} color={styles.color} />
        </a>{" "}
      </figure>

      <Logo />
      <UserIcon display={width >= 768 ? "block" : "none"} />
    </section>
  );
};

export default Header;
