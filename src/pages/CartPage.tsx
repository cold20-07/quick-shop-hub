
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Cart, { CartItem } from "@/components/Cart";

// Mock cart data
const initialCartItems: CartItem[] = [
  {
    id: "p1",
    name: "Organic Bananas",
    price: 1.99,
    quantity: 1,
    image: "https://source.unsplash.com/random/400x300/?banana",
  },
  {
    id: "p2",
    name: "Whole Milk",
    price: 3.49,
    quantity: 2,
    image: "https://source.unsplash.com/random/400x300/?milk",
  },
  {
    id: "p3",
    name: "Sourdough Bread",
    price: 4.99,
    quantity: 1,
    image: "https://source.unsplash.com/random/400x300/?bread",
  },
];

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  
  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  const handleRemoveItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  
  return (
    <Layout cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} hideFooter>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <Cart
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
