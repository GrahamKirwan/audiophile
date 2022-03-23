import React from 'react'

import styles from '../layout/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.container_left}>
                <div className={styles.container_left_line}></div>
                <img src="/images/shared/audiophile-logo.svg" alt='logo'></img>
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                <h5>Copyright 2022. All Rights Reserved</h5>
            </div>
            <div className={styles.container_right}>
                <nav>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Headphones</a></li>
                        <li><a href='#'>Speakers</a></li>
                        <li><a href='#'>Earphones</a></li>
                    </ul>
                </nav>
                <div className={styles.container_right_socials}>
                    <a href='#'><img src="/images/shared/desktop/icon-facebook.svg"></img></a>
                    <a href='#'><img src="/images/shared/desktop/icon-instagram.svg"></img></a>
                    <a href='#'><img src="/images/shared/desktop/icon-twitter.svg"></img></a>
                </div>
            </div>
        </div>
    </footer>
  )
}
