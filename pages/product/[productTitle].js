import React from 'react'

import { useRouter } from 'next/router'

export default function ProductPage() {

    const router = useRouter();
    const id = router.query.productTitle;

    console.log(id)


  return (
    <div>Product page</div>
  )
}
