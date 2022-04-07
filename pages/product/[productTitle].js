import React from "react";

import { useRouter } from "next/router";

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
      <div>{productData.name}</div>
      <div>{productData.name}</div>
      <div>{productData.name}</div>
      <div>{productData.name}</div>
      <div>{productData.name}</div>
      <div>{productData.name}</div>
      <div>{productData.name}</div>
      <div>{productData.name}</div>
      <div>{productData.name}</div>
      <div>{productData.name}</div>
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
