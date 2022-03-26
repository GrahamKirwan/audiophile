import React from 'react'

import HeroMain from '../../components/Reusable/HeroMain'
import ThreeCardProducts from '../../components/Reusable/ThreeCardProducts'
import AboutComp from '../../components/Reusable/AboutComp'

import data from '../../data/data.json'

export default function HeadphonesPage() {

    const newData = [];
    
    data.map((data) => {
        if (data.category == 'headphones') {
            newData.push(data);
        }
    })

  return (
    <>
        <HeroMain page='Headphones' />
        {newData.map((product) => <h1>{product.name}</h1>)}
        {newData.map((product) => <h1>{product.name}</h1>)}
        <ThreeCardProducts />
        <AboutComp />
    </>
  )
}
