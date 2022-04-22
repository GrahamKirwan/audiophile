import React from "react";

import { useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { useContext } from "react";
import { CartContext } from "../../components/store/cart-context";

import styles from "../../styles/Checkout.module.scss";

export default function CheckoutPage() {
  const ctx = useContext(CartContext);

  const router = useRouter();

  return (
    <section className={styles.background}>
        <style jsx global>{`
        body {
          background-color: var(--color-pry-500);
        }
      `}</style>
      <div className={styles.checkoutPageContainer}>
        <div className={styles.btnContainer}>
          <button onClick={() => router.back()}>Go Back</button>
        </div>
        <div className={styles.checkoutContainer}>
          <div className={styles.checkoutForm}>
              <h2>Checkout</h2>
              <form>
                  <h3>Billing details</h3>
                  <div className={styles.inputGroup}>
                      <div className={styles.inputGroup__item}>
                          <label>Name</label>
                          <input type="text" name="name" id="name" placeholder="Graham Kirwan" />
                      </div>
                      <div className={styles.inputGroup__item}>
                          <label>Email Address</label>
                          <input type="email" name="email" id="email" placeholder="gkirwan@gmail.com" />
                      </div>
                      <div className={styles.inputGroup__item}>
                          <label>Phone Number</label>
                          <input type="number" name="number" id="number" placeholder="+1 202 303 4444" />
                      </div>
                  </div>



                  <h3>Shipping info</h3>
                  <div className={styles.inputGroup}>
                      <div style={{width: '100%'}} className={styles.inputGroup__item}>
                          <label>Address</label>
                          <input type="text" name="address" id="address" placeholder="1973 King Street West" />
                      </div>
                      <div className={styles.inputGroup__item}>
                          <label>Zip Code</label>
                          <input type="text" name="zip" id="zip" placeholder="M1M9D7" />
                      </div>
                      <div className={styles.inputGroup__item}>
                          <label>City</label>
                          <input type="text" name="city" id="city" placeholder="Chicago" />
                      </div>
                      <div className={styles.inputGroup__item}>
                          <label>Country</label>
                          <input type="text" name="country" id="country" placeholder="United States" />
                      </div>
                  </div>

                  <h3>Payment details</h3>

              </form>
          </div>
          <div className={styles.checkoutSummary}>summary</div>
        </div>
      </div>
    </section>
  );
}
