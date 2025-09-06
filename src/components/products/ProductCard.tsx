import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
  className?: string;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  isNew,
  isSale,
  className = "",
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsLoading(false);
    // Add to cart logic here
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className={`card-product group ${className}`}>
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-success text-success-foreground">New</Badge>
          )}
          {isSale && discount > 0 && (
            <Badge className="bg-destructive text-destructive-foreground">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-300 ${
            isWishlisted ? "text-destructive" : "text-muted-foreground"
          }`}
          onClick={handleWishlistToggle}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>

        {/* Quick Add to Cart - Appears on Hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            className="w-full bg-primary/90 backdrop-blur-sm hover:bg-primary"
            onClick={handleAddToCart}
            disabled={isLoading}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {isLoading ? "Adding..." : "Add to Cart"}
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-1">
            ({reviews})
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;