
import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ 
  items, 
  onUpdateQuantity, 
  onRemoveItem 
}) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 3.99;
  const total = subtotal + deliveryFee;
  
  return (
    <div className="flex flex-col h-full">
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 flex-grow">
          <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
          <p className="text-muted-foreground text-sm mb-4">Add items from a shop to get started</p>
          <Button variant="outline" asChild>
            <a href="/">Browse Shops</a>
          </Button>
        </div>
      ) : (
        <>
          <div className="flex-grow overflow-auto">
            <ul className="divide-y">
              {items.map((item) => (
                <li key={item.id} className="py-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex items-center border rounded-md overflow-hidden">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 rounded-none"
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 rounded-none"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 ml-2 text-muted-foreground"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t mt-4 pt-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <Button className="w-full mt-4" size="lg">
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

// Needed for the empty cart state
const ShoppingCart = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={cn("lucide lucide-shopping-cart", className)}
  >
    <circle cx="8" cy="21" r="1"/>
    <circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
);

export default Cart;
