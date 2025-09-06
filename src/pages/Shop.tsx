import { useEffect } from "react";
import { useStore } from "@/store/useStore";
import ProductCard from "@/components/products/ProductCard";
import ProductFilters from "@/components/products/ProductFilters";
import { Button } from "@/components/ui/button";
import { Grid3X3, List, SlidersHorizontal } from "lucide-react";

const Shop = () => {
  const {
    getFilteredProducts,
    searchQuery,
    selectedCategory,
    sortBy
  } = useStore();

  const products = getFilteredProducts();

  useEffect(() => {
    document.title = "Shop - LuxeStore | Premium Products Collection";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Browse our extensive collection of premium products. Find electronics, fashion, accessories, and home goods with fast shipping and excellent service.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-surface">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Shop</h1>
          <p className="text-lg text-muted-foreground">
            Discover our curated collection of premium products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="h-5 w-5" />
                <h2 className="text-xl font-semibold">Filters</h2>
              </div>
              <ProductFilters />
            </div>
          </aside>

          {/* Products Grid */}
          <main className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <p className="text-muted-foreground">
                  {products.length} product{products.length !== 1 ? 's' : ''} found
                  {searchQuery && (
                    <span> for "{searchQuery}"</span>
                  )}
                  {selectedCategory !== 'all' && (
                    <span> in {selectedCategory}</span>
                  )}
                </p>
              </div>
              
              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    className="animate-fade-in"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No products found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search query
                </p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    useStore.getState().setSearchQuery('');
                    useStore.getState().setSelectedCategory('all');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;