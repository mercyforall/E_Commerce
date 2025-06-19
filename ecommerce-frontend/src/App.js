import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/header';
import Banner from './components/Banner';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;