import React from 'react';
import "./Style.scss";
import HeroSec from '../../Components/HeroSec/HeroSec';
import HomeServices from '../../Components/HomeServices/HomeServices';
import HomeProducts from '../../Components/HomeProducts/HomeProducts';

function HomePage() {
  return (
      <>
      <HeroSec />
      <HomeServices />
      <HomeProducts/>
      
    </>
  );
}

export default HomePage;
