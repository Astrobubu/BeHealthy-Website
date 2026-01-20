import React, { useMemo } from 'react';
import { X, Trash2, MessageCircle } from 'lucide-react';

export default function Cart({ isOpen, onClose, cartItems, removeFromCart }) {
    const total = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + item.price, 0);
    }, [cartItems]);

    const handleWhatsAppOrder = () => {
        if (cartItems.length === 0) return;

        const phoneNumber = "9647858354118";
        let message = "مرحباً، أود طلب المنتجات التالية:\n\n";

        // Group items by name to show quantities
        const groupedItems = cartItems.reduce((acc, item) => {
            acc[item.name] = (acc[item.name] || 0) + 1;
            return acc;
        }, {});

        Object.entries(groupedItems).forEach(([name, quantity]) => {
            message += `- ${name} (x${quantity})\n`;
        });

        message += `\nالمجموع الكلي: ${total.toLocaleString()} د.ع`;
        message += "\n\nشكراً!";

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    opacity: isOpen ? 1 : 0,
                    visibility: isOpen ? 'visible' : 'hidden',
                    transition: 'all 0.3s',
                    zIndex: 998
                }}
            />

            {/* Cart Sidebar */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0, // RTL layout, drawer comes from left
                bottom: 0,
                width: '100%',
                maxWidth: '400px',
                backgroundColor: 'var(--color-white)',
                boxShadow: '2px 0 20px rgba(0,0,0,0.1)',
                zIndex: 999,
                transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ padding: 'var(--spacing-md)', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>سلة المشتريات</h2>
                    <button onClick={onClose} style={{ padding: '0.5rem' }}>
                        <X size={24} />
                    </button>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--spacing-md)' }}>
                    {cartItems.length === 0 ? (
                        <div style={{ textAlign: 'center', color: 'var(--color-text-light)', marginTop: '2rem' }}>
                            <p>السلة فارغة حالياً</p>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {cartItems.map((item, index) => (
                                <div key={index} style={{ display: 'flex', gap: '1rem', alignItems: 'center', backgroundColor: '#fafafa', padding: '0.5rem', borderRadius: 'var(--radius-sm)' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }} />
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{item.name}</h4>
                                        <p style={{ color: 'var(--color-primary-dark)', fontWeight: 'bold' }}>{item.price.toLocaleString()} د.ع</p>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(index)}
                                        style={{ color: '#e74c3c', padding: '0.5rem' }}
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div style={{ padding: 'var(--spacing-md)', borderTop: '1px solid #eee', backgroundColor: '#fafafa' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        <span>المجموع:</span>
                        <span>{total.toLocaleString()} د.ع</span>
                    </div>
                    <button
                        onClick={handleWhatsAppOrder}
                        disabled={cartItems.length === 0}
                        className="btn"
                        style={{
                            width: '100%',
                            backgroundColor: '#25D366',
                            color: 'white',
                            opacity: cartItems.length === 0 ? 0.7 : 1,
                            cursor: cartItems.length === 0 ? 'not-allowed' : 'pointer'
                        }}
                    >
                        <MessageCircle size={20} />
                        إرسال الطلب عبر واتساب
                    </button>
                </div>
            </div>
        </>
    );
}
