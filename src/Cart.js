import React from 'react';
import { useState } from 'react';


export default function Cart() {
    const [cartItems,setCartItems]=useState(0);
  return (
    <div><p>Cart-{cartItems} items</p></div>
  )
}
