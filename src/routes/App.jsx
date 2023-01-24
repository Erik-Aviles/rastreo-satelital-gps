import React from "react";
import Login from "../components/Login";
import Layout from "../containers/Layout";
// import Home from "../pages/Home";
import "../styles/App.css";

const App = () => {
  return (
    <div>
      <Layout>
        {/* <Home /> */}
        <Login />
      </Layout>
    </div>
  );
};

export default App;
