import React from 'react'

import HeroMain from '../../components/Reusable/HeroMain'
import ThreeCardProducts from '../../components/Reusable/ThreeCardProducts'
import AboutComp from '../../components/Reusable/AboutComp'

export default function HeadphonesPage() {
  return (
    <>
        <HeroMain page='Headphones' />
        <ThreeCardProducts />
        <AboutComp />
    </>
  )
}
