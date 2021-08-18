import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from "react-router-dom";
function Links({ handleClose }) {
  return (
    <div className="links animate__animated animate__zoomInDown">
      <Link
        to="/"
        className="link"
        onClick={() => {
          const e = false;
          handleClose(e);
        }}
      >
        <HomeIcon className="iconMenu" />
        <span>Home</span>
      </Link>
      <Link
        to="/about"
        className="link"
        onClick={() => {
          const e = false;
          handleClose(e);
        }}
      >
        <PersonIcon className="iconMenu" />
        <span>Sobre mi</span>
      </Link>
      <Link
        to="/skills"
        className="link"
        onClick={() => {
          const e = false;
          handleClose(e);
        }}
      >
        <OfflineBoltIcon className="iconMenu" />
        <span>Habilidades</span>
      </Link>
      <Link
        to="/portfolio"
        className="link"
        onClick={() => {
          const e = false;
          handleClose(e);
        }}
      >
        <BusinessCenterIcon className="iconMenu" />
        <span>Portafolio</span>
      </Link>
      <Link
        to="/contact"
        className="link"
        onClick={() => {
          const e = false;
          handleClose(e);
        }}
      >
        <PhoneIcon className="iconMenu" />
        <span>Contactame</span>
      </Link>
    </div>
  );
}

export default Links;
