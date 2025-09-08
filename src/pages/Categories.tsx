import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useStore } from '@/store/useStore';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();
  const { categories, setSelectedCategory } = useStore();

  useEffect(() => {
    document.title = 'Categories - ShopHub';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Browse product categories on ShopHub.');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">Categories</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.filter(c => c !== 'all').map((category) => (
              <Card key={category} className="cursor-pointer" onClick={() => { setSelectedCategory(category); navigate('/shop'); }}>
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="font-semibold capitalize">{category}</div>
                  <img
                    src={
                      category === 'electronics' ? 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=400&auto=format&fit=crop' :
                      category === 'fashion' ? 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop' :
                      category === 'accessories' ? 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400&auto=format&fit=crop' :
                      category === 'home' ? 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop' :
                      category === 'books' ? 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=400&auto=format&fit=crop' :
                      category === 'entertainment' ? 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&auto=format&fit=crop' :
                      '/placeholder.svg'
                    }
                    alt={`${category} category`}
                    loading="lazy"
                    className="w-16 h-16 rounded object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;


