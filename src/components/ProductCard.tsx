
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  currency?: string;
  description?: string;
  isAvailable?: boolean;
  onAddToCart: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
  currency = "$",
  description,
  isAvailable = true,
  onAddToCart,
}) => {
  return (
    <div className={cn(
      "product-card flex flex-col h-full",
      !isAvailable && "opacity-70"
    )}>
      <div className="relative h-36 md:h-40 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {!isAvailable && (
          <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
            <span className="text-white font-medium text-sm">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-medium text-sm line-clamp-2 leading-tight mb-1">{name}</h3>
        
        {description && (
          <p className="text-muted-foreground text-xs line-clamp-2 mb-2">{description}</p>
        )}
        
        <div className="mt-auto flex items-center justify-between">
          <span className="font-bold text-sm">{currency}{price.toFixed(2)}</span>
          
          <Button
            size="sm"
            variant="ghost"
            className={cn(
              "h-8 w-8 p-0 rounded-full",
              isAvailable ? "bg-primary text-white hover:bg-primary/90" : "bg-muted text-muted-foreground"
            )}
            disabled={!isAvailable}
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(id);
            }}
            aria-label="Add to cart"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
