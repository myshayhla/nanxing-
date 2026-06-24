import React from "react";
import "./Style.scss";
import Arrow from "../../assets/Icons/Arrow-white.svg?react";

function MainBtn({ title, type = "button", disabled = false }) {
  return (
    <button className="main-btn" type={type} disabled={disabled}>
      <span>{title}</span>
      <Arrow className="arrow-icon" />
    </button>
  );
}

export default MainBtn;
