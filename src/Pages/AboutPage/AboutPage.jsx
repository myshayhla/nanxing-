import React from 'react';
import "./Style.scss";
import AboutHero from '../../Components/AboutHero/AboutHero';
import Coorporate from '../../Components/Coorporate/Coorporate';
import VideoSide from '../../Components/VideoSide/VideoSide';

function AboutPage() {
  return (
      <div>
      <AboutHero />
      <Coorporate />
      <VideoSide />

    </div>
  );
}

export default AboutPage;
