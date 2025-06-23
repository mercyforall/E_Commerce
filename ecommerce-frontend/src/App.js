import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
// import CategoryMenu from '../components/CategoryMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <CategoryMenu />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;