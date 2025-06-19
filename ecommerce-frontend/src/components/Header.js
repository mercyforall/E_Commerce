import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1 className="logo">ShopLikeAmazon</h1>
    <input type="text" placeholder="Search products" className="search-box" />
    <div className="nav-links">
      <span>Sign In</span>
      <span>Orders</span>
      <span>Cart (0)</span>
    </div>
  </header>
);

export default Header;
