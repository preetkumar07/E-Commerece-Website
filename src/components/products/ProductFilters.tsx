import { useStore } from "@/store/useStore";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProductFilters = () => {
  const {
    categories,
    selectedCategory,
    priceRange,
    sortBy,
    setSelectedCategory,
    setPriceRange,
    setSortBy,
    setSearchQuery
  } = useStore();

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 1000]);
    setSortBy('newest');
    setSearchQuery('');
  };

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <Label className="text-sm font-medium mb-3 block">Categories</Label>
        <div className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              size="sm"
              className="w-full justify-start capitalize"
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All Products' : category}
            </Button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <Label className="text-sm font-medium mb-3 block">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </Label>
        <Slider
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          max={1000}
          min={0}
          step={10}
          className="w-full"
        />
      </div>

      {/* Sort By */}
      <div>
        <Label className="text-sm font-medium mb-3 block">Sort By</Label>
        <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="name">Name (A-Z)</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        size="sm"
        className="w-full"
        onClick={handleClearFilters}
      >
        Clear All Filters
      </Button>
    </div>
  );
};

export default ProductFilters;