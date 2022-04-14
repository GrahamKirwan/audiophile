import React from "react";
import { useEffect } from "react";
import CartItem from "../Reusable/CartItem";

import styles from "../layout/Overlay.module.scss";
import btnStyles from "../../styles/UI/ButtonStyles.module.scss";

export default function Overlay(props) {
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
                <h3>CART (4)</h3>
                <p>Remove all</p>
            </div>
            <div className={styles.cartContentContainer_middle}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className={styles.cartContentContainer_bottom}>
                <h5>Total</h5>
                <p>$21,345</p>
            </div>
            <a style={{width: '100%'}} className={btnStyles.btnPrimary}>See product</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
