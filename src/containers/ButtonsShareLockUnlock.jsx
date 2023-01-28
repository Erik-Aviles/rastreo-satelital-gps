import React from "react";
import ButtonLock from "../components/ButtonLock";
import ButtonShare from "../components/ButtonShare";
import ButtonUnlock from "../components/ButtonUnlock";
import "../styles/ButtonsShareLockUnlock.css";

const ButtonsShareLockUnlock = () => {
  return <div className="Buttons-Share-Lock-Unlock">
    <ButtonLock />
    <ButtonUnlock />
    <ButtonShare />
  </div>;
};

export default ButtonsShareLockUnlock;
