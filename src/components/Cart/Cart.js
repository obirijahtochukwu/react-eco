import React from 'react';
import { useGlobalContext } from "../../context";
import CartColumns from './CartColumns';
import CartList from './CartList'; 
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';

export default function Cart() {
 const { cart,increment,decrement,removeItem,cartTotalCount,cartTotalPrice } = useGlobalContext();
 if(cart.length > 0){
  return (
   <main>
    <CartColumns/>
    <CartList cart={cart} increment={increment} decrement={decrement} removeItem={removeItem} cartTotalCount={cartTotalCount} />
    <CartTotal cartTotalCount={cartTotalCount} cartTotalPrice={cartTotalPrice} />
   </main>
  )
 }
 else{
  return (
  <>
  <EmptyCart/>
  </>
 )
 }
}
