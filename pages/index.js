import Head from 'next/head'

import HeroSection from '../components/Home/HeroSection'
import ThreeCardProducts from '../components/Reusable/ThreeCardProducts'
import OrangeSpeakerFeature from '../components/Reusable/OrangeSpeakerFeature'
import GreySpeakerFeature from '../components/Reusable/GreySpeakerFeature'
import GreyEarphonesFeature from '../components/Reusable/GreyEarphonesFeature'
import AboutComp from '../components/Reusable/AboutComp'

export default function Home() {
  return (
    <>
     <Head>
        <title>Audiophile | Audio Gadgets Store</title>
        <meta
          name="description"
          content="Check out our selection of high end audio equipment."
        />
      </Head>
      <HeroSection />
      <ThreeCardProducts first={true} />
      <OrangeSpeakerFeature />
      <GreySpeakerFeature />
      <GreyEarphonesFeature />
      <AboutComp />
    </>
  )
}
