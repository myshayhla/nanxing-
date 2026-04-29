import React from "react";
import "./Style.scss";
import Arrow from "../../assets/Icons/Arrow-white.svg?react";

function MainBtn({ title }) {
  return (
    <button className="main-btn">
      <span>{title}</span>
      <Arrow className="arrow-icon" />
    </button>
  );
}

export default MainBtn;
