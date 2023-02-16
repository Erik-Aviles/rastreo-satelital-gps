import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "../containers/Layout";
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import Device from "../pages/Device";
import AppInformation from "../pages/AppInformation";
import History from "../pages/History";
import MyDevices from "../pages/MyDevices";
import Login from "../pages/Login";
import RegisterUser from "../components/RegisterUser";
import RegisterDevice from "../components/RegisterDevice";
import Profile from "../pages/Profile";
import NotFount from "../styles/NotFount";
import Alerts from "../pages/Alerts";
// import CurrentDevice from "../components/CurrentDevice.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Layout className="Layout">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-user" element={<RegisterUser />} />{/* Arreglar estilo */}
          <Route path="/register-device" element={<RegisterDevice />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-devices" element={<MyDevices />} />
          <Route path="/my-devices/:slug" element={<Device />} /> {/* Arreglar estilo */}
          <Route path="/history" element={<History />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/information" element={<AppInformation />} />
          <Route path="*" element={<NotFount />} />
          {/* <Route path="/current-device" element={<CurrentDevice />} />  */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
