
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, MapPin, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data
const shopData = {
  id: "1",
  name: "Fresh Market Grocery",
  image: "https://source.unsplash.com/random/1200x400/?grocery",
  logo: "https://source.unsplash.com/random/200x200/?grocery",
  category: "Grocery",
  rating: 4.7,
  reviewCount: 128,
  deliveryTime: "15-30 min",
  distance: "0.5 mi",
  description: "Your one-stop shop for fresh produce, pantry staples, and everyday essentials.",
  address: "123 Market Street, Anytown",
  isOpen: true,
  openUntil: "9:00 PM",
};

const productCategories = [
  { id: "all", name: "All Products" },
  { id: "fresh", name: "Fresh Produce" },
  { id: "dairy", name: "Dairy & Eggs" },
  { id: "bakery", name: "Bakery" },
  { id: "meat", name: "Meat & Seafood" },
  { id: "pantry", name: "Pantry" },
  { id: "frozen", name: "Frozen" },
  { id: "beverages", name: "Beverages" },
  { id: "snacks", name: "Snacks" },
];

const products = [
  { 
    id: "p1", 
    name: "Organic Bananas",
    image: "https://source.unsplash.com/random/400x300/?banana",
    price: 1.99,
    description: "Bunch of 5-7 organic bananas",
    category: "fresh",
    isAvailable: true,
  },
  { 
    id: "p2", 
    name: "Whole Milk",
    image: "https://source.unsplash.com/random/400x300/?milk",
    price: 3.49,
    description: "1 gallon, pasteurized",
    category: "dairy",
    isAvailable: true,
  },
  { 
    id: "p3", 
    name: "Sourdough Bread",
    image: "https://source.unsplash.com/random/400x300/?bread",
    price: 4.99,
    description: "Freshly baked, 16 oz loaf",
    category: "bakery",
    isAvailable: true,
  },
  { 
    id: "p4", 
    name: "Grass-fed Ground Beef",
    image: "https://source.unsplash.com/random/400x300/?beef",
    price: 7.99,
    description: "1 lb package, 85% lean",
    category: "meat",
    isAvailable: true,
  },
  { 
    id: "p5", 
    name: "Organic Brown Rice",
    image: "https://source.unsplash.com/random/400x300/?rice",
    price: 5.49,
    description: "2 lb bag, long grain",
    category: "pantry",
    isAvailable: true,
  },
  { 
    id: "p6", 
    name: "Premium Ice Cream",
    image: "https://source.unsplash.com/random/400x300/?ice-cream",
    price: 6.99,
    description: "1 pint, vanilla bean",
    category: "frozen",
    isAvailable: false,
  },
  { 
    id: "p7", 
    name: "Craft Beer 6-Pack",
    image: "https://source.unsplash.com/random/400x300/?beer",
    price: 12.99,
    description: "Assorted local IPA varieties",
    category: "beverages",
    isAvailable: true,
  },
  { 
    id: "p8", 
    name: "Potato Chips",
    image: "https://source.unsplash.com/random/400x300/?chips",
    price: 3.29,
    description: "8 oz bag, sea salt flavor",
    category: "snacks",
    isAvailable: true,
  },
  { 
    id: "p9", 
    name: "Fresh Avocados",
    image: "https://source.unsplash.com/random/400x300/?avocado",
    price: 2.49,
    description: "2 count, ready to eat",
    category: "fresh",
    isAvailable: true,
  },
  { 
    id: "p10", 
    name: "Greek Yogurt",
    image: "https://source.unsplash.com/random/400x300/?yogurt",
    price: 4.99,
    description: "32 oz container, plain",
    category: "dairy",
    isAvailable: true,
  },
  { 
    id: "p11", 
    name: "Bagels",
    image: "https://source.unsplash.com/random/400x300/?bagel",
    price: 3.99,
    description: "6 count, assorted flavors",
    category: "bakery",
    isAvailable: true,
  },
  { 
    id: "p12", 
    name: "Atlantic Salmon Fillets",
    image: "https://source.unsplash.com/random/400x300/?salmon",
    price: 12.99,
    description: "1 lb package, fresh never frozen",
    category: "meat",
    isAvailable: false,
  },
];

const ShopPage: React.FC = () => {
  const { shopId } = useParams<{ shopId: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cartItems, setCartItems] = useState<string[]>([]);
  const { toast } = useToast();
  
  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(product => product.category === selectedCategory);
    
  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    
    const product = products.find(p => p.id === productId);
    if (product) {
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`,
        duration: 2000,
      });
    }
  };
  
  return (
    <Layout cartItemCount={cartItems.length}>
      <div className="relative">
        <div className="h-48 md:h-64 w-full overflow-hidden">
          <img 
            src={shopData.image} 
            alt={shopData.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="bg-white rounded-lg shadow-lg -mt-20 p-6 mb-6 flex flex-col md:flex-row gap-4">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
              <img 
                src={shopData.logo} 
                alt={`${shopData.name} logo`}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h1 className="text-2xl font-bold">{shopData.name}</h1>
                  <p className="text-muted-foreground text-sm mt-1">{shopData.description}</p>
                </div>
                
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{shopData.rating}</span>
                  <span className="text-muted-foreground text-sm">({shopData.reviewCount} reviews)</span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span>{shopData.distance} away</span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span>{shopData.deliveryTime}</span>
                </div>
                
                {shopData.isOpen ? (
                  <span className="flex items-center text-success-500 font-medium">
                    <span className="h-2 w-2 bg-success-500 rounded-full mr-1"></span>
                    Open until {shopData.openUntil}
                  </span>
                ) : (
                  <span className="flex items-center text-muted-foreground">
                    <span className="h-2 w-2 bg-muted-foreground rounded-full mr-1"></span>
                    Closed
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-12">
        <Tabs defaultValue="menu" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="menu">
            <CategoryFilter 
              categories={productCategories}
              selectedCategory={selectedCategory}
              onSelectCategory={(category) => setSelectedCategory(category || "all")}
            />
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  description={product.description}
                  isAvailable={product.isAvailable}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="info">
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-lg font-medium mb-4">Shop Information</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Address</h3>
                  <p className="text-muted-foreground">{shopData.address}</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">Hours</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 9:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 9:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>10:00 AM - 7:00 PM</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-1">Contact</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews">
            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Customer Reviews</h2>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium">{shopData.rating}</span>
                  <span className="text-muted-foreground text-sm ml-1">({shopData.reviewCount})</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 pb-4 border-b">
                  <div className="sm:w-32 flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-brand-100 flex items-center justify-center">
                      <span className="font-medium text-brand-600">JD</span>
                    </div>
                    <p className="text-sm mt-1">John D.</p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                        />
                      ))}
                    </div>
                    <p className="text-sm">Great selection of fresh produce! The delivery was prompt and everything arrived in perfect condition. Will definitely order again.</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pb-4 border-b">
                  <div className="sm:w-32 flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-brand-100 flex items-center justify-center">
                      <span className="font-medium text-brand-600">SM</span>
                    </div>
                    <p className="text-sm mt-1">Sarah M.</p>
                    <p className="text-xs text-muted-foreground">1 week ago</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      {[1, 2, 3, 4].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
                        />
                      ))}
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                    <p className="text-sm">Good quality products overall. The delivery was a bit delayed, but customer service was responsive and helpful.</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">Load More Reviews</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ShopPage;
