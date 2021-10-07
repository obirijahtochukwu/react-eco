import React from 'react'

export default function CartColumns() {
 return (
  <>
   <div className="container-fluid text-center d-none">
    <div className="row pt-5">
     <div className="col-10 mx-auto col-lg-2">
      <p className="text-uppecase">products</p>
     </div>
     <div className="col-10 mx-auto col-lg-2">
      <p className="text-uppecase">name</p>
     </div>
     <div className="col-10 mx-auto col-lg-2">
      <p className="text-uppecase">price</p>
     </div>
     <div className="col-10 mx-auto col-lg-2">
      <p className="text-uppecase">quantity</p>
     </div>
     <div className="col-10 mx-auto col-lg-2">
      <p className="text-uppecase">remove</p>
     </div>
     <div className="col-10 mx-auto col-lg-2">
      <p className="text-uppecase">total</p>
     </div>
    </div>
   </div>
  </>
 )
}
