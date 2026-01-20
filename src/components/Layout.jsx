import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import Cart from './Cart';

export default function Layout({ children, state }) {
    const { cartItems, isCartOpen, setIsCartOpen, removeFromCart } = state;

    return (
        <div className="app">
            <Header
                cartCount={cartItems.length}
                toggleCart={() => setIsCartOpen(!isCartOpen)}
            />

            <main style={{ minHeight: '80vh' }}>
                {children}
            </main>

            <Footer />


            <Cart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
            />
        </div>
    );
}
