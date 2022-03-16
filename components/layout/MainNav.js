import React from "react";

import styles from "../layout/MainNav.module.scss";

export default function MainNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <img src="/images/shared/audiophile-logo.svg"></img>
        <ul className={styles.menu}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Headphones</a>
          </li>
          <li>
            <a href="#">Speakers</a>
          </li>
          <li>
            <a href="#">Earphones</a>
          </li>
        </ul>
        <div>
            <img src="/images/shared/icon-cart.svg"></img>
        </div>
      </div>
    </nav>
  );
}