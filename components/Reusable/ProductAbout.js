import React from "react";
import Link from "next/link";

import btnStyles from "../../styles/UI/ButtonStyles.module.scss";
import styles from "../Reusable/ProductAbout.module.scss";

export default function ProductAbout(props) {
  return (
    <div className={styles.container}>
      {props.id % 2 == 0 ? (
        <img src={props.productDetails.image.desktop} />
      ) : (
        <div className={styles.container_left__odd}>
          {props.productDetails.new ? (
            <span className={styles.container_left_new}>new product</span>
          ) : (
            <p></p>
          )}
          <h2>{props.productDetails.name}</h2>
          <p>{props.productDetails.description}</p>
          <Link href={`/product/${props.productDetails.slug}`}>
            <a className={btnStyles.btnPrimary}>See product</a>
          </Link>
        </div>
      )}

      {props.id % 2 == 0 ? (
        <div className={styles.container_left}>
          {props.productDetails.new ? (
            <span className={styles.container_left_new}>new product</span>
          ) : (
            <p></p>
          )}
          <h2>{props.productDetails.name}</h2>
          <p>{props.productDetails.description}</p>
          <Link href={`/product/${props.productDetails.slug}`}>
            <a className={btnStyles.btnPrimary}>See product</a>
          </Link>
        </div>
      ) : (
        <img src={props.productDetails.image.desktop} />
      )}
    </div>
  );
}
