import React from "react";

import HeroMain from "../../components/Reusable/HeroMain";
import ThreeCardProducts from '../../components/Reusable/ThreeCardProducts'
import AboutComp from '../../components/Reusable/AboutComp'

import data from '../../data/data.json'
import ProductAbout from '../../components/Reusable/ProductAbout'

export default function SpeakersPage() {

    const newData = [];
    
    data.map((data) => {
        if (data.category == 'speakers') {
            newData.push(data);
        }
    })
    // Sort the array to put the product with a 'new' product first 
    newData.sort(function(x, y) { return y.new - x.new });

  return (
    <>
        <HeroMain page='Speakers' />
        {newData.map((product, index) => <ProductAbout productDetails={product} id={index} key={index}/>)}
        <ThreeCardProducts topMargin={true} />
        <AboutComp />
    </>
  );
}
