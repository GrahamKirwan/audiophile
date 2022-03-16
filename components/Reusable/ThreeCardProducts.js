import React from "react";

import styles from "../Reusable/ThreeCardProducts.module.scss";

export default function ThreeCardProducts(props) {
    let isFirstComponent = props.first ? styles.largeMargin : '';

  return (
    <div className={`${styles.cardsContainer} ${isFirstComponent}`}>
        <a href="#" className={styles.card}>
            <img src="/images/shared/headphones.png"></img>
            <img className={styles.shadow} src="/images/shared/shadow.png"></img>
            <h4>Headphones</h4>
            <h5>Shop</h5>
        </a>
        <a href="#" className={styles.card}>
            <h4>Speakers</h4>
            <h5>Shop</h5>
        </a>
        <a href="#" className={styles.card}>
            <h4>Earphones</h4>
            <h5>Shop</h5>
        </a>
    </div>
  )
}
