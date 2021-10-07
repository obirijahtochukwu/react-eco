import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

export default function EmptyCart() {
 return (
  <div className="container-fluid empty-cart">
   <div className='col-11 col-md-6 bg-white mx-auto'>
    <h4 className="text-center text-primary">Oops!</h4>
    <h3 className="text-center text-uppercase">your cart is <span className="text-danger">empty</span><FaCartPlus  className='text-warning'/> 
    </h3>
   </div>
  </div>
 )
}
