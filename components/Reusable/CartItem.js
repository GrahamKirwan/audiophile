import React from 'react'

import { useContext, useState } from "react";
import { CartContext } from "../../components/store/cart-context";

import styles from '../Reusable/CartItem.module.scss'

export default function CartItem(props) {

    const ctx = useContext(CartContext);


    function minusBtnHandler() {
        // Add one to totalInCart for specific name
        ctx.removeOneFromCart(props.item.name)
    }
    function plusBtnHandler() {
        // Remove one from totalInCart for specific name
        ctx.addOneToCart(props.item.name)
    }

    console.log(props.item)

  return (
    <div className={styles.cartItem}>
        <div className={styles.cartItem_left}>
            <img src={props.item.img}></img>
            <div className={styles.cartItem_left_info}>
                <h6>{props.item.displayName}</h6>
                <p>${props.item.itemTotalPrice}</p>
            </div>
        </div>
        <div className={styles.cartItem_right}>
            <aside className={styles.cartItem_right_counter}>
              <button onClick={minusBtnHandler}>
                <i className="fas fa-minus"></i>
              </button>
              <span>{props.item.totalInCart}</span>
              <button onClick={plusBtnHandler}>
                <i className="fas fa-plus"></i>
              </button>
            </aside>
        </div>
    </div>
  )
}
