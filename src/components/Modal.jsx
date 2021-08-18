import React from "react";
import "../sass/modal.scss";
import close from "../images/close.png";
import Links from "./Links.jsx";
function Modal({ handleClose }) {
  return (
    <div className="modal ">
      <div
        className="close animate__animated animate__zoomInDown"
        onClick={() => {
          const e = false;
          handleClose(e);
        }}
      >
        <img src={close} alt="" />
      </div>
      <Links handleClose={handleClose} />
      <div className="detail animate__animated animate__zoomInUp">
        <span>{"< />"}</span>
      </div>
    </div>
  );
}

export default Modal;
