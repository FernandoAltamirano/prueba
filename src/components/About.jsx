import React from "react";
import "../sass/about.scss";
import profile from "../images/io.jpeg";
import GetAppIcon from "@material-ui/icons/GetApp";
import Title from "./Title.jsx";
const About = () => {
  return (
    <>
      <Title profile={profile} title={"SOBRE MI"} />
      <div id="about">
        <div className="container-about wrapper ">
          <div className="text animate__animated animate__fadeIn">
            <p>
              Actualmente soy estudiante de la carrera de Ingeniería de Sistemas
              en la UNMSM
            </p>
            <br />
            <ul>
              <li>Interés para aprender cosas nuevas</li>
              <li>Generar buen ambiente laboral </li>
              <li>Puntualidad y responsabilidad</li>
              <li>Orden a la hora de trabajar</li>
              <li>Capacidad para tomar decisiones y resolver problemas</li>
              <li>Empatía Iniciativa para reuniones en equipo</li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1WHyYw9SGkKVpCs9mdM26vddtdQ-3v9hn/view?usp=sharing"
              target="_blank"
              className="button animate__animated animate__bounceIn"
            >
              <span>Descarga mi CV</span>
              <GetAppIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
