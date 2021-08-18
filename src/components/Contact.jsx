import React from "react";
import "../sass/contact.scss";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import Title from "./Title.jsx";
import contact from "../images/contact.png";

const Contact = () => {
  return (
    <>
      <Title title={"CONTACTO"} profile={contact} />
      <div className="contact">
        <div className="container wrapper animate__animated animate__fadeIn">
          <a
            target="_blank"
            href="mailto:fernando.altamirano@unmsm.edu.pe"
            className="item"
          >
            <MailIcon />
            <h2>Enviame un correo</h2>
          </a>
          <a
            target="_blank"
            href="https://wa.me/51986175271?text=Hola! me interesa tu trabajo, porfavor comunicate conmigo :D"
            className="item"
          >
            <WhatsAppIcon />
            <h2>Enviame un WhatsApp</h2>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/fernando-eli-altamirano-alca-51b717208/"
            className="item"
          >
            <LinkedInIcon />
            <h2>Contactame vía Linkedin</h2>
          </a>
          <a
            target="_blank"
            href="https://github.com/FernandoAltamirano"
            className="item"
          >
            <GitHubIcon />
            <h2>Visita mi GitHub</h2>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
