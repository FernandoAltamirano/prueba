import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../sass/header.scss";
import menu from "../images/menu.png";
import Links from "./Links.jsx";

const Header = ({ size, handleClose }) => {
  return (
    <div id="header">
      {size < 500 ? (
        <div className="mobile">
          <div className="container animate__animated animate__backInDown">
            <span className="name">{`< Fernando Altamirano />`}</span>
            <div className="links-container">
              <div
                className="menu"
                onClick={() => {
                  const e = true;
                  handleClose(e);
                }}
              >
                <img src={menu} alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="desktop">
          <div className="container animate__animated animate__backInDown">
            <span className="name">{`< Fernando Altamirano />`}</span>
            <div className="links-container">
              <Links handleClose={handleClose} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
