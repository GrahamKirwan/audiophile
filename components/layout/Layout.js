import React from 'react'
import MainNav from './MainNav'
import Footer from './Footer'

import styles from '../layout/Layout.module.scss'

export default function Layout(props) {
  return (
    <>
        <MainNav />
        <main className={styles.main}>{props.children}</main>
        <Footer />
    </>
  )
}
