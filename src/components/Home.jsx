import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "../sass/home.scss";
import PhoneIcon from "@material-ui/icons/Phone";
const Home = () => {
  useEffect(() => {
    new Typed(".typed", {
      strings: [
        "<i >Desarrollador Frontend</i>",
        "<i >Futuro Ingeniero de Sistemas</i>",
        "<i >Estudiante en la UNMSM</i>",
        "<i >Apasionado por el mundo de la tecnología </i>",
      ],

      typeSpeed: 60,
      startDelay: 300,
      backSpeed: 30,
      smartBackspace: true,
      shuffle: false,
      backDelay: 1500,
      loop: true,
      loopCount: false,
      showCursor: true,
      cursorChar: "|",
      contentType: "html",
    });
  }, []);
  return (
    <section id="home">
      <div className="container ">
        <h1 className="animate__animated animate__bounceInRight">
          Hola, <br />
          soy <span>Fernando Altamirano</span>
        </h1>
        <div className="container-typed animate__animated animate__bounceInRight">
          <p className="typed text"></p>
        </div>
        <div className="container-buttons">
          <Link
            to="/portfolio"
            className="button animate__animated animate__bounceIn"
          >
            <span>Mis Proyectos</span>
            <ArrowForwardIcon />
          </Link>
          <Link
            to="/contact"
            className="button animate__animated animate__bounceIn"
          >
            <span>Contáctame</span>
            <ArrowForwardIcon />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
