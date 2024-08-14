'use client'
import React from 'react'
import {FaCartPlus} from 'react-icons/fa'
import Link from 'next/link'
import { useCart } from 'react-use-cart'
function Navbar() {
  const {totalUniqueItems}=useCart()
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">
        Shopping Cart
        </a>
    <button 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNav" 
    aria-controls="navbarNav" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className=" navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <Link href='/cart' legacyBehavior>
  <a className="nav-link active" aria-current="page">
    <button className='btn btn-primary rounded-0 position-relative' >
      <FaCartPlus className='mb-1'/>
      <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning'>{totalUniqueItems}</span>
    </button>
  </a>
</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar