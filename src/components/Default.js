import React from 'react'
import { FaCogs } from 'react-icons/fa'

export default function Default() {
 return (
  <div className='empty'>
   <h4 className="text-center text-primary">Oops!</h4>
   <h3 className="text-center text-uppercase">page not   <span className="text-danger">found</span><FaCogs className='text-warning ml-2'/> 
   </h3>
  </div>
 )
}
