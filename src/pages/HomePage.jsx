import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import BundleBanner from '../components/BundleBanner';
import { products } from '../data/products';

export default function HomePage({ addToCart }) {
    // Filter out the bundle for the main grid if we want to show it separately, 
    // or keep it. Let's keep it but show the banner first for emphasis.
    const regularProducts = products.filter(p => !p.isBundle);

    return (
        <>
            <Hero />

            <div id="products" className="container">

                <div className="section-title">منتجاتنا المميزة</div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {regularProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))}
                </div>

                <div style={{
                    marginTop: '6rem',
                    position: 'relative',
                    background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
                    color: 'white',
                    padding: '4rem 2rem',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(142, 180, 134, 0.3)'
                }}>
                    {/* Decorative Background Elements */}
                    <div className="floating-icon" style={{ position: 'absolute', top: '-10%', left: '-5%', opacity: 0.1 }}>
                        <svg width="200" height="200" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                    </div>
                    <div className="floating-icon" style={{ position: 'absolute', bottom: '-10%', right: '-5%', opacity: 0.1, animationDelay: '1s' }}>
                        <svg width="200" height="200" viewBox="0 0 24 24" fill="white"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    </div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div
                            style={{
                                display: 'inline-block',
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                padding: '0.5rem 1.5rem',
                                borderRadius: '50px',
                                marginBottom: '1.5rem',
                                backdropFilter: 'blur(5px)',
                                fontSize: '0.9rem',
                                fontWeight: 'bold'
                            }}
                        >
                            🚀 طموحك لا حدود له
                        </div>

                        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.3' }}>
                            نحن شركاؤك في النجاح
                        </h2>

                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem auto', opacity: 0.95, lineHeight: '1.7' }}>
                            هل تفكر في توسيع مشروعك؟ <br />
                            نحن هنا لمساعدتك في بناء علامة تجارية قوية، تفعيل الاشتراكات الشهرية، وتقديم منتجات رقمية تزيد من أرباحك.
                        </p>

                        <button
                            onClick={() => window.location.href = '/capabilities'}
                            className="btn pulse-animation"
                            style={{
                                backgroundColor: 'white',
                                color: 'var(--color-primary-dark)',
                                padding: '1.2rem 2.5rem',
                                fontSize: '1.2rem',
                                fontWeight: '900',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            اكتشف آفاق التوسع
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
