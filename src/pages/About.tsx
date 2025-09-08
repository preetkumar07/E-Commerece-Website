import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const About = () => {
  useEffect(() => {
    document.title = 'About Us - ShopHub';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Learn about our e-commerce platform, mission, values, and the team behind ShopHub.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">About ShopHub</h1>
          <p className="text-muted-foreground max-w-3xl">
            ShopHub is an e-commerce platform built to bring premium products and delightful experiences to customers worldwide. Our mission is to combine great design, reliable service, and thoughtful technology to make shopping simple, inspiring, and accessible for everyone.
          </p>
        </section>

        {/* Timeline */}
        <section className="bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6">Our Journey</h2>
            <div className="relative border-l border-border pl-6 space-y-8">
              {[
                { year: '2022', text: 'Founded with a small curated catalog and a big vision.' },
                { year: '2023', text: 'Expanded categories and launched mobile-first design.' },
                { year: '2024', text: 'Introduced advanced search, wishlist, and faster checkout.' }
              ].map((item) => (
                <div key={item.year} className="group">
                  <div className="absolute -left-1.5 w-3 h-3 bg-primary rounded-full" />
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="text-primary font-semibold w-16">{item.year}</div>
                        <p className="text-foreground/90">{item.text}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold mb-6">What customers say</h2>
          <Carousel>
            <CarouselContent>
              {[
                'Fantastic service and beautiful products. Five stars!',
                'Checkout was seamless and delivery was fast.',
                'Love the design and the attention to detail across the site.'
              ].map((quote, idx) => (
                <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="p-6">“{quote}”</CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        {/* Team */}
        <section className="bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Alex', role: 'Product & Engineering', src: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=400&auto=format&fit=crop' },
                { name: 'Jordan', role: 'Product & Engineering', src: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop' },
                { name: 'Taylor', role: 'Product & Engineering', src: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop' }
              ].map((member) => (
                <Card key={member.name}>
                  <CardContent className="p-6">
                    <img
                      src={member.src}
                      alt={`${member.name} – ${member.role}`}
                      loading="lazy"
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;


