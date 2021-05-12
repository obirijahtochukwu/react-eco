import React from 'react';
import { FaPaypal, FaQuestionCircle, FaShippingFast } from 'react-icons/fa';


export default function Carousel() {
 return (
  <div className="row">
       <div className="col-lg-9 mx-auto pt-3">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
         <div class="carousel-inner">
          <div class="carousel-item active">
           <img src="../img/Mobile-Anchor-Slider-v-copy-7a.jpg"  class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
           <img src="../img/image-(2)-min.png" class="d-block w-100" alt="..."/>
          </div>
         <div class="carousel-item">
          <img src="../img/Artboard-2-(1).jpg" class="d-block w-100" alt="..."/>
         </div>
         <div class="carousel-item">
          <img src="../img/E0B03D94-67A9-4263-B52C-F8BC81841263.jpeg" class="d-block w-100" alt="..."/>
         </div>
        </div>
       </div>
      </div>
       <div className="col-lg-3 mx-auto">
        <div className="help">
         <div>
          <span><FaQuestionCircle className='text-warning text-bold'/></span>
           customer's care
         </div>
         <div>
          <span>
           <FaShippingFast className='text-primary'/>
          </span>
          sell on jumia
         </div>
         <div>
          <span>
           <FaPaypal className='text-primary'/>
          </span>
          easy transaction
         </div>
        </div>
      </div>
     </div>
 )
}
