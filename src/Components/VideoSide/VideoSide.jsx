import React from 'react';
import "./Style.scss";
import VideoImg from "../../assets/Images/VideoCover.webp";

function VideoSide() {
  return (
    <section id="video-side">
      <div className="video-side-container">
        <div className="head">
          <h1>Şirkət təqdimatı</h1>
          <p>
            Şirkətimizin fəaliyyət istiqamətləri, texnoloji imkanları və təqdim
            etdiyimiz sənaye həlləri ilə yaxından tanış olmaq üçün təqdimat
            videomuza baxa bilərsiniz.
          </p>
        </div>
        <div className="video">
          <img src={VideoImg} alt="Video Cover" />

          <div className="play-btn">
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSide;
