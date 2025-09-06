// Mock data for the e-commerce website
import watchImage from "@/assets/products/watch-luxury.jpg";
import headphonesImage from "@/assets/products/headphones-wireless.jpg";
import handbagImage from "@/assets/products/handbag-leather.jpg";
import lampImage from "@/assets/products/lamp-desk.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  rating: number;
  reviews: number;
  description: string;
  category: string;
  brand: string;
  inStock: boolean;
  stockCount: number;
  isNew?: boolean;
  isSale?: boolean;
  features?: string[];
  specifications?: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  addresses: Address[];
  orders: Order[];
}

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Order {
  id: string;
  items: (CartItem & { product: Product })[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: Address;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Luxury Watch",
    price: 299.99,
    originalPrice: 399.99,
    image: watchImage,
    images: [watchImage, watchImage, watchImage],
    rating: 4.8,
    reviews: 124,
    description: "Crafted with precision and elegance, this premium luxury watch combines timeless design with modern functionality. Features Swiss movement, sapphire crystal, and waterproof construction.",
    category: "accessories",
    brand: "LuxeTime",
    inStock: true,
    stockCount: 15,
    isSale: true,
    features: ["Swiss Movement", "Sapphire Crystal", "Water Resistant", "Premium Leather Band"],
    specifications: {
      "Movement": "Swiss Automatic",
      "Case Material": "Stainless Steel",
      "Water Resistance": "100m",
      "Warranty": "2 Years"
    }
  },
  {
    id: "2",
    name: "Wireless Premium Headphones",
    price: 199.99,
    image: headphonesImage,
    images: [headphonesImage, headphonesImage, headphonesImage],
    rating: 4.9,
    reviews: 89,
    description: "Experience crystal-clear audio with these premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort design.",
    category: "electronics",
    brand: "AudioPro",
    inStock: true,
    stockCount: 25,
    isNew: true,
    features: ["Active Noise Cancellation", "30h Battery Life", "Quick Charge", "Premium Comfort"],
    specifications: {
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      "Weight": "250g",
      "Connectivity": "Bluetooth 5.0"
    }
  },
  {
    id: "3",
    name: "Luxury Leather Handbag",
    price: 249.99,
    originalPrice: 329.99,
    image: handbagImage,
    images: [handbagImage, handbagImage, handbagImage],
    rating: 4.7,
    reviews: 156,
    description: "Elegant and sophisticated, this luxury leather handbag is perfect for any occasion. Crafted from genuine Italian leather with premium hardware and spacious interior.",
    category: "fashion",
    brand: "LuxeBags",
    inStock: true,
    stockCount: 8,
    isSale: true,
    features: ["Genuine Italian Leather", "Premium Hardware", "Multiple Compartments", "Dust Bag Included"],
    specifications: {
      "Material": "Italian Leather",
      "Dimensions": "35x25x12 cm",
      "Weight": "800g",
      "Color Options": "Black, Brown, Navy"
    }
  },
  {
    id: "4",
    name: "Modern Desk Lamp",
    price: 79.99,
    image: lampImage,
    images: [lampImage, lampImage, lampImage],
    rating: 4.6,
    reviews: 73,
    description: "Illuminate your workspace with this sleek modern desk lamp. Features adjustable brightness, USB charging port, and minimalist design that complements any decor.",
    category: "home",
    brand: "ModernLight",
    inStock: true,
    stockCount: 32,
    isNew: true,
    features: ["Adjustable Brightness", "USB Charging Port", "Touch Control", "Energy Efficient LED"],
    specifications: {
      "Light Type": "LED",
      "Power": "12W",
      "USB Output": "5V/1A",
      "Material": "Aluminum Alloy"
    }
  },
  // Additional products for a fuller catalog
  {
    id: "5",
    name: "Smart Fitness Tracker",
    price: 149.99,
    image: watchImage,
    rating: 4.5,
    reviews: 203,
    description: "Track your fitness goals with this advanced smart fitness tracker. Features heart rate monitoring, GPS, sleep tracking, and 7-day battery life.",
    category: "electronics",
    brand: "FitTech",
    inStock: true,
    stockCount: 45,
    features: ["Heart Rate Monitor", "GPS Tracking", "Sleep Analysis", "7-Day Battery"],
    specifications: {
      "Battery Life": "7 days",
      "Display": "1.4 inch AMOLED",
      "Water Rating": "5ATM",
      "Sensors": "Heart Rate, GPS, Accelerometer"
    }
  },
  {
    id: "6",
    name: "Premium Coffee Maker",
    price: 299.99,
    originalPrice: 349.99,
    image: lampImage,
    rating: 4.8,
    reviews: 167,
    description: "Brew the perfect cup every time with this premium coffee maker. Features programmable settings, thermal carafe, and built-in grinder.",
    category: "home",
    brand: "BrewMaster",
    inStock: true,
    stockCount: 12,
    isSale: true,
    features: ["Built-in Grinder", "Programmable", "Thermal Carafe", "Auto Clean"],
    specifications: {
      "Capacity": "12 cups",
      "Grinder": "Conical Burr",
      "Material": "Stainless Steel",
      "Warranty": "3 Years"
    }
  }
];

export const mockCategories: Category[] = [
  { id: "electronics", name: "Electronics", image: headphonesImage, productCount: 2 },
  { id: "fashion", name: "Fashion", image: handbagImage, productCount: 1 },
  { id: "accessories", name: "Accessories", image: watchImage, productCount: 1 },
  { id: "home", name: "Home & Living", image: lampImage, productCount: 2 }
];

export const mockReviews = [
  {
    id: "1",
    productId: "1",
    userId: "user1",
    userName: "John Doe",
    rating: 5,
    comment: "Absolutely love this watch! Great quality and elegant design.",
    date: "2024-01-15",
    verified: true
  },
  {
    id: "2",
    productId: "1",
    userId: "user2",
    userName: "Sarah Wilson",
    rating: 4,
    comment: "Beautiful watch, exactly as described. Fast shipping too!",
    date: "2024-01-10",
    verified: true
  }
];