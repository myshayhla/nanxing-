import React from 'react';
import "./Style.scss";
import HeroSec from '../../Components/HeroSec/HeroSec';
import HomeServices from '../../Components/HomeServices/HomeServices';
import HomeProducts from '../../Components/HomeProducts/HomeProducts';
import HomeAboutSec from '../../Components/HomeAboutSec/HomeAboutSec';
import HomeContact from '../../Components/HomeContact/HomeContact';
import HomeNews from '../../Components/HomeNews/HomeNews';

function HomePage() {
  return (
      <>
      <HeroSec />
      <HomeServices />
      <HomeProducts />
      <HomeAboutSec />
      <HomeNews/>
      <HomeContact/>
      
    </>
  );
}

export default HomePage;
