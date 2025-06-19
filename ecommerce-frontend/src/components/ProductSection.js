import React from 'react';
import './ProductSection.css';

const ProductSection = () => {
  const products = [
    { id: 1, title: 'Smartphone', image: 'https://via.placeholder.com/150', price: '$499' },
    { id: 2, title: 'Headphones', image: 'https://via.placeholder.com/150', price: '$89' },
    { id: 3, title: 'Running Shoes', image: 'https://via.placeholder.com/150', price: '$120' },
    { id: 4, title: 'Backpack', image: 'https://via.placeholder.com/150', price: '$45' }
  ];

  return (
    <section className="product-section">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </section>
  );
};

export default ProductSection;