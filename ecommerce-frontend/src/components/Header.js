import React from 'react';
import './Header.css';

const Header = () => (
  <>
    <header className="header">
      <div className="menu-icon">
        <img src="/menu-icon.svg" alt="Menu" style={{ width: 30, height: 30 }} />
      </div>
      <nav className="category-menu">
        <ul>
          <li>Electronics</li>
          <li>Fashion</li>
          <li>Home & Kitchen</li>
        </ul>
      </nav>
      <h1 className="logo">Shoppers Paradise</h1>
      <input type="text" placeholder="Search products" className="search-box" />
      <button className="search-button">Search</button>
      <div className="nav-links">
        <span>Sign In</span>
        <span>Orders</span>
        <span>Cart (0)</span>
        <span>Wishlist</span>
        <span>Profile</span>
      </div>
    </header>
  </>
);

export default Header;
