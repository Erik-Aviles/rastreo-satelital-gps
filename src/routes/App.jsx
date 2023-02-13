import React from "react";
import Layout from "../containers/Layout";
// import Header from "../components/Header";
// import Home from "../pages/Home";
// import Mapa from "../containers/Mapa";
// import CurrentDevice from "../components/CurrentDevice.jsx";
// import Mesagge from "../components/Mesagge";
// import Device from "../pages/Device";
// import AppInformation from "../pages/AppInformation";
// import History from "../containers/History";
// import MyDevices from "../containers/MyDevices";
// import MenuDesplegable from "../pages/MenuDesplegable";
// import Login from "../components/Login";
import RegisterUser from "../components/RegisterUser";
// import RegisterDevice from "../components/RegisterDevice";
// import Profile from "../containers/Profile";
// import ButtonsShareLockUnlock from "../containers/ButtonsShareLockUnlock";
import "../styles/App.css";
// import ButtonLock from "../components/ButtonLock";
// import ButtonUnlock from "../components/ButtonUnlock";

const App = () => {
  return (
    <Layout className="Layout">
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Login /> */}
      <RegisterUser />
      {/* <RegisterDevice />  */}
      {/* <MenuDesplegable />/ */}
      {/* <MyDevices /> */}
      {/* <History /> */}
      {/* <Alerts /> */}
      {/* <Profile /> */}
      {/* <AppInformation /> */}
      {/* <Device /> */}
      {/* <Mesagge text="Error" textColor='var(--color-error)'>
        <ButtonLock size={15} color='var(--color-layout-1)' />
      </Mesagge> */}
      {/* <Mesagge text="Satisfactorio" textColor='var(--color-exit)'>
        <ButtonUnlock size={15} color='var(--color-layout-1)' />
      </Mesagge> */}
      {/* <Mapa /> */}
      {/* <CurrentDevice /> */}
    </Layout>
  );
};

export default App;
