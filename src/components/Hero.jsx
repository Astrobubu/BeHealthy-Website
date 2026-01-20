import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section style={{
            marginBottom: 'var(--spacing-xl)',
            borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: '#FDFBF7',
            marginTop: '-80px',
            paddingTop: '100px'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '3rem 0',
                flexWrap: 'wrap-reverse',
                gap: '2rem'
            }}>
                {/* Content Side */}
                <div style={{ flex: 1, minWidth: '300px', textAlign: 'right' }}>
                    <div style={{
                        display: 'inline-block',
                        backgroundColor: '#FF6B6B',
                        color: 'white',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        fontWeight: 'bold',
                        marginBottom: '1.5rem',
                        fontSize: '0.9rem'
                    }}>
                        🌟 عرض الموسم المميز
                    </div>
                    <h1 style={{
                        fontSize: '3.5rem',
                        color: 'var(--color-primary-dark)',
                        marginBottom: '1rem',
                        fontWeight: '900',
                        lineHeight: '1.2'
                    }}>
                        السلة الشتوية <br />
                        <span style={{ color: 'var(--color-text)' }}>الصحية</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-light)',
                        maxWidth: '500px',
                        marginBottom: '2rem',
                        lineHeight: '1.6',
                        marginLeft: 'auto' // Since RTL, margin-left pushes it if we want alignment, but default block is fine.
                    }}>
                        استمتع بدفء الشتاء مع تشكيلتنا المختارة من المربيات الطبيعية وكليجة الكيتو الهشة. صحتك هي أولويتنا.
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <span style={{ fontSize: '1rem', color: '#999', textDecoration: 'line-through', display: 'block', marginBottom: '-5px' }}>33,000 د.ع</span>
                            <span style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--color-text)' }}>25,000 د.ع</span>
                        </div>
                        <button
                            onClick={() => navigate('/bundle/winter')}
                            className="btn btn-primary"
                            style={{
                                padding: '1rem 2rem',
                                fontSize: '1.1rem',
                                boxShadow: '0 8px 20px rgba(142, 180, 134, 0.4)'
                            }}
                        >
                            <ShoppingBag size={20} />
                            اطلب العرض الآن
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}></div>
                            خالي من السكر
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}></div>
                            خالي من الغلوتين
                        </div>
                    </div>
                </div>

                {/* Image Side */}
                <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '500px',
                        aspectRatio: '1/1',
                        borderRadius: '50%',
                        backgroundColor: '#F2E8C6',
                        padding: '1rem'
                    }}>
                        <img
                            src="/images/winter_bundle_composition.png"
                            alt="Winter Bundle Gift Basket"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                transform: 'rotate(-5deg)'
                            }}
                        />
                        {/* Decorative Elements */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '0',
                            backgroundColor: 'white',
                            padding: '1rem',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                            fontWeight: 'bold',
                            color: 'var(--color-primary-dark)'
                        }}>
                            ✨ الأكثر طلباً
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
