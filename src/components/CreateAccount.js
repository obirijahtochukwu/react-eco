import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'

export default function CreateAccount() {
 return (
  <>
  <main className="sign">
   <h3 className="uppercase text-muted text-center p-4"><i>create account</i></h3>
   <div className="container">
    <div className="row">
     <div className="col-10 mx-auto col-md-7">
      <form action="/">
       <p className="text-capitalize"><i>first name</i></p>
       <input type="text"/>
       <p className="text-capitalize mt-3"> <i>last name</i></p>
       <input type="text"/>
       <p className="text-capitalize mt-3"> <i>e-mail</i></p>
       <input type="text"/>
       <p className="text-capitalize mt-3"> <i>password</i></p>
       <input type="text"/>
       <button type='submit' className='btn btn-outline-warning mt-2 font-weight-bold'>submit</button>
      </form>
      <button className="btn5 mt-4 p-1 mb-4">
       <span className="float-left pl-1"><FaFacebookSquare/></span> <span className="text-center">login with facebook</span>
      </button>
     </div>
    </div>
   </div>
  </main>
  </>
 )
}
