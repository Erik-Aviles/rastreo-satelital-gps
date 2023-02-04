import React from "react";
import { Helmet } from "react-helmet";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Rastreo Satelital</title>
      </Helmet>
      <section className="Home">
        <figure className="continer_logo">
          <img className="logo-image" src="../assets/images/DrawKit Vector Illustration Sleep & Health (5).png" alt="Soy un logo" />
        </figure>
        <div className="Home-container">
          <h1 className="Home-title title">Bienvenido</h1>
          <p className="Home_welcome">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            tempore obcaecati voluptatum illo. Tenetur eius illo deserunt,
            corporis delectus nihil velit.
          </p>
          <div className="Home-container_button">
            <button className="Home_button button">Register</button>
            <button className="Home_button button">Login</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
