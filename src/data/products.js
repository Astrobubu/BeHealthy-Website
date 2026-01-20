export const products = [
  {
    id: 1,
    name: "مربى الفراولة الصحي",
    price: 6000,
    description: "طبيعي 100%، بدون سكر مضاف، غني بمضادات الأكسدة.",
    image: "/images/strawberry_jam_product_1768922142469.png",
    category: "مربيات"
  },
  {
    id: 2,
    name: "مربى اليقطين الصحي",
    price: 6000,
    description: "مكونات طبيعية 100%، خالي من أي إضافات صناعية.",
    image: "/images/pumpkin_jam_product_1768922162402.png",
    category: "مربيات"
  },
  {
    id: 3,
    name: "كليجة كيتو (فاخرة)",
    price: 15000,
    description: "طحين لوز، زيت زيتون، وكريمة طبخ. خالية من الغلوتين.",
    image: "/images/keto_kleicha_product_1768922183912.png",
    category: "معجنات"
  },
  {
    id: 'bundle-winter',
    name: "السلة الشتوية الصحية",
    price: 25000,
    oldPrice: 33000,
    description: "عرض خاص! تشكيلة من المنتجات الصحية الخالية من الغلوتين والسكر.",
    image: "/images/winter_bundle_composition.png",
    category: "عروض",
    isBundle: true,
    details: [
      "مربى الفراولة الطبيعي",
      "مربى اليقطين الصحي",
      "كليجة كيتو (طحين اللوز)",
      "تغليف هدية راقي",
      "خصم خاص لفترة محدودة"
    ]
  },
  // Corrected New Products (Mapped from User List)
  {
    id: 4,
    name: "كليجة كيتو", // kalega keto.jpg
    price: 12000,
    description: "طعم عراقي أصيل بمكونات صحية للكيتو.",
    image: "/images/kalega keto.jpg",
    category: "معجنات"
  },
  {
    id: 5,
    name: "كيك كيتو", // keto cake.jpg
    price: 15000,
    description: "كيك اسفنجي خفيف، خالي من السكر والدقيق الأبيض.",
    image: "/images/keto cake.jpg",
    category: "حلويات"
  },
  {
    id: 6,
    name: "صمون دايت", // diet samoon.jpg
    price: 1000,
    description: "صمون شعير صحي، غني بالألياف.",
    image: "/images/diet samoon.jpg",
    category: "مخبوزات"
  },
  {
    id: 7,
    name: "كوكيز دايت", // deit cookies.jpg
    price: 7000,
    description: "مقرمش ولذيذ، مناسب للريجيم ومرضى السكري.",
    image: "/images/deit cookies.jpg",
    category: "حلويات"
  },
  {
    id: 8,
    name: "كب كيك دايت", // cupcake diet.jpg
    price: 3000,
    description: "قطعة حلوى صغيرة صحية بدون حرمان.",
    image: "/images/cupcake diet.jpg",
    category: "حلويات"
  },
  {
    id: 9,
    name: "توست دايت", // toast diet.jpg
    price: 5000,
    description: "شرائح توست مشبعة، مثالية للفطور الصحي.",
    image: "/images/toast diet.jpg",
    category: "مخبوزات"
  },
  {
    id: 10,
    name: "تراب الملوك (دايت)", // trap of kings diet.jpg
    price: 8000,
    description: "حلوى تراب الملوك الشهيرة بنسخة صحية خفيفة.",
    image: "/images/trap of kings diet.jpg",
    category: "حلويات"
  },
  {
    id: 11,
    name: "زبدة الفول السوداني (دايت)", // peanut butter diet.jpg
    price: 6000,
    description: "طبيعية، بروتين عالي، بدون زيوت مضافة.",
    image: "/images/peanut butter diet.jpg",
    category: "مربيات"
  },
  {
    id: 12,
    name: "ميني كيك شوكولاتة", // mini ckae diet chocolate.jpg
    price: 4000,
    description: "عشاق الشوكولاتة، استمتعوا بطعم غني وصحي.",
    image: "/images/mini ckae diet chocolate.jpg",
    category: "حلويات"
  }
];
