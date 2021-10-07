import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from "react-router-dom";

export default function TopSellingItems() {
 const { recommended, defacto, brand, anker, accessories, mobile, footwares, handleDetail } = useGlobalContext();
 return (
    <>
      {/* RECOMENDE ITEMS*/}
      <div className="recommended bg-white">
        <h5 className='text-capitalize'>recommended for you</h5>
        <div className="recommended-overflow">
          {recommended.map((item)=>{
            const {id, img, title, price, per} = item;
            return (
              <div key={id} onClick={()=> handleDetail(id)} className='recommended-card col-4 col-md-3 col-lg-2'>
                <Link to='/details'>
                  <img src={img} alt="" className='w-100 mb-3'/>
                  <h6>{title}</h6>
                  <p>${price}</p>
                  <div className='top'>
                    <span>{per}%</span>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      <div className="container-fluid bg-white mt-1">
        <h5 className="text-center pt-3">Don't miss out this</h5>
        <div className="row">
          <div className="col-6 col-md-3 mx-auto">
            <img src="../image/ba10.jpg" alt="" className='w-100 img-border'/>
          </div>
          <div className="col-6 col-md-3 mx-auto">
            <img src="../image/ba9.jpg" alt="" className='w-100 img-border'/>
          </div>
          <div className="col-6 col-md-3 mx-auto">
            <img src="../image/ba7.jpg" alt="" className='w-100 img-border'/>
          </div>
          <div className="col-6 col-md-3 mx-auto">
            <img src="../image/ba11.gif" alt="" className='w-100 img-border'/>
          </div>
        </div>
      </div>

      {/* DEFACTO STORE */}
        <div className="defacto p-2 mt-2">
          <div className='text-capitalize'>
            <h5>defactor store</h5>
            <h6 className='text-uppercase font-weight-bold mr-2'>see all</h6>
          </div>
          <h6>Extra 10% Off For Prime Subscribers</h6>
        </div>
      <div className="container-fluid bg-white">
        <div className="row">
          {defacto.map((item, index)=>{
            const {id, img, title, price, per} = item;
            if (index < 4) {
              return (
                <div className="col-6 col-md-3 mx-auto">
                  <div key={id} onClick={()=> handleDetail(id)} className='recommended-card mx-auto'>
                    <Link to='/details'>
                      <img src={img} alt="" className='w-100 mb-3'/>
                      <h6>{title}</h6>
                      <p>${price}</p>
                      <div className='top'>
                        <span>{per}%</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            }
            return null;
          })}
        </div>
      </div>

      {/* BRAND FESTIVAL */}
      <div className="brand p-2 mt-2">
        <div className='text-capitalize'>
          <h5>brand festival top deals</h5>
          <h6 className='text-uppercase font-weight-bold mr-2'>see all</h6>
        </div>
      </div>
      <div className="container-fluid bg-white">
        <div className="row">
          {brand.map((item, index)=>{
            const {id, img, title, price, per} = item;
            if (index < 4) {
              return (
                <div className="col-6 col-md-3 mx-auto">
                  <div key={id} onClick={()=> handleDetail(id)} className='recommended-card mx-auto'>
                    <Link to='/details'>
                      <img src={img} alt="" className='w-100 mb-3'/>
                      <h6>{title}</h6>
                      <p>${price}</p>
                      <div className='top'>
                        <span>{per}%</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            }
            return null;
          })}
        </div>
      </div>

      {/* ANKER STORE */}
      <div className="container-fluid bg-white mt-2">
        <div className="row">
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
          <h5>anker store</h5>
          <h6 className='text-uppercase font-weight-bold mr-2'>see all</h6>
        </div>
      </div>
      <div className="bg-white">
        <div className="container bg-white">
          <div className="row">
            {anker.map((item, index)=>{
              const {id, img, title, price, per} = item;
              if (index < 6) {
                return (
                  <div className="col-6 col-md-3 mx-auto">
                    <div key={id} onClick={()=> handleDetail(id)} className='recommended-card mx-auto'>
                      <Link to='/details'>
                        <img src={img} alt="" className='w-100 mb-3'/>
                        <h6>{title}</h6>
                        <p>${price}</p>
                        <div className='top'>
                          <span>{per}%</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              }
              return null;
            })}
          </div>
        </div>
      </div>

      {/* MOBILE PHONE */}
      <div className="anker p-2 mt-2">
        <div className='text-capitalize'>
          <h5>smartphones deals</h5>
          <h6 className='text-uppercase font-weight-bold mr-2'>see all</h6>
        </div>
      </div>
      <div className="bg-white">
        <div className="container bg-white">
          <div className="row">
            {mobile.map((item, index)=>{
              const {id, img, title, price, per} = item;
              if (index < 4) {
                return (
                  <div className="col-6 col-md-3 mx-auto">
                    <div key={id} onClick={()=> handleDetail(id)} className='recommended-card mx-auto'>
                      <Link to='/details'>
                        <img src={img} alt="" className='w-100 mb-3'/>
                        <h6>{title}</h6>
                        <p>${price}</p>
                        <div className='top'>
                          <span>{per}%</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              }
              return null;
            })}
          </div>
        </div>
      </div>

      {/* ACCESSORIES YOU MIGHT NEED */}
      <div className="container-fluid bg-white mt-2">
        <div className="row">
          <div className="col-6 col-md-6 mx-auto">
            <img src="../image/ba13.jpg" alt="" className="img-border w-100"/>
          </div>
          <div className="col-6 col-md-6 mx-auto">
            <img src="../image/ba19.jpg" alt="" className="img-border w-100"/>
          </div>
        </div>
      </div>
      <div className="defacto p-2 mt-2">
        <div className='text-capitalize'>
          <h5>accessories you need</h5>
          <h6 className='text-uppercase font-weight-bold mr-2'>see all</h6>
        </div>
      </div>
      <div className="container-fluid bg-white">
        <div className="container bg-white">
          <div className="row">
            {accessories.map((item, index)=>{
              const {id, img, title, price, per} = item;
              if (index < 4) {
                return (
                  <div className="col-6 col-md-3 mx-auto">
                    <div key={id} onClick={()=> handleDetail(id)} className='recommended-card mx-auto'>
                      <Link to='/details'>
                        <img src={img} alt="" className='w-100 mb-3'/>
                        <h6>{title}</h6>
                        <p>${price}</p>
                        <div className='top'>
                          <span>{per}%</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              }
              return null;
            })}
          </div>
        </div>
      </div>

      {/* NIKE STORE */}
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-6 col-md-3 mx-auto">
            <img src="../image/ba4.jpg" alt="" className="img-border w-100"/>
          </div>
          <div className="col-6 col-md-3 mx-auto">
            <img src="../image/ba5.jpg" alt="" className="img-border w-100"/>
          </div>
          <div className="col-6 col-md-3 mx-auto">
            <img src="../image/ba17.jpg" alt="" className="img-border w-100"/>
          </div>
          <div className="col-6 col-md-3 mx-auto">
            <img src="../image/ba15.jpg" alt="" className="img-border w-100"/>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="nike p-2 mt-2">
          <div className='text-capitalize'>
            <h5>nike & addidas</h5>
            <h6 className='text-uppercase font-weight-bold mr-2'>see all</h6>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-white">
        <div className="container bg-white">
          <div className="row">
            {footwares.map((item, index)=>{
              const {id, img, title, price, per} = item;
              if (index < 6) {
                return (
                  <div className="col-6 col-md-3 mx-auto">
                    <div key={id} onClick={()=> handleDetail(id)} className='recommended-card mx-auto'>
                      <Link to='/details'>
                        <img src={img} alt="" className='w-100 mb-3'/>
                        <h6>{title}</h6>
                        <p>${price}</p>
                        <div className='top'>
                          <span>{per}%</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  )
}

