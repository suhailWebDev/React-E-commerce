import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo 1.png';
import {FiShoppingCart} from 'react-icons/fi';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex flex-lg-row flex-sm-column align-items-center">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={logo} alt='logo' className='logo'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
      <ul className="mb-lg-0 mb-sm-0 d-flex align-items-center gap-4 navbar-list ms-auto p-2">
        <li className="nav-item">
          <Link className="nav-link active list-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link list-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to='/products' className="nav-link list-link">Products</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' className="nav-link list-link">Contact</Link>
        </li>
        <li>
            <button className='btn' id='btn-login'>Log In</button>
        </li>
        <li>
        <Link to='/cart' className='cart-trolley-link'><FiShoppingCart name="cart" className='cart-trolley'/><span className='cart-total-items'>0</span></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
