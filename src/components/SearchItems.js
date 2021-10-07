import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from "react-router-dom";
import { FaStar, FaSistrix } from "react-icons/fa";

export default function SearchItems() {
  const { filteredList, addToCart, handleDetail } = useGlobalContext();

  if (filteredList.length > 0) {  
    return (
      <>
        <div className="nike p-2 mt-2">
          <div className='text-capitalize container'>
            <h5>searched items</h5>
          </div>
        </div>
        <div className="container-fluid  bg-white">
          <div className="container">
            <div className="row pt-4 ">
            {filteredList.map((item)=>{
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
        </div>
      </>
    )
  }
  else {
    return (
      <div className="container-fluid not-found mx-auto">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <div className="bg-white div">
              <div className="text-muted text-center mb-2">
                <FaSistrix/>
              </div>
              <p className="text-center text-muted">Sorry, we didn't find any results matching this search.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
