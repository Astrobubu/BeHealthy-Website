import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export default function Header({ cartCount, toggleCart }) {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isCapabilities = location.pathname === '/capabilities';
    const [scrolled, setScrolled] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hide header entirely on Capabilities page
    if (isCapabilities) return null;

    // Determine header style
    const headerStyle = {
        // Transparent at top, Solid White when scrolled.
        background: scrolled
            ? '#FFFFFF'
            : (isHome ? 'transparent' : 'white'),
        padding: 'var(--spacing-sm) 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: scrolled || !isHome ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.4s ease',
        backdropFilter: (scrolled && isHome) ? 'none' : (isHome ? 'none' : 'blur(10px)'),
    };

    return (
        <header style={headerStyle}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid white',
                        boxShadow: 'none'
                    }}>
                        <img src="/images/logo.jpg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <span className="site-title" style={{
                        color: 'var(--color-text)'
                    }}>
                        Be Healthy <span style={{ color: 'var(--color-primary)' }}>Food</span>
                    </span>
                </Link>

                <button
                    onClick={toggleCart}
                    style={{ position: 'relative', padding: '0.5rem' }}
                >
                    <ShoppingBag size={28} color="var(--color-text)" />
                    {cartCount > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            backgroundColor: '#e74c3c',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {cartCount}
                        </span>
                    )}
                </button>
            </div>
        </header>
    );
}
