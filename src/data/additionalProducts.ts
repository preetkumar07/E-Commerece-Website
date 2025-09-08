import type { Product } from '@/data/mockData';

// 20 additional products across Electronics, Clothing, Home, Books/Entertainment
export const additionalProducts: Product[] = [
  {
    id: '101',
    name: '4K Ultra HD Smart TV 55-inch',
    price: 499.99,
    originalPrice: 649.99,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.6,
    reviews: 312,
    description: 'Experience breathtaking clarity with this 55-inch 4K Ultra HD Smart TV. Enjoy vivid colors, deep contrast, and fluid motion thanks to HDR10 and a 120Hz panel. Built-in streaming apps and voice control make it effortless to dive into your favorite content. Slim bezels and a minimalist stand fit seamlessly into any living space.',
    category: 'electronics',
    brand: 'VisionMax',
    inStock: true,
    stockCount: 28,
    isSale: true,
    features: ['4K UHD', 'HDR10', '120Hz Panel', 'Voice Control'],
    specifications: { Size: '55-inch', Resolution: '3840x2160', HDMI: '4 Ports' }
  },
  {
    id: '103',
    name: 'Ergonomic Mechanical Keyboard',
    price: 109.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555532538-dcdbd01d373d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.7,
    reviews: 154,
    description: 'Type in comfort with a split ergonomic layout, hot-swappable switches, and per-key RGB. The durable aluminum frame and double-shot PBT keycaps ensure long-lasting performance for work and play.',
    category: 'electronics',
    brand: 'KeyCraft',
    inStock: true,
    stockCount: 35,
    features: ['Hot-swappable', 'PBT Keycaps', 'Per-key RGB', 'Aluminum Frame'],
    specifications: { Layout: '75%', Connection: 'USB-C, BT 5.1' }
  },
  {
    id: '105',
    name: 'Premium Grey Shirts',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.5,
    reviews: 210,
    description: 'Classic premium grey shirts crafted from soft, breathable cotton. Tailored fit with durable stitching for everyday comfort and style.',
    category: 'fashion',
    brand: 'WearWell',
    inStock: true,
    stockCount: 70,
    features: ['100% Cotton', 'Tailored Fit', 'Breathable'],
    specifications: { Sizes: 'S-XXL', Color: 'Grey' }
  },

  // Clothing / Fashion
  {
    id: '201',
    name: 'Classic Cotton T-Shirt',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975922322-170b4e30d6d5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.6,
    reviews: 530,
    description: 'A breathable, soft cotton tee designed for everyday comfort. Pre-shrunk fabric maintains its fit wash after wash. Available in versatile neutrals and seasonal colors.',
    category: 'fashion',
    brand: 'WearWell',
    inStock: true,
    stockCount: 120,
    features: ['100% Cotton', 'Pre-shrunk', 'Breathable'],
    specifications: { Fit: 'Regular', Sizes: 'S-XXL' }
  },
  {
    id: '202',
    name: 'Premium Shirts',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1520975922322-170b4e30d6d5?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1520975922322-170b4e30d6d5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.5,
    reviews: 260,
    description: 'Premium shirts with a versatile fit and breathable cotton for daily wear. Durable seams and classic styling pair with everything in your wardrobe.',
    category: 'fashion',
    brand: 'WearWell',
    inStock: true,
    stockCount: 75,
    features: ['Breathable Cotton', 'Durable Seams'],
    specifications: { Fit: 'Regular', Sizes: 'S-XXL' }
  },
  {
    id: '203',
    name: 'Lightweight Running Jacket',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.4,
    reviews: 143,
    description: 'Stay agile with this wind-resistant, water-repellent running jacket. Reflective accents enhance visibility, while zip pockets secure your essentials on the go.',
    category: 'fashion',
    brand: 'AeroFit',
    inStock: true,
    stockCount: 50,
    features: ['Wind-resistant', 'Water-repellent', 'Reflective Accents'],
    specifications: { Material: 'Polyester', Pockets: '2 Zipped' }
  },
  {
    id: '204',
    name: 'Leather Chelsea Boots',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518882571876-0010e1d2b7a0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520975922322-170b4e30d6d5?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.7,
    reviews: 98,
    description: 'Premium full-grain leather Chelsea boots with durable rubber soles for everyday wear. Elastic side panels and pull tabs make them easy to slip on and off.',
    category: 'fashion',
    brand: 'Stride',
    inStock: true,
    stockCount: 34,
    features: ['Full-grain Leather', 'Rubber Sole'],
    specifications: { Lining: 'Leather', Heel: '3 cm' }
  },
  {
    id: '205',
    name: 'Cashmere Blend Scarf',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviews: 77,
    description: 'A luxuriously soft scarf woven from a cashmere blend to provide lightweight warmth. Timeless design elevates both casual and formal outfits.',
    category: 'accessories',
    brand: 'NorthWeave',
    inStock: true,
    stockCount: 90,
    features: ['Cashmere Blend', 'Lightweight Warmth'],
    specifications: { Dimensions: '180 x 30 cm' }
  },

  // Home Goods
  {
    id: '304',
    name: 'Aromatherapy Diffuser',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1542451313056-b7c8e626645f?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542451313056-b7c8e626645f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518057111178-044c29d0a718?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.3,
    reviews: 250,
    description: 'Create a calming atmosphere with this ultrasonic aroma diffuser. Multiple mist modes and soft ambient lighting turn your space into a relaxing retreat.',
    category: 'home',
    brand: 'ZenMist',
    inStock: true,
    stockCount: 100,
    features: ['Ultrasonic', 'Ambient Light'],
    specifications: { Capacity: '300 ml', Timer: '1/3/6h' }
  },

  // Books / Entertainment
  {
    id: '401',
    name: 'Bestselling Thriller Novel',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.5,
    reviews: 980,
    description: 'A gripping page-turner filled with unexpected twists and unforgettable characters. Perfect for weekend reading and book club discussions.',
    category: 'books',
    brand: 'PageTurner',
    inStock: true,
    stockCount: 200,
    features: ['Paperback', '320 pages'],
    specifications: { ISBN: '978-1-23456-789-0' }
  },
  {
    id: '402',
    name: 'Illustrated Cookbook',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviews: 410,
    description: 'Discover 120 delicious, foolproof recipes accompanied by step-by-step photos. Includes vegetarian, vegan, and gluten-free options for every occasion.',
    category: 'books',
    brand: 'KitchenJoy',
    inStock: true,
    stockCount: 120,
    features: ['Hardcover', 'Photos Included'],
    specifications: { Pages: '280', Format: 'Hardcover' }
  },
  {
    id: '403',
    name: 'Beginner Acoustic Guitar',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511379938547-9b6404f0b5c5?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.4,
    reviews: 260,
    description: 'Start your musical journey with a full-size acoustic guitar featuring a spruce top for rich tone and smooth playability. Includes padded gig bag and picks.',
    category: 'entertainment',
    brand: 'HarmonyWorks',
    inStock: true,
    stockCount: 42,
    features: ['Spruce Top', 'Gig Bag Included'],
    specifications: { Scale: '25.5"', Strings: 'Steel' }
  },
  {
    id: '405',
    name: 'Streaming Media Player (4K)',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587206668283-c7f3e3b04b1c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1200&auto=format&fit=crop'
    ],
    rating: 4.6,
    reviews: 600,
    description: 'Bring your TV to life with fast, fluid 4K streaming. Dolby Vision and dual-band Wi‑Fi deliver stunning visuals and reliable performance for your favorite apps.',
    category: 'entertainment',
    brand: 'StreamPro',
    inStock: true,
    stockCount: 85,
    features: ['4K HDR', 'Dual-band Wi‑Fi'],
    specifications: { Port: 'HDMI 2.1', Storage: '8GB' }
  }
];


