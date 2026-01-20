import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BundlePage from './pages/BundlePage';
import CapabilitiesPage from './pages/CapabilitiesPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Initialize from local storage if needed in future, staying simple for now.

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  const state = { cartItems, isCartOpen, setIsCartOpen, removeFromCart };

  return (
    <Router>
      <ScrollToTop />
      <Layout state={state}>
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/bundle/:id" element={<BundlePage addToCart={addToCart} />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
        </Routes>

        {/* Simple floating link to capabilities for the demo purpose */}
        <div style={{ position: 'fixed', bottom: '1rem', right: '1rem', zIndex: 900 }}>
          <Link to="/capabilities" style={{
            fontSize: '0.8rem',
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            textDecoration: 'none'
          }}>
            ✦ Future Features Demo
          </Link>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
