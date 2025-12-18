'use client';
import React from 'react'

const Product = ({ price }: { price: number }) => {
  console.log("product component rendered");
  return (
    <div>
        <h1>product list button</h1>
        <button onClick={()=>alert(`Price: ${price}`)}>check Products Price</button>
    </div>
  )
}

export default Product;