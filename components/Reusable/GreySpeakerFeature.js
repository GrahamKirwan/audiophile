import React from 'react'

import styles from '../Reusable/GreySpeakerFeature.module.scss'
import btnStyles from "../../styles/UI/ButtonStyles.module.scss";

export default function GreySpeakerFeature() {
  return (
    <div className={styles.container}>
        <h3>ZX7 SPEAKER</h3>
        <a href='#' className={btnStyles.btnThree}>See product</a>
    </div>
  )
}
