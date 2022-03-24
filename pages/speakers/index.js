import React from "react";

import HeroMain from "../../components/Reusable/HeroMain";
import ThreeCardProducts from '../../components/Reusable/ThreeCardProducts'
import AboutComp from '../../components/Reusable/AboutComp'

export default function SpeakersPage() {
  return (
    <>
        <HeroMain page='Speakers' />
        <ThreeCardProducts />
        <AboutComp />
    </>
  );
}
