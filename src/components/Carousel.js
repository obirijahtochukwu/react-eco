import React from 'react';
import { services } from '../data';

export default function Carousel() {
 return (
  <div className="row align-items-center bg-white p-3">
       <div className="col-12 col-md-7 mx-auto">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
         <div class="carousel-inner">
          <div class="carousel-item active">
           <img src="../image/ba26.jpg"  class="d-block w-100" alt="services"/>
          </div>
          <div class="carousel-item">
           <img src="../image/ba12.jpg" class="d-block w-100" alt="services"/>
          </div>
         <div class="carousel-item">
          <img src="../image/ba14.jpg" class="d-block w-100" alt="services"/>
         </div>
         <div class="carousel-item">
          <img src="../image/ba19.jpg" class="d-block w-100" alt="services"/>
         </div>
        </div>
       </div>
      </div>
      <div className="col-12 col-md-5">
        <div className="row">
          {services.map((service, index)=>{
            const {img, title} = service;
            return (
              <div key={index} className="col-3 mx-auto">
                <div className="services mx-auto w-100">
                  <img src={img} alt="" className="text-center w-100 mx-auto"/>
                  <h6 className="text-center">{title}</h6>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
 )
}
