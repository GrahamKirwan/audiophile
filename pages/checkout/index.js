import React from "react";

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import CartItem from "../../components/Reusable/CartItem";


import { useContext } from "react";
import { CartContext } from "../../components/store/cart-context";

import styles from "../../styles/Checkout.module.scss";
import btnStyles from "../../styles/UI/ButtonStyles.module.scss";


export default function CheckoutPage() {
  const ctx = useContext(CartContext);

  const router = useRouter();

  function cashPaymentListener() {
      setRadio('Cash')
  }

  function emoneyPaymentListener() {
    setRadio('emoney')
      
  }

  const [radio, setRadio] = useState('Cash');

  function onChangeRadio(e) {
    setRadio({value : e.target.value})
  }

  function payBtnHandler() {
      console.log('pay')
  }

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
                          <input type="text" name="number" id="number" placeholder="+1 202 303 4444" />
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
                  <div className={styles.paymentDetailsContainer}>
                    <p>Payment Method</p>
                    <div className={styles.paymentDetailsRadioContainer}>
                        <div onClick={emoneyPaymentListener}>
                            <input type="radio" name="paymentMethod" checked = {radio === 'emoney'} onChange = {onChangeRadio} value= "emoney"/>
                            <label>E-Money</label>
                        </div>
                        <div onClick={cashPaymentListener}>
                            <input type="radio" name="paymentMethod" checked = {radio === 'Cash'} onChange = {onChangeRadio} value= "Cash"/>
                            <label>Cash On Delivery</label>
                        </div>
                    </div>
                  </div>

                  <p style={{display: `${radio == 'Cash' ? 'initial' : 'none'}`}} className={styles.cashOnDelivery}>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>

                  <div style={{display: `${radio == 'emoney' ? 'flex' : 'none'}`}}className={styles.inputGroup}>
                      <div style={{marginBottom: 0}} className={styles.inputGroup__item}>
                          <label>E-Money Number</label>
                          <input style={{marginBottom: 0}} type="text" name="eNumber" id="eNumber" placeholder="23749392" />
                      </div>
                      <div style={{marginBottom: 0}} className={styles.inputGroup__item}>
                          <label>E-Money Pin</label>
                          <input style={{marginBottom: 0}} type="text" name="ePin" id="ePin" placeholder="12345" />
                      </div>
                      
                  </div>


              </form>
          </div>
          <div className={styles.checkoutSummary}>
              <div>
          <h3>Summary</h3>
              <div className={styles.checkoutSummary_middle}>
              
                {ctx.cart.map((item, index) => {
                    if(item.totalInCart > 0){
                        return <CartItem item={item} key={index}/>
                    }
                })}
                {ctx.cartTotal == 0 ? <p className={styles.cartContentContainer_middle_empty}>Your cart is empty</p> : <span></span>}
            </div>
            </div>

            <div className={styles.totals}>
                <div>
                    <p className={styles.totals_heading}>Total</p>
                    <p className={styles.totals_number}>${ctx.cartPrice}</p>
                </div>
                <div>
                    <p className={styles.totals_heading}>Shipping</p>
                    <p className={styles.totals_number}>${Math.floor(ctx.cartPrice / 100) }</p>
                </div>
                <div>
                    <p className={styles.totals_heading}>VAT (included)</p>
                    <p className={styles.totals_number}>${Math.floor(ctx.cartPrice / 1000) }</p>
                </div>
                <br>
                </br>
                <div>
                    <p className={styles.totals_heading}>Grand total</p>
                    <p style={{color: 'var(--color-pry-100)'}} className={styles.totals_number}>${Math.floor(ctx.cartPrice / 1000) + Math.floor(ctx.cartPrice / 100) + ctx.cartPrice}</p>
                </div>
            <a style={{width: '100%'}} onClick={payBtnHandler} className={btnStyles.btnPrimary}>Continue & pay</a>

            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
