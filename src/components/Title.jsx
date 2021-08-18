import React from "react";
import "../sass/title.scss";
function Title({ title, profile }) {
  return (
    <>
      <div id="title">
        <div className="wrapper">
          <div className="title">
            <h1 className=" animate__animated animate__fadeIn">{title}</h1>
          </div>
        </div>
      </div>
      <div className="title-image animate__animated animate__fadeIn">
        <div className="wrapper">
          <img src={profile} alt="" />
        </div>
      </div>
    </>
  );
}

export default Title;
