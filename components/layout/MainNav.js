import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

import { useContext } from "react";
import { CartContext } from "../../components/store/cart-context";

import styles from "../layout/MainNav.module.scss";

export default function MainNav() {

    const ctx = useContext(CartContext);

    const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
      <img src="/images/shared/audiophile-logo.svg" />
        <ul className={styles.menu}>
          <li style={router.route == '/' ? {color: 'var(--color-pry-100)'} : {}}>
            <Link href="/" className={styles.selected}>Home</Link>
          </li>
          <li style={router.route == '/headphones' ? {color: 'var(--color-pry-100)'} : {}}>
            <Link href="/headphones">Headphones</Link>
          </li>
          <li style={router.route == '/speakers' ? {color: 'var(--color-pry-100)'} : {}}>
            <Link href="/speakers">Speakers</Link>
          </li>
          <li style={router.route == '/earphones' ? {color: 'var(--color-pry-100)'} : {}}>
            <Link href="/earphones">Earphones</Link>
          </li>
        </ul>
        <div className={styles.cartNotiContainer}>
            <img src="/images/shared/icon-cart.svg"></img>
            <div className={styles.cartNoti}><span>{ctx.cartTotal}</span></div>
        </div>
      </div>
    </nav>
  );
}
