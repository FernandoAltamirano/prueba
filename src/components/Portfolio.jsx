import React from "react";
import "../sass/portfolio.scss";
import Project from "./Project.jsx";
import portfolio from "../images/portfolio.png";
import game from "../images/game.png";
import todo from "../images/todo.png";
import bmi from "../images/bmi.png";
import amazon from "../images/amazon.png";
import dashboard from "../images/dashboard.png";
import Title from "./Title.jsx";
const projects = [
  {
    title: "BMI Calculator",
    linkProject: "https://fernandoaltamirano.github.io/calculatorBMI/",
    linkCode: "https://github.com/FernandoAltamirano/calculatorBMI",
    image: bmi,
  },
  {
    title: "Amazon Clone",
    linkProject: "https://clone-46db0.web.app",
    linkCode: "https://github.com/FernandoAltamirano/Amazon-clone/tree/master",
    image: amazon,
  },
  {
    title: "Social Media Dashboard",
    linkProject: "https://fernandoaltamirano.github.io/social-media-dashboard/",
    linkCode: "https://github.com/FernandoAltamirano/social-media-dashboard",
    image: dashboard,
  },
  {
    title: "Rock Paper Scissors",
    linkProject: "https://fernandoaltamirano.github.io/rock-paper-scissors/",
    linkCode: "https://github.com/FernandoAltamirano/rock-paper-scissors",
    image: game,
  },
  // {
  //   title: "ToDo App",
  //   linkProject: "https://todoapp-fernando.herokuapp.com",
  //   linkCode: "https://github.com/FernandoAltamirano/todo-app",
  //   image: todo,
  // },
];
const Portfolio = () => {
  return (
    <>
      <Title profile={portfolio} title={"PORTFOLIO"} />
      <div id="portfolio">
        <div className="container ">
          <div className="container-projects">
            {projects.map((project) => (
              <Project
                key={project.linkCode}
                title={project.title}
                linkCode={project.linkCode}
                linkProject={project.linkProject}
                image={project.image}
              />
            ))}
            <a
              target="_blank"
              href="https://github.com/FernandoAltamirano?tab=repositories"
              className="button more"
            >
              <span>View more</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
