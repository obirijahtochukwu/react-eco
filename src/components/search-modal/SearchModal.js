import React from 'react';
import { FaArrowLeft, FaSistrix } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
import { Link } from "react-router-dom";
import './SearchModal.css';

export default function SearchModal() {
 const {  searchModal, setSearchModal, handleChange, filteredItems, searchShow, name, edit, mapFilteredItems} = useGlobalContext();

 function searchList() {
  if (searchShow) {
   return (
    <div>
      {filteredItems.map((oppo)=>{
      const {id, title} = oppo;
       return (
        <div className='d-flex align-items-center suggestions'>
              <Link to='/searchitems'>
                <FaSistrix className='m-2'/>
                <span key={id} onClick={()=> edit(id)}>{title}</span>
              </Link>
              </div>
       )
     })}
    </div>
   )
  }
 }
 
 return (
  <div className={searchModal ? " search-modal show-modal d-md-none" : "search-modal"}>
    <div className="row modal-search-bar">
      <div className="col-12 d-flex align-items-center">
        <FaArrowLeft onClick={()=> setSearchModal(false)} className='modal-icon ml-0'/>
        <input type="text" value={name} onChange={handleChange} placeholder='Search products...' className="modal-input w-100"/>
        <Link to='/searchitems'>
          <FaSistrix className='modal-icon' onClick={mapFilteredItems}/>
        </Link>
      </div>
    </div>
    {searchList()}
  </div>
 )
}
