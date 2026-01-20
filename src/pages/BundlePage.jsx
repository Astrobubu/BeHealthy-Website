import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Check, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';

export default function BundlePage({ addToCart }) {
    const { id } = useParams();
    const navigate = useNavigate();
    // In a real app we'd find by ID. Here we assume 'winter' maps to our bundle product.
    const bundle = products.find(p => p.id === 'bundle-winter');

    if (!bundle) return <div>العرض غير موجود</div>;

    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <button
                onClick={() => navigate('/')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-text-light)' }}
            >
                <ArrowRight size={20} />
                العودة للرئيسية
            </button>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'start'
            }}>
                {/* Image Side */}
                <div style={{
                    position: 'sticky',
                    top: '100px',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                    <img src={bundle.image} alt={bundle.name} style={{ width: '100%', display: 'block' }} />
                </div>

                {/* Details Side */}
                <div>
                    <div style={{
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                    }}>
                        عرض خاص لفترة محدودة
                    </div>

                    <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>
                        {bundle.name}
                    </h1>

                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text)', marginBottom: '2rem', lineHeight: '1.8' }}>
                        {bundle.description}
                    </p>

                    <div style={{
                        backgroundColor: 'var(--color-secondary)',
                        padding: '2rem',
                        borderRadius: 'var(--radius-md)',
                        marginBottom: '2rem',
                        border: '2px solid rgba(142, 180, 134, 0.2)'
                    }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>ماذا تحتوي السلة؟</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {bundle.details.map((item, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ backgroundColor: 'var(--color-primary)', borderRadius: '50%', padding: '2px' }}>
                                        <Check size={16} color="white" />
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                        <div>
                            <div style={{ fontSize: '0.9rem', color: '#999', textDecoration: 'line-through' }}>{bundle.oldPrice.toLocaleString()} د.ع</div>
                            <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-text)' }}>{bundle.price.toLocaleString()} <span style={{ fontSize: '1rem' }}>د.ع</span></div>
                        </div>
                    </div>

                    <button
                        onClick={() => addToCart(bundle)}
                        className="btn btn-primary"
                        style={{
                            width: '100%',
                            padding: '1.25rem',
                            fontSize: '1.2rem',
                            boxShadow: '0 10px 20px rgba(142, 180, 134, 0.4)'
                        }}
                    >
                        <ShoppingBag size={24} />
                        إضافة السلة للطلب
                    </button>
                </div>
            </div>
        </div>
    );
}
