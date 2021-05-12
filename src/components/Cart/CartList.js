import React from 'react'
import { FaTrash } from 'react-icons/fa';


const CartList = ({cart,decrement,increment,removeItem}) =>{
 return (
  <main>
   {cart.map((item)=>{
    const {id,title,img,price,total,count} = item;
    return (
     <article key={item.id} className='container-fluid'>
      <div className="row my-2 text-capitalize text-center">
       <div className="col-10 mx-auto col-lg-2">
        <img src={img} style={{width:"5rem",height:"5rem" }} className="img-fluid" alt="product"/>
       </div>
       <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product :</span>
        {title}
       </div>
       <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price </span>
        price: ${price}
       </div>
       <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
         <div>
          <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>➖</span>
          <span className="btn btn-black mx-1">
           {count}
          </span>
          <span className="btn btn-black mx-1" onClick={()=>increment(id)}>➕</span>
         </div>
        </div>
       </div>
       {/*  */}
       <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon btn" onClick={() =>removeItem(id)}>
         <FaTrash className='text-warning'/>
        </div>
       </div>
       <div className="col-10 mx-auto col-lg-2">
        <strong>item total : $ {total}</strong>     
       </div>
     </div>    
   </article>
   )
   })}
  </main>
 )
}

export default CartList;
