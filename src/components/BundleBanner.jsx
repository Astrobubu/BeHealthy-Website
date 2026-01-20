import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BundleBanner() {
    const navigate = useNavigate();

    return (
        <div style={{
            background: 'linear-gradient(90deg, #F2E8C6 0%, #FDFBF7 100%)',
            padding: 'var(--spacing-md)',
            borderRadius: 'var(--radius-md)',
            marginBottom: 'var(--spacing-xl)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            cursor: 'pointer',
            border: '1px solid #E5DCC3'
        }} onClick={() => navigate('/bundle/winter')}>
            <div style={{ flex: 1, paddingLeft: '1rem' }}>
                <div style={{
                    display: 'inline-block',
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                }}>
                    عرض خاص
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                    السلة الشتوية الصحية
                </h2>
                <p style={{ color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>
                    تمتع بالعديد من المنتجات الصحية المصنوعة بطحين اللوز.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary-dark)' }}>25,000 د.ع</span>
                    <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '1rem' }}>33,000 د.ع</span>
                </div>
            </div>
            <div style={{ width: '120px', height: '120px', position: 'relative' }}>
                <img
                    src="/images/winter_bundle.png"
                    alt="Winter Bundle"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: '-10px',
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ArrowLeft size={16} />
                </div>
            </div>
        </div>
    );
}
