import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import product images
import watchImage from "@/assets/products/watch-luxury.jpg";
import headphonesImage from "@/assets/products/headphones-wireless.jpg";
import handbagImage from "@/assets/products/handbag-leather.jpg";
import lampImage from "@/assets/products/lamp-desk.jpg";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Premium Luxury Watch",
      price: 299.99,
      originalPrice: 399.99,
      image: watchImage,
      rating: 4.8,
      reviews: 124,
      isSale: true,
    },
    {
      id: "2",
      name: "Wireless Premium Headphones",
      price: 199.99,
      image: headphonesImage,
      rating: 4.9,
      reviews: 89,
      isNew: true,
    },
    {
      id: "3",
      name: "Luxury Leather Handbag",
      price: 249.99,
      originalPrice: 329.99,
      image: handbagImage,
      rating: 4.7,
      reviews: 156,
      isSale: true,
    },
    {
      id: "4",
      name: "Modern Desk Lamp",
      price: 79.99,
      image: lampImage,
      rating: 4.6,
      reviews: 73,
      isNew: true,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-surface">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium products, 
            carefully curated for quality and style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              className="animate-fade-up"
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Products
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;