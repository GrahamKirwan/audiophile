import React from "react";

import btnStyles from "../../styles/UI/ButtonStyles.module.scss";
import styles from "../Reusable/ProductAbout.module.scss";

export default function ProductAbout(props) {
  console.log(props.id % 2 !== 0);

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
          <a href="#" className={btnStyles.btnPrimary}>
            See product
          </a>
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
          <a href="#" className={btnStyles.btnPrimary}>
            See product
          </a>
        </div>
      ) : (
        <img src={props.productDetails.image.desktop} />
      )}
    </div>
  );
}
