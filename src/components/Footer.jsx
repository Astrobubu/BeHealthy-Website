import React from 'react';

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: 'var(--color-text)',
            color: 'var(--color-white)',
            padding: 'var(--spacing-xl) 0',
            marginTop: 'var(--spacing-xl)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>بي هيلثي فود</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 'var(--spacing-lg)', maxWidth: '500px', margin: '0 auto 2rem auto' }}>
                    نقدم لكم أفضل المنتجات الصحية والطبيعية، مصنوعة بحب وعناية لتناسب نظامكم الغذائي.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <a href="#" style={{ opacity: 0.8 }}>عن المتجر</a>
                    <a href="#" style={{ opacity: 0.8 }}>سياسة الخصوصية</a>
                    <a href="#" style={{ opacity: 0.8 }}>تواصل معنا</a>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
                    © {new Date().getFullYear()} Be Healthy Food. جميع الحقوق محفوظة.
                </div>
            </div>
        </footer>
    );
}
