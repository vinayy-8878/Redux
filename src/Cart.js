import React from "react";
import { useState } from "react";
import {useSelector} from 'react-redux';
import { clearCart } from "./utils/cartSlice";
import { useDispatch } from "react-redux";

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems=useSelector((store)=>store.cart.items);
    const handleclearCart=()=>{
        dispatch(clearCart());
    }
//   const [cartItems, setCartItems] = useState(0);
console.log(cartItems)
  return (
    <div>
      <h1>Cart-{cartItems.length} items</h1>
      <button onClick={handleclearCart} title="Clear Cart">clear cart</button>
    </div>
  );
}
