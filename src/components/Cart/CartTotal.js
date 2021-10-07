import React from 'react'

export default function CartTotal({cartTotalCount, cartTotalPrice}) {
 return (
  <div>
   <p>{cartTotalPrice}</p>
   {cartTotalCount}
  </div>
 )
}
