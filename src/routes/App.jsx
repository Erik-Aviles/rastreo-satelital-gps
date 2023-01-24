import React from "react";
import Layout from "../containers/Layout";
import RegisterUser from "../components/RegisterUser";
// import Login from "../components/Login";
// import Home from "../pages/Home";
import "../styles/App.css";
import RegisterDevice from "../components/RegisterDevice";

const App = () => {
  return (
   
      <Layout className='Layout'>
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <RegisterUser /> */}
        <RegisterDevice />
      </Layout>

  );
};

export default App;
