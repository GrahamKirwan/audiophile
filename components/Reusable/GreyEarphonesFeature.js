import React from "react";
import Link from "next/link";

import styles from "../Reusable/GreyEarphonesFeature.module.scss";
import btnStyles from "../../styles/UI/ButtonStyles.module.scss";

export default function GreyEarphonesFeature() {
  return (
    <div className={styles.container}>
      <div className={styles.container_left}></div>
      <div className={styles.container_right}>
        <h3>YX1 EARPHONES</h3>
        <Link href={`/product/yx1-earphones`}>
          <a className={btnStyles.btnThree}>See product</a>
        </Link>
      </div>
    </div>
  );
}
