import React from "react";
import ButtonLock from "../components/ButtonLock";
import ButtonShare from "../components/ButtonShare";
import ButtonUnlock from "../components/ButtonUnlock";
import "../styles/ButtonsShareLockUnlock.css";

const ButtonsShareLockUnlock = () => {
  const style = {
    size: 23
  }
  return (
    <section className="Buttons-Share-Lock-Unlock">
      <ButtonLock title="Bloquear" size={style.size} color="green"/>
      <ButtonUnlock title="Desbloquear" size={style.size} color="red" />
      <ButtonShare title="Compartir ubicacion" size={style.size} color="blue"/>
    </section>
  );
};

export default ButtonsShareLockUnlock;
