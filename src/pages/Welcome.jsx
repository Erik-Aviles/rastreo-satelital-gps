import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../styles/Welcome.css";

const Welcome = () => {
  return (
    <>
      <Helmet>
        <title>Welcome - Rastreo Satelital</title>
      </Helmet>
      <section className="Welcome">
        <figure className="continer_logo">
          <img className="logo-image" src="../assets/images/DrawKit Vector Illustration Sleep & Health (5).png" alt="Soy un logo" />
        </figure>
        <div className="Welcome-container">
          <h1 className="Welcome-title title">Bienvenido</h1>
          <p className="Welcome_description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            tempore obcaecati voluptatum illo. Tenetur eius illo deserunt,
            corporis delectus nihil velit.
          </p>
          <div className="Welcome-container_button">
            <Link to='/register-user'><button className="Welcome_button button">Register</button></Link>
            <Link to='/login'><button className="Welcome_button button">Login</button></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
