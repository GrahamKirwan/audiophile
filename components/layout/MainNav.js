import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

import { useContext, useState } from "react";
import { CartContext } from "../../components/store/cart-context";

import styles from "../layout/MainNav.module.scss";
import Overlay from "./Overlay";

export default function MainNav() {

    const ctx = useContext(CartContext);

    const router = useRouter();

    const [overlayShowing, setOverlayShowing] = useState(false);

    function cartBtnHandler() {
        if(overlayShowing == false) {
            setOverlayShowing(true)
        } else {
            setOverlayShowing(false)
        }
    }

    function overlayClickHandler() {
        setOverlayShowing(false)
    }

  return (
      <>
    <nav className={styles.nav}>
      <div className={styles.container}>
      <img src="/images/shared/audiophile-logo.svg" />
        <ul className={styles.menu}>
          <li onClick={() => setOverlayShowing(false)} style={router.route == '/' ? {color: 'var(--color-pry-100)'} : {}}>
            <Link href="/" className={styles.selected}>Home</Link>
          </li>
          <li onClick={() => setOverlayShowing(false)} style={router.route == '/headphones' ? {color: 'var(--color-pry-100)'} : {}}>
            <Link href="/headphones">Headphones</Link>
          </li>
          <li onClick={() => setOverlayShowing(false)} style={router.route == '/speakers' ? {color: 'var(--color-pry-100)'} : {}}>
            <Link href="/speakers">Speakers</Link>
          </li>
          <li onClick={() => setOverlayShowing(false)} style={router.route == '/earphones' ? {color: 'var(--color-pry-100)'} : {}}>
            <Link href="/earphones">Earphones</Link>
          </li>
        </ul>
        <div onClick={cartBtnHandler} className={styles.cartNotiContainer}>
            <img src="/images/shared/icon-cart.svg"></img>
            <div className={styles.cartNoti}><span>{ctx.cartTotal}</span></div>
        </div>
      </div>
    </nav>
    <Overlay overlayClickHandler={overlayClickHandler} show={overlayShowing} />
    </>
  );
}
