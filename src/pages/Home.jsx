import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Rastreo Satelital</title>
      </Helmet>
      <section className="Home">
        <figure className="Home-container_logo">
          <img className="logo-image" src="" alt="Soy un logo" />
        </figure>
        <h1 className="Home-title title">Bienvenido</h1>
        <p className="Home_welcome">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          tempore obcaecati voluptatum illo. Tenetur eius illo deserunt,
          corporis delectus nihil velit.
        </p>
        <div className="Home-container_register-login">
          <button className="Home_button button">Register</button>
          <button className="Home_button button">Login</button>
        </div>
      </section>
    </>
  );
};

export default Home;
