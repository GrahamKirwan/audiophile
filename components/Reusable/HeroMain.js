import React from 'react'

import styles from '../Reusable/HeroMain.module.scss'

export default function HeroMain(props) {
  return (
    <div className={styles.container}>
        <h2>{props.page}</h2>
    </div>
  )
}
