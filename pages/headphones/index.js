import React from 'react'
import Head from 'next/head'

import HeroMain from '../../components/Reusable/HeroMain'
import ThreeCardProducts from '../../components/Reusable/ThreeCardProducts'
import AboutComp from '../../components/Reusable/AboutComp'

import data from '../../data/data.json'
import ProductAbout from '../../components/Reusable/ProductAbout'

export default function HeadphonesPage() {

    const newData = [];
    
    data.map((data) => {
        if (data.category == 'headphones') {
            newData.push(data);
        }
    })
    // Sort the array to put the product with a 'new' product first 
    newData.sort(function(x, y) { return y.new - x.new });

  return (
    <>
    <Head>
        <title>Headphones | Audiophile</title>
        <meta
          name="description"
          content="Check out our selection of high end Headphones."
        />
      </Head>
        <HeroMain page='Headphones' />
        {newData.map((product, index) => <ProductAbout productDetails={product} id={index} key={index}/>)}
        <ThreeCardProducts topMargin={true} />
        <AboutComp />
    </>
  )
}
