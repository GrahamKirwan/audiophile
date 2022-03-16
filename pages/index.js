import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import HeroSection from '../components/Home/HeroSection'
import ThreeCardProducts from '../components/Reusable/ThreeCardProducts'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ThreeCardProducts first={true} />
    </>
  )
}
