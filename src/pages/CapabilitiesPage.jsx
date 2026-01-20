import React from 'react';
import { ArrowRight, Box, Video, BookOpen, TrendingUp, Instagram, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CapabilitiesPage() {
    const navigate = useNavigate();

    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <button
                onClick={() => navigate('/')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--color-text-light)' }}
            >
                <ArrowRight size={20} />
                العودة للرئيسية
            </button>

            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-text)', marginBottom: '1rem' }}>
                    تطوير <span style={{ color: 'var(--color-primary)' }}>نموذج العمل</span>
                </h1>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
                    لا يقتصر دورنا على بناء موقع إلكتروني، بل نساعدك في توسيع نطاق عملك من خلال استراتيجيات ونماذج عمل مبتكرة.
                    <br />
                    <span style={{ fontWeight: 'bold', color: 'var(--color-primary-dark)' }}>نحن نساعدك في إنشاء كل هذا، وأنت عليك فقط التحقق والموافقة!</span>
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

                {/* Model 1: Subscription Boxes */}
                <div style={{
                    background: 'linear-gradient(135deg, #e8f5e9 0%, #fff 100%)', // Pistachio Tint
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.05)',
                }}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: '#c8e6c9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#2e7d32' }}>
                        <Box size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1b5e20' }}>صناديق الاشتراك الشهري</h3>
                    <p style={{ color: '#444', marginBottom: '1.5rem' }}>
                        نموذج دخل متكرر يضمن ولاء العملاء. يمكننا تفعيل اشتراكات شهرية للصناديق المنسقة:
                    </p>
                    <ul style={{ listStyle: 'disc', marginRight: '1.5rem', color: '#555', marginBottom: '1rem' }}>
                        <li><strong>صندوق المؤونة الصحية:</strong> أساسيات شهرية خالية من السكر.</li>
                        <li><strong>مغامرة المربى:</strong> نكهات حصرية جديدة كل شهر مع بطاقات وصفات.</li>
                    </ul>
                </div>

                {/* Model 2: Content Marketing & Personal Branding */}
                <div style={{
                    background: 'linear-gradient(135deg, #fce4ec 0%, #fff 100%)', // Pink Tint
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.05)',
                }}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: '#f8bbd0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#c2185b' }}>
                        <Instagram size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#880e4f' }}>استراتيجية المحتوى والتسويق</h3>
                    <p style={{ color: '#444', marginBottom: '1.5rem' }}>
                        الناس يشترون القصص لا المنتجات فقط. نقدم لك أدلة وخطط تسويقية لتحويل متجرك إلى علامة تجارية شخصية قوية:
                    </p>
                    <ul style={{ listStyle: 'disc', marginRight: '1.5rem', color: '#555', marginBottom: '1rem' }}>
                        <li>كيف تشارك قصة بدايتك لزيادة التفاعل.</li>
                        <li>قوالب جاهزة لقصص (Stories) وريلز (Reels) انستغرام.</li>
                        <li>جدول نشر أسبوعي لزيادة المتابعين.</li>
                    </ul>
                </div>

                {/* Model 3: Workshops & Community */}
                <div style={{
                    background: 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)', // Blue Tint
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.05)',
                }}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: '#bbdefb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#1565c0' }}>
                        <Video size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#0d47a1' }}>ورش العمل والتعليم</h3>
                    <p style={{ color: '#444', marginBottom: '1.5rem' }}>
                        تحويل الخبرة إلى مصدر دخل إضافي وبناء مجتمع نشط حول العلامة التجارية:
                    </p>
                    <ul style={{ listStyle: 'disc', marginRight: '1.5rem', color: '#555', marginBottom: '1rem' }}>
                        <li>بث مباشر مدفوع: "كيف تبدأ مشروع المربى الخاص بك".</li>
                        <li>جلسات تفاعلية للإجابة على أسئلة المتابعين.</li>
                    </ul>
                </div>

                {/* Model 4: Digital Products */}
                <div style={{
                    background: 'linear-gradient(135deg, #fff3e0 0%, #fff 100%)', // Orange Tint
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.05)',
                }}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: '#ffe0b2', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#ef6c00' }}>
                        <BookOpen size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#e65100' }}>المنتجات الرقمية</h3>
                    <p style={{ color: '#444', marginBottom: '1.5rem' }}>
                        بيع المعرفة كمنتجات قابلة للتنزيل، مما يوفر دخلاً سلبياً مستمراً:
                    </p>
                    <ul style={{ listStyle: 'disc', marginRight: '1.5rem', color: '#555', marginBottom: '1rem' }}>
                        <li><strong>كتاب إلكتروني:</strong> "15 وصفة مربى صحية منزلية".</li>
                        <li><strong>دليل العائلة:</strong> بدائل السكر والوجبات الخفيفة الصحية للأطفال.</li>
                        <li><strong>دليل الوجبات:</strong> تحضير وجبات أسبوعية بمكونات طبيعية.</li>
                    </ul>
                </div>

                {/* Model 5: Ingredient Kits */}
                <div style={{
                    background: 'linear-gradient(135deg, #f3e5f5 0%, #fff 100%)', // Purple Tint
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.05)',
                }}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: '#e1bee7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#7b1fa2' }}>
                        <ShoppingBag size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#4a148c' }}>توصيل المكونات الطازجة</h3>
                    <p style={{ color: '#444', marginBottom: '1.5rem' }}>
                        توفير عناء التسوق على العملاء من خلال تجهيز وتوصيل مكونات وصفات محددة:
                    </p>
                    <ul style={{ listStyle: 'disc', marginRight: '1.5rem', color: '#555', marginBottom: '1rem' }}>
                        <li>بوكس مكونات "كليجة الكيتو" (طحين لوز، محلي، مكسرات) بالمقادير الدقيقة.</li>
                        <li>تسهيل تجربة الطبخ الصحي في المنزل.</li>
                    </ul>
                </div>

                {/* Technical Features Summary */}
                <div style={{
                    backgroundColor: '#333',
                    color: 'white',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    border: '2px dashed #555',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <div style={{ marginBottom: '1rem', color: '#4caf50' }}>
                        <TrendingUp size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>الميزات التقنية الداعمة</h3>
                    <p style={{ color: '#ccc', fontSize: '0.95rem' }}>
                        نحن نوفر لك البنية التحتية التقنية الكاملة لهذه التوسعات:
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'grid', gap: '0.5rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ بوابة دفع إلكتروني</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ لوحة تحكم لإدارة الاشتراكات</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ نظام تحميل الملفات الرقمية</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>✅ أتمتة رسائل التسويق</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
