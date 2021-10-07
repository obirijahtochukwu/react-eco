import React from 'react'
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import { useGlobalContext } from "../context";

export default function Details() {
 const {detailProduct,addToCart} = useGlobalContext();
 return (
  <>
   <Detail detailProduct={detailProduct} addToCart={addToCart}/>
  </>
 )
}

const Detail = ({detailProduct,addToCart }) =>{
 const {id,img,info,price,title, company,inCart} = detailProduct;
 return (
  <div className="container">
   <h4 className="text-uppercase text-center pt-1">details</h4>
   <div className="row">
    <div className="col-10 col-md-6 mx-auto">
     <img src={img} alt={title} className='w-100 img-border'/>
    </div>
    <div className="col-md-6 mx-auto bg-white img-border p-4">
      <h4 className="text-capitalize">{title}</h4>
      <h3 className="text-primary">price: ${price}</h3>
      <h3 className="text-capitalize text-muted">{company} products .inc</h3>
      <p className='font-weight-bold text-dark'>{info}</p>
      <div className="col-12 d-flex sticky bg-white p-2">
        <Link to='/'>
        <button className="add-btn text-capitalize"><FaArrowLeft/></button>
      </Link>
      <button className="add-btn text-capitalize ml-3 w-100" onClick={()=>addToCart(id)} disabled={inCart ? true: false}>                  {inCart? 'in cart':'add to cart'}
      </button>
      </div>
    </div>
   </div>
  </div>
 )
}