import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../layout/Footer.module.scss";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <div className={styles.container_left_line}></div>
          <img src="/images/shared/audiophile-logo.svg" alt="logo"></img>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <h5>Copyright 2022. All Rights Reserved</h5>
        </div>
        <div className={styles.container_right}>
          <nav>
            <ul className={styles.menu}>
              <li
                style={
                  router.route == "/" ? { color: "var(--color-pry-100)" } : {}
                }
              >
                <Link href="/" className={styles.selected}>
                  Home
                </Link>
              </li>
              <li
                style={
                  router.route == "/headphones"
                    ? { color: "var(--color-pry-100)" }
                    : {}
                }
              >
                <Link href="/headphones">Headphones</Link>
              </li>
              <li
                style={
                  router.route == "/speakers"
                    ? { color: "var(--color-pry-100)" }
                    : {}
                }
              >
                <Link href="/speakers">Speakers</Link>
              </li>
              <li
                style={
                  router.route == "/earphones"
                    ? { color: "var(--color-pry-100)" }
                    : {}
                }
              >
                <Link href="/earphones">Earphones</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.container_right_socials}>
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
