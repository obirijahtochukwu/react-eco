import React from 'react'
import { useGlobalContext } from '../../context';
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';


export default function Anker() {
 const { anker, handleDetail, addToCart } = useGlobalContext();
 return (
  <>
   <div className='container-fluid'>
    <div className="row bg-white pt-2">
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/ba20.jpg" alt="" className="img-border w-100"/>
     </div>
     <div className="col-6 col-md-3 mx-auto">
      <img src="../image/ba24.jpg" alt="" className="img-border w-100"/>
     </div>
     <div className="col-12 col-md-6 mx-auto">
      <img src="../image/CBM-(5).jpg" alt="" className="img-border w-100"/>
     </div>
    </div>
   </div>

   <div className="anker p-2 mt-2">
    <div className='text-capitalize'>
     <h5>anker festivals top deals</h5>
    </div>
   </div>
   <div className="container-fluid pl-md-5 pr-md-5 bg-white">
    <div className="containar">
    </div>
    <div className="row pt-4 pb-4 ml-md-5 mr-md-5">
     {anker.map((item)=>{
     const {id, img, title, price, inCart} = item;
      return (
       <article key={id} className="col-6 col-md-3 mx-auto">
        <div className="product-card">
         <Link to='/details'>
          <img src={img} onClick={()=> handleDetail(id)} alt="" className="img-border w-100"/>
         </Link>
         <div className="product-text p-2">
          <p className="text-muted text-uppercase">{title}</p>
          <h5 className="font-weight-bold">$ {price}</h5>
          <div className="d-flex align-items-center">
           <FaStar className='orange'/>
           <FaStar className='orange'/>
           <FaStar className='orange'/>
           <FaStar className='orange'/>
           <FaStar className='orange'/>
          </div>
          <button onClick={()=> addToCart(id)} disabled={inCart ? true : false} className="product-btn w-100 mt-2 text-center text-white font-weight-bold">
           {inCart? 'in cart':'add to cart'}
          </button>
         </div>
        </div>
       </article>
      )
     })}
    </div> 
   </div>
  </>
 )
}
