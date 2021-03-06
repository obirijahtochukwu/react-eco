import React from 'react'
import { FaCartPlus } from 'react-icons/fa'

export default function Footer() {
 return (
  <>
   <footer className="container-fluid">
    <div className="row">
     <div className="col-md-4 mx-auto">
      <h1 className="text-uppercase text-center m-3">jumia<FaCartPlus/> </h1>
     </div>
     <div className="col-11 mx-auto col-md-4 pt-2">
      <h6 className="text-uppercase text-white"><i>new to <span style={{color: 'orange'}}>jumia</span></i></h6>
      <p>Subscribe to our newsletter to get update on our latest sales</p>
      <input type="text" placeholder='exampl@gmail.com' className='bg-white'/><br/>
      <button className="btn btn-outline-white">male</button>
      <button className="btn btn-outline-white m-3">female</button>
     </div>
     <div className="col-11 mx-auto col-md-4 download">
      <h5>downlaoad our <i style={{color: 'orange'}}>jumia<FaCartPlus/></i> app</h5>
     </div>
    </div>
   </footer>
  </>
 )
}
