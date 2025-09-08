import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useStore } from "@/store/useStore";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";

const Index = () => {
  useEffect(() => {
    document.title = "ShopHub - Premium Products & Modern Shopping";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover premium products and a modern shopping experience at ShopHub. Curated collections of high-quality items with exceptional service and fast shipping.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturedProducts />
        {/* Newsletter CTA */}
        <section className="bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <Card>
              <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Get updates and special offers</h2>
                  <p className="text-muted-foreground">Join our newsletter for exclusive deals and early access.</p>
                </div>
                <form className="flex gap-2 w-full md:w-auto" onSubmit={(e)=>e.preventDefault()}>
                  <input type="email" required className="flex-1 md:w-72 px-4 py-2 rounded-md border border-border bg-background" placeholder="you@example.com" aria-label="Email" />
                  <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground" aria-label="Subscribe">Subscribe</button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;