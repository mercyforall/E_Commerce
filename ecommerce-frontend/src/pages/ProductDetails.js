import React from 'react';
import './ProductDetails.css';

function ProductDetails() {
  return (
    <div className="product-details">
      <img src="https://via.placeholder.com/250" alt="product" />
      <div className="info">
        <h2>Product Title</h2>
        <p>Description of the product.</p>
        <h3>$99.99</h3>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;