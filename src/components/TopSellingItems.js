import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

export default function TopSellingItems() {
 const { items,handleDetail,addToCart } = useGlobalContext();
 return (
  <>
  <Item items={items} handleDetail={handleDetail} addToCart={addToCart}/>
  </>
 )
}

const Item = ({items, handleDetail, addToCart}) => {
 return (
  <div className="container top mt-5">
    <h3 className="text-capitalize p-2 text-white"> <i>top selling items</i> </h3>
      <div className="row">
        {items.map((item)=>{
        const {id,img,price,title,per,inCart} = item;
        return <article key={id} className="col-6 mx-auto col-md-2 ">
          <div className='card' onClick={()=>{
         handleDetail(id)
          }}><Link to='/details'>
              <img src={img} className='w-100' alt=""/>
            </Link>
            <p className='pl-2'>{title} <br/>
              ${price}
            </p>
            <div className="per">
            <p className='text-italic'>{per}%</p>
          </div>
          <div className="d-flex pl-2"><FaStar/><FaStar/><FaStar/><FaStar/> <FaStar className='text-muted'/></div>
          <button className="btn2 m-2" onClick={()=> addToCart(id)} disabled={inCart?true:false}>{inCart ? 'in cart' : 'add to cart'}</button>
        </div>
      </article>
      })}
    </div>
  </div>
 )
}
