import React from 'react';
import { FaMinusCircle, FaPlusCircle, FaRegHeart, FaTrash } from 'react-icons/fa';


const CartList = ({cart,decrement,increment,removeItem, cartTotalCount}) =>{
  return (
    <main className='container-fluid bg-white p-3'>
      <div className="anker p-2 m-2">
        <div className='text-capitalize text-muted'>
          <h5>my cart ({cartTotalCount} items)</h5>
        </div>
      </div>
      <div className="row align-item-center">
      {cart.map((item)=>{
        const {id,title,img,price,count} = item;
        return (
          <article key={item.id}  className='col-11 col-md-3 mx-auto'>
              <div  className="p-2 mx-auto bg-white img-border car">
                <div className="row align-items-center">
                  <div className="col-5">
                    <img src={img} alt="" className="w-100 img-border"/>
                  </div>
                  <div className="col-7">
                    <h6 className="text-capitalize font-weight-bold">{title}</h6>
                    <em className="textt-upperca">jumia🚀global</em>
                    <p className="orange mt-2">$ {price}</p>
                  </div>
                </div>
                <hr/>
                <div className="d-flex justify-content-between align-items-center m-3">
                  <span className=" align-items-center">
                    <FaRegHeart className='mr-3 orange'/>
                    <span className='pl-3 p-1' style={{borderLeft: '0.1rem solid rgb(0, 0, 0, 0.3)', cursor: 'pointer', color: 'red'}}><FaTrash onClick={()=> removeItem(id)} /></span>
                  </span>
                  <span className="d-flex align-items-center ">
                    <FaMinusCircle onClick={()=> decrement(id)} className='orange' style={{cursor: 'pointer'}}/>
                    <span className="font-weight-bold p-2 ml-2 mr-2" style={{border: 'transparent', borderBottom: '0.1rem solid rgb(0, 0, 0, 0.3)'}}>{count}</span>
                    <FaPlusCircle onClick={()=> increment(id)} className='orange' style={{cursor: 'pointer'}}/>
                  </span>
                </div>
              </div>
          </article>
      )
    })}
    </div>
    </main>
  )
}

export default CartList;
