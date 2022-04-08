import React from "react";
import { useRouter } from "next/router";

import styles from '../../styles/ProductTitle.module.scss'
import btnStyles from "../../styles/UI/ButtonStyles.module.scss";

import data from '../../data/data.json'

export default function ProductPage(props) {
  const router = useRouter();
  const id = router.query.productTitle;
  let productData;

  props.data.map(data => {
      if(data.slug == id) {
          productData = data;
      }
  })

  return (
    <>
      <div className={styles.btnContainer}>
          <button onClick={() => router.back()}>Go Back</button>
      </div>
      <div className={styles.productTopContainer}>
          <img src={productData.image.desktop}></img>
          <div>
            <h1>{productData.name}</h1>
            <p>{productData.description}</p>
            <h3>$ {productData.price}</h3>
            <section className={styles.productTopContainer__cartContainer}>
                <aside className={styles.productTopContainer__cartContainer__counter}>
                    <button><i class="fas fa-minus"></i></button>
                    <span>1</span>
                    <button><i class="fas fa-plus"></i></button>
                </aside>
                <a className={btnStyles.btnPrimary}>Add to cart</a>
            </section>
          </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          productTitle: data[0].slug
        },
      },
      {
        params: {
          productTitle: data[1].slug
        },
      },
      {
        params: {
          productTitle: data[2].slug
        },
      },
      {
        params: {
          productTitle: data[3].slug
        },
      },
      {
        params: {
          productTitle: data[4].slug
        },
      },
      {
        params: {
          productTitle: data[5].slug
        },
      },
    ],
  };
}

export async function getStaticProps() {
  return {
    props: {
      data: data,
    },
  };
}
