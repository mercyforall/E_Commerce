import React, { useState } from 'react';
import './CategoryMenu.css';

const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`category-list ${isOpen ? 'show' : ''}`}>
        <li>Electronics</li>
        <li>Fashion</li>
        <li>Home & Kitchen</li>
        <li>Books</li>
        <li>Beauty</li>
      </ul>
    </div>
  );
};

export default CategoryMenu;