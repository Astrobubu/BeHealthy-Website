import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function ProductCard({ product, addToCart }) {
    return (
        <div
            className="product-card"
            style={{
                backgroundColor: 'white',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                border: '1px solid #f0f0f0',
                position: 'relative' // Needed for overlay
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.1)';
                // Show Overlay
                const overlay = e.currentTarget.querySelector('.product-info-overlay');
                if (overlay) overlay.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                // Hide Overlay
                const overlay = e.currentTarget.querySelector('.product-info-overlay');
                if (overlay) overlay.style.opacity = '0';
            }}
        >
            <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '75%' /* Aspect Ratio 4:3 */ }}>
                <img
                    src={product.image}
                    alt={product.name}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />

                {/* INFO OVERLAY - FADE IN ONLY (No Slide) */}
                <div
                    className="product-info-overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '1rem',
                        opacity: 0, // Hidden by default
                        transition: 'opacity 0.3s ease', // Simple Fade
                        pointerEvents: 'none' // Let clicks pass through if needed, though mostly visual
                    }}
                >
                    <p style={{ fontSize: '1rem', lineHeight: '1.5', fontWeight: 'bold' }}>
                        {product.description}
                    </p>
                </div>
            </div>

            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: '0.9rem', color: '#999', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {product.category}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                    {product.name}
                </h3>

                {/* Description removed from body to be in overlay, or we can keep a short snippet? 
            User said "hover shows me details". So maybe keep body clean. 
            Let's keep price and button very clear. */}

                <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <div style={{ fontWeight: '900', fontSize: '1.3rem', color: 'var(--color-primary-dark)' }}>
                        {product.price.toLocaleString()} د.ع
                    </div>
                    <button
                        onClick={() => addToCart(product)}
                        className="btn"
                        style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            padding: '0.6rem 1rem',
                            borderRadius: 'var(--radius-full)',
                            border: 'none',
                            transition: 'all 0.2s',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 10px rgba(142, 180, 134, 0.4)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        <ShoppingBag size={18} />
                        إضافة
                    </button>
                </div>
            </div>
        </div>
    );
}
