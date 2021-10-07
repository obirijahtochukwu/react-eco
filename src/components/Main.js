import React from 'react';
import Carousel from './Carousel';
import TopSellingItems from './TopSellingItems';


export default function Main() {

 return (
    <main >
      <div className="container-fluid">
      <Carousel/>
      </div>
      <TopSellingItems/>
    </main>
  );
};
