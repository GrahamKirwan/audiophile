import React from "react";
import styles from "../Reusable/OrangeSpeakerFeature.module.scss";
import btnStyles from "../../styles/UI/ButtonStyles.module.scss";

export default function OrangeSpeakerFeature() {
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <img src="/images/home/desktop/image-speaker-zx9.png" />
      </div>
      <div className={styles.container_right}>
        <div className={styles.container_right_content}>
          <h3>
            ZX9
            <br />
            SPEAKER
          </h3>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <a href="#" className={btnStyles.btnSecondary}>
            See product
          </a>
        </div>
      </div>
    </div>
  );
}
