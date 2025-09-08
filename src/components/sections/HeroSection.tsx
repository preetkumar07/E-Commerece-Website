import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const features = [
    {
      icon: Shield,
      text: "Secure Payment"
    },
    {
      icon: Truck,
      text: "Free Shipping"
    },
    {
      icon: Star,
      text: "Premium Quality"
    }
  ];

  const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "1000+", label: "Premium Products" },
    { value: "99%", label: "Satisfaction Rate" }
  ];

  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Luxury shopping experience"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full text-accent-foreground mb-6 animate-fade-up">
              <Star className="h-4 w-4 mr-2 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">Trusted by 50,000+ customers</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up">
              Discover
              <span className="block text-gradient bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
                Premium Products
              </span>
              for Your Lifestyle
            </h1>

            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-slide-left">
              Experience luxury shopping like never before. Curated collections of premium products 
              with unmatched quality and exceptional service.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => navigate('/shop')}
                aria-label="Shop now"
              >
                Shop Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-background/80 text-foreground border border-border hover:bg-background backdrop-blur"
                onClick={() => navigate('/shop')}
                aria-label="View collections"
              >
                View Collections
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 animate-slide-left">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-primary-foreground/80">
                  <feature.icon className="h-5 w-5 mr-2 text-accent" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:pl-12">
            <div className="grid grid-cols-3 gap-8 animate-fade-up">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                    <div className="text-2xl lg:text-3xl font-bold text-accent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 text-center animate-slide-left">
              <div className="flex justify-center items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Rated 4.9/5 by thousands of customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-light/20 rounded-full blur-xl animate-pulse" />
    </section>
  );
};

export default HeroSection;