import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "LuxeStore - Premium Products & Luxury Shopping Experience";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover premium products and luxury shopping at LuxeStore. Curated collections of high-quality items with exceptional service and fast shipping.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;