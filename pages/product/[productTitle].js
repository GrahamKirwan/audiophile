import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import ThreeCardProducts from '../../components/Reusable/ThreeCardProducts'
import AboutComp from '../../components/Reusable/AboutComp'

import styles from "../../styles/ProductTitle.module.scss";
import btnStyles from "../../styles/UI/ButtonStyles.module.scss";

import data from "../../data/data.json";

export default function ProductPage(props) {
  const router = useRouter();
  const id = router.query.productTitle;
  let productData;

  props.data.map((data) => {
    if (data.slug == id) {
      productData = data;
    }
  });

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
            <aside
              className={styles.productTopContainer__cartContainer__counter}
            >
              <button>
                <i className="fas fa-minus"></i>
              </button>
              <span>1</span>
              <button>
                <i className="fas fa-plus"></i>
              </button>
            </aside>
            <a className={btnStyles.btnPrimary}>Add to cart</a>
          </section>
        </div>
      </div>
      <div className={styles.productBottomContainer}>
        <div className={styles.productBottomContainer__left}>
          <h2>FEATURES</h2>
          <p>{productData.features}</p>
        </div>
        <div className={styles.productBottomContainer__right}>
          <div>
            <h2>IN THE BOX</h2>
            {productData.includes.map((item) => {
              return (
                <p>
                  <span>{item.quantity}x</span>
                  {item.item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.productGalleryContainer}>
        <div className={styles.productGalleryContainer__left}>
          <img src={productData.gallery.first.desktop}></img>
          <img src={productData.gallery.second.desktop}></img>
        </div>
        <div className={styles.productGalleryContainer__right}>
          <img src={productData.gallery.third.desktop}></img>
        </div>
      </div>
      <div className={styles.productOthers}>
        <h2>YOU MAY ALSO LIKE</h2>
        <div className={styles.productOthers__container}>
          <div className={styles.productOthers__container__item}>
            <img src={productData.others[0].image.desktop}></img>
            <h3>{productData.others[0].name}</h3>
            <Link href={`/product/${productData.others[0].slug}`}>
            <a className={btnStyles.btnPrimary}>See product</a>
          </Link>
          </div>
          <div className={styles.productOthers__container__item}>
            <img src={productData.others[1].image.desktop}></img>
            <h3>{productData.others[1].name}</h3>
            <Link href={`/product/${productData.others[1].slug}`}>
            <a className={btnStyles.btnPrimary}>See product</a>
          </Link>
          </div>
          <div className={styles.productOthers__container__item}>
            <img src={productData.others[2].image.desktop}></img>
            <h3>{productData.others[2].name}</h3>
            <Link href={`/product/${productData.others[2].slug}`}>
            <a className={btnStyles.btnPrimary}>See product</a>
          </Link>
          </div>
        </div>
      </div>
      <ThreeCardProducts />
      <AboutComp />
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          productTitle: data[0].slug,
        },
      },
      {
        params: {
          productTitle: data[1].slug,
        },
      },
      {
        params: {
          productTitle: data[2].slug,
        },
      },
      {
        params: {
          productTitle: data[3].slug,
        },
      },
      {
        params: {
          productTitle: data[4].slug,
        },
      },
      {
        params: {
          productTitle: data[5].slug,
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
