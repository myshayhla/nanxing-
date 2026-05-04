import React from 'react';
import "./Style.scss";
import HeroSec from '../../Components/HeroSec/HeroSec';
import HomeServices from '../../Components/HomeServices/HomeServices';
import HomeProducts from '../../Components/HomeProducts/HomeProducts';
import HomeAboutSec from '../../Components/HomeAboutSec/HomeAboutSec';
import HomeContact from '../../Components/HomeContact/HomeContact';

function HomePage() {
  return (
      <>
      <HeroSec />
      <HomeServices />
      <HomeProducts />
      <HomeAboutSec />
      <HomeContact/>
      
    </>
  );
}

export default HomePage;
