import React from "react";
import "../sass/project.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";

const Project = ({ title, linkCode, linkProject, image }) => {
  return (
    <div className="project">
      <div className="title-project ">
        <p className="animate__animated animate__fadeIn">{title}</p>
      </div>
      <div className="content">
        <a className="ss" href={linkProject} target="_blank">
          <img
            className="ss animate__animated animate__fadeIn"
            src={image}
            alt=""
          />
        </a>
        <div className="btn-container">
          <a
            className="button animate__animated animate__bounceIn"
            target="_blank"
            href={linkCode}
          >
            <span>View Code</span>
            <GitHubIcon />
          </a>
          <a
            className="button animate__animated animate__bounceIn"
            target="_blank"
            href={linkProject}
          >
            <span>View Project</span>
            <WebIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
