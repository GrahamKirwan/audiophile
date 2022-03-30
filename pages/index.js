import HeroSection from '../components/Home/HeroSection'
import ThreeCardProducts from '../components/Reusable/ThreeCardProducts'
import OrangeSpeakerFeature from '../components/Reusable/OrangeSpeakerFeature'
import GreySpeakerFeature from '../components/Reusable/GreySpeakerFeature'
import GreyEarphonesFeature from '../components/Reusable/GreyEarphonesFeature'
import AboutComp from '../components/Reusable/AboutComp'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ThreeCardProducts first={true} />
      <OrangeSpeakerFeature />
      <GreySpeakerFeature />
      <GreyEarphonesFeature />
      <AboutComp />
    </>
  )
}
