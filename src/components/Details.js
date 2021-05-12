import React from 'react'
import { Link } from "react-router-dom";
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
    <div className="col-md-6 mx-auto">
     <img src={img} alt={title} className='mx-auto'/>
    </div>
    <div className="col-md-6 mx-auto">
     <h3 className="text-primary">price: ${price}</h3>
     <h3 className="text-capitalize">product: {title}</h3>
     <h3 className="text-capitalize text-muted">company: {company}</h3>
     <p className='font-weight-bold text-dark'>{info}</p>
      <Link to='/'>
       <button className="btn-1 text-capitalize">back to products</button>
      </Link>
      <button className="btn-1 text-capitalize ml-3" onClick={()=>addToCart(id)} disabled={inCart ? true: false}> 
        {inCart? 'in cart':'add to cart'}
      </button>
    </div>
   </div>
  </div>
 )
}