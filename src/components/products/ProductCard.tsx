import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store/useStore";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  className
}: ProductCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.includes(id);

  const handleAddToCart = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    addToCart(id);
    setIsLoading(false);
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = () => {
    toggleWishlist(id);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted 
        ? `${name} has been removed from your wishlist.`
        : `${name} has been added to your wishlist.`,
    });
  };

  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 ${className}`}>
      <div className="relative">
        {/* Product Image */}
        <div 
          className="relative aspect-square overflow-hidden rounded-t-lg cursor-pointer"
          onClick={() => navigate(`/product/${id}`)}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <Badge variant="default" className="bg-primary text-primary-foreground">
                New
              </Badge>
            )}
            {isSale && originalPrice && (
              <Badge variant="destructive">
                -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
              </Badge>
            )}
          </div>
          
          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background transition-all ${
              isWishlisted ? 'text-red-500' : 'text-muted-foreground'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              handleWishlistToggle();
            }}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>
          
          {/* Add to Cart Button - Visible on Hover */}
          <div className="absolute inset-x-3 bottom-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
              disabled={isLoading}
              className="w-full bg-background/90 backdrop-blur-sm text-foreground border border-border hover:bg-background"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {isLoading ? 'Adding...' : 'Add to Cart'}
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <CardContent className="p-4">
          {/* Rating and Reviews */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(rating)
                      ? 'fill-accent text-accent'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground ml-1">
              ({reviews})
            </span>
          </div>
          
          {/* Product Name */}
          <h3 
            className="font-semibold text-foreground mb-2 line-clamp-2 leading-tight cursor-pointer hover:text-primary transition-colors"
            onClick={() => navigate(`/product/${id}`)}
          >
            {name}
          </h3>
          
          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProductCard;