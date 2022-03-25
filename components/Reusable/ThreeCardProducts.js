import React from "react";
import Link from "next/link";

import styles from "../Reusable/ThreeCardProducts.module.scss";

export default function ThreeCardProducts(props) {
  let isFirstComponent = props.first ? styles.largeMargin : "";

  return (
    <div className={`${styles.cardsContainer} ${isFirstComponent}`}>
      <Link href="/headphones">
        <a className={styles.card}>
            <img className={`${styles.cardImage} ${styles.cardImageMain}`} src="/images/shared/headphones.png"></img>
            <img className={`${styles.shadow} ${styles.cardImage}`} src="/images/shared/shadow.png"></img>
            <h4>Headphones</h4>
            <div className={styles.shop}>
            <h5>Shop</h5>
            <img src="/images/shared/desktop/icon-arrow-right.svg"></img>
            </div>
        </a>
      </Link>
      <Link href="/speakers">
        <a className={styles.card}>
            <img className={`${styles.cardImage} ${styles.cardImageMain}`} src="/images/shared/speakers.png"></img>
            <img className={`${styles.shadow} ${styles.cardImage}`} src="/images/shared/shadow.png"></img>
            <h4>Speakers</h4>
            <div className={styles.shop}>
            <h5>Shop</h5>
            <img src="/images/shared/desktop/icon-arrow-right.svg"></img>
            </div>
        </a>
      </Link>
      <Link href="/earphones">
        <a className={styles.card}>
            <img className={`${styles.cardImage} ${styles.cardImageMain}`} src="/images/shared/earphones.png"></img>
            <img className={`${styles.shadow} ${styles.cardImage}`} src="/images/shared/shadow.png"></img>
            <h4>Earphones</h4>
            <div className={styles.shop}>
            <h5>Shop</h5>
            <img src="/images/shared/desktop/icon-arrow-right.svg"></img>
            </div>
        </a>
      </Link>
    </div>
  );
}
