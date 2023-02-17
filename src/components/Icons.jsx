import React from "react";
import { CiUser } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import { IoChevronForwardSharp, IoLogOutOutline } from "react-icons/io5";
import { RiSdCardMiniLine } from "react-icons/ri";
import { MdOutlineHistoryEdu, MdInfoOutline } from "react-icons/md";
// import "../styles/Icons.css";

const styles = {
  size: 20,
  color: "var(--color-light-2)",
};

const UserIcon = () => {
  return  <CiUser size={28} color={"var(--color-medium)"} />;
};
const DeviceIcon = () => {
  return <RiSdCardMiniLine size={styles.size} color={styles.color} />;
};
const HistoryIcon = () => {
  return <MdOutlineHistoryEdu size={styles.size} color={styles.color} />;
};
const AlertIcon = () => {
  return <AiOutlineBell size={styles.size} color={styles.color} />;
};
const InfoAppIcon = () => {
  return <MdInfoOutline size={styles.size} color={styles.color} />;
};
const LogoutIcon = () => {
  return <IoLogOutOutline size={styles.size} color={styles.color} />;
};
const ForwardIcon = () => {
  return <IoChevronForwardSharp size={20} color={styles.color} />;
};

export {
  UserIcon,
  AlertIcon,
  DeviceIcon,
  HistoryIcon,
  InfoAppIcon,
  LogoutIcon,
  ForwardIcon,
};
