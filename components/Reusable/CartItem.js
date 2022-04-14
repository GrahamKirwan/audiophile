import React from 'react'

import styles from '../Reusable/CartItem.module.scss'

export default function CartItem() {

    function minusBtnHandler() {
        console.log('rojron')
    }
    function plusBtnHandler() {
        console.log('rojron')
    }

  return (
    <div className={styles.cartItem}>
        <div className={styles.cartItem_left}>
            <img src="/images/cart/image-xx99-mark-one-headphones.jpg"></img>
            <div className={styles.cartItem_left_info}>
                <h6>XX99 11</h6>
                <p>$2,999</p>
            </div>
        </div>
        <div className={styles.cartItem_right}>
        <aside className={styles.cartItem_right_counter}>
              <button onClick={minusBtnHandler}>
                <i className="fas fa-minus"></i>
              </button>
              <span>2</span>
              <button onClick={plusBtnHandler}>
                <i className="fas fa-plus"></i>
              </button>
            </aside>
        </div>
    </div>
  )
}
