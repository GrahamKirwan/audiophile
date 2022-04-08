import React from 'react'
import Link from "next/link";

import styles from './HeroSection.module.scss'
import btnStyles from '../../styles/UI/ButtonStyles.module.scss'

export default function HeroSection() {
  return (
    <section className={styles.heroBg}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContainerLeft}> 
          <h2>New Product</h2>
          <h1>XX99 MARK II HEADPHONES</h1>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link href={`/product/xx99-mark-two-headphones`}>
            <a className={btnStyles.btnPrimary}>See product</a>
          </Link>
        </div>
        <div className={styles.heroContainerRight}>
        </div>
      </div>  
    </section>
  )
}
