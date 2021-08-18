import React from "react";
import "../sass/element.scss";
const Element = ({ title, image }) => {
  return (
    <div className="element">
      <div className="content-element animate__animated animate__bounceIn">
        <img src={image} alt={title} />
      </div>
      <p className=" animate__animated animate__fadeIn">{title}</p>
    </div>
  );
};

export default Element;
