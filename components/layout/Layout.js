import React from 'react'
import MainNav from './MainNav'

import Head from 'next/head'

import styles from '../layout/Layout.module.scss'

export default function Layout(props) {
  return (
    <>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </Head>
        <MainNav />
        <main className={styles.main}>{props.children}</main>
    </>
  )
}
