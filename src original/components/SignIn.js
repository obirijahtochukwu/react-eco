import React from 'react'
import { FaEnvelope, FaFacebookSquare } from 'react-icons/fa'

export default function SignIn() {
 return (
  <>
  <main className="sign">
   <h3 className="uppercase text-muted text-center mt-5"><i>login</i></h3>
   <div className="container">
    <div className="row">
     <div className="col-10 mx-auto col-md-7">
      <form action="/">
       <p className="text-capitalize"><i>e-mail</i></p>
       <input type="text"/>
       <p className="text-capitalize mt-3"> <i>password</i></p>
       <input type="text"/>
      </form>
      <button className="btn4 mt-4 p-1">
       <span className="float-left pl-1"><FaEnvelope/></span> <span className="text-center">login</span>
      </button>
      <button className="btn5 mt-4 p-1">
       <span className="float-left pl-1"><FaFacebookSquare/></span> <span className="text-center">login with facebook</span>
      </button>
     </div>
    </div>
   </div>
  </main>
  </>
 )
}
