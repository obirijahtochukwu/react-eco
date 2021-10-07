import React from 'react'

export default function CreateAccount() {
 return (
  <>
    <div className="signup container-fluid d-flex align-items-center w-100 justify-content-center">
      <div className="col-12 col-md-7 col-lg-5 mx-auto bg-white submit p-4">
        <form action="submit">
          <label htmlFor="name">first name:</label>
          <input type="text" className="w-100 mb-3 p-1"/>
          <label htmlFor="name">last name:</label>
          <input type="text" className="w-100 mb-3 p-1"/>
          <label htmlFor="email">email address:</label>
          <input type="text" className="w-100 mb-3 p-1"/>
          <label htmlFor="password">password:</label>
          <input type="text" className="w-100 mb-3 p-1"/>
          <button type='submit' className="w-100 mt-3 p-1">submit</button>
        </form>
      </div>
    </div>  
  </>
 )
}
