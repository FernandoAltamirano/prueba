import React from "react";
import "../sass/skills.scss";
import html from "../images/html.png";
import css from "../images/css.png";
import react from "../images/react.png";
import database from "../images/database.png";
import git from "../images/git.png";
import js from "../images/js.png";
import sass from "../images/sass.png";
import webpack from "../images/webpack.png";
import node from "../images/node.png";
import empatia from "../images/empatia.png";
import comunicacion from "../images/comunicacion.png";
import team from "../images/team.png";
import tools from "../images/tools.png";
import firebase from "../images/firebase.png";
import Element from "../components/Element.jsx";
import Title from "./Title.jsx";
const technologies = [
  {
    title: "HTML 5",
    image: html,
  },
  {
    title: "CSS 3",
    image: css,
  },
  {
    title: "JAVASCRIPT",
    image: js,
  },
  {
    title: "SASS",
    image: sass,
  },
  {
    title: "GIT",
    image: git,
  },
  {
    title: "REACT",
    image: react,
  },
  {
    title: "NODE",
    image: node,
  },
  {
    title: "WEBPACK",
    image: webpack,
  },
  {
    title: "DATABASES",
    image: database,
  },
  {
    title: "FIREBASE",
    image: firebase,
  },
];

const softSkills = [
  {
    title: "COMUNICACIÓN",
    image: comunicacion,
  },
  {
    title: "TEAM",
    image: team,
  },
  {
    title: "EMPATÍA",
    image: empatia,
  },
];
const Skills = () => {
  return (
    <>
      <Title profile={tools} title={"HABILIDADES"} />
      <div id="skills">
        <div className="content wrapper">
          <div className="section">
            <h3 className="section-title  animate__animated animate__fadeIn">
              Tecnologías
            </h3>
            <div className="content">
              {technologies.map((element) => (
                <Element
                  key={element.title}
                  image={element.image}
                  title={element.title}
                />
              ))}
            </div>
          </div>
          <div className="section">
            <h3 className="section-title">Habilidades Blandas</h3>
            <div className="content">
              {softSkills.map((element) => (
                <Element
                  key={element.title}
                  image={element.image}
                  title={element.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
