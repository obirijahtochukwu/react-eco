import React from 'react';
import Carousel from './Carousel';
import TopSellingItems from './TopSellingItems';
import { useGlobalContext } from "../context";


export default function Main() {
  const { closeSubmenu } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn1')) {
      closeSubmenu();
    }
  };
 return (
    <main className="container" onMouseOver={handleSubmenu}>
      <div className="row">
        <div className="col-12">
          <Carousel/> 
        </div>
      </div>
      <TopSellingItems/>
    </main>
  );
};
