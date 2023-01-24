import React from "react";
import Header from "../components/Header";
import Layout from "../containers/Layout";
// import MyDevices from "../containers/MyDevices";
// import MenuDesplegable from "../containers/MenuDesplegable";
// import Home from "../pages/Home";
// import Login from "../components/Login";
// import RegisterUser from "../components/RegisterUser";
// import RegisterDevice from "../components/RegisterDevice";
import "../styles/App.css";

const App = () => {
  return (
    <Layout className="Layout">
      <Header />
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <RegisterUser /> */}
      {/* <RegisterDevice /> */}
      {/* <MenuDesplegable /> */}
      {/* <MyDevices /> */}
    </Layout>
  );
};

export default App;
