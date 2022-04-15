import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import CartItem from "../Reusable/CartItem";

import { useContext, useState } from "react";
import { CartContext } from "../../components/store/cart-context";

import styles from "../layout/Overlay.module.scss";
import btnStyles from "../../styles/UI/ButtonStyles.module.scss";

export default function Overlay(props) {

    const ctx = useContext(CartContext);

  // Pause scrolling on body when overlay is showing
  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = "hidden";
    } else if (props.show == false) {
      document.body.style.overflow = "unset";
    }
  }, [props.show]);

  function overlayClickHandler(e) {
    if (e.target.className.substring(0, 15) == "Overlay_overlay") {
      props.overlayClickHandler();
    }
  }

  function checkoutClickHandler() {
    props.overlayClickHandler();
  }

  function removeAllClickHandler() {
    ctx.removeAllClickHandler();
  }


  return (
    <div
      onClick={overlayClickHandler}
      className={styles.overlay}
      style={props.show ? { display: "initial" } : { display: "none" }}
    >
      <div className={styles.cartContainer}>
        <aside className={styles.cart}>
          <div className={styles.cartContentContainer}>
            <div className={styles.cartContentContainer_top}>
                <h3>CART ({ctx.cartIndvidualItemCount})</h3>
                <p onClick={removeAllClickHandler}>Remove all</p>
            </div>
            <div className={styles.cartContentContainer_middle}>
                {ctx.cart.map((item, index) => {
                    if(item.totalInCart > 0){
                        return <CartItem item={item} key={index}/>
                    }
                })}
                {ctx.cartTotal == 0 ? <p className={styles.cartContentContainer_middle_empty}>Your cart is empty</p> : <span></span>}
            </div>
            <div className={styles.cartContentContainer_bottom}>
                <h5>Total</h5>
                <p>${ctx.cartPrice}</p>
            </div>
            <Link href='/checkout'>
                <a style={{width: '100%'}} onClick={checkoutClickHandler} className={btnStyles.btnPrimary}>Checkout</a>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}