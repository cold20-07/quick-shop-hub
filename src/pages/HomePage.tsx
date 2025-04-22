
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import CategoryFilter from "@/components/CategoryFilter";
import ShopCard from "@/components/ShopCard";
import LocationPicker from "@/components/LocationPicker";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

// Mock data
const categories = [
  { id: "grocery", name: "Grocery", icon: "🛒" },
  { id: "pharmacy", name: "Pharmacy", icon: "💊" },
  { id: "electronics", name: "Electronics", icon: "📱" },
  { id: "fashion", name: "Fashion", icon: "👕" },
  { id: "restaurants", name: "Food", icon: "🍔" },
  { id: "pets", name: "Pets", icon: "🐶" },
  { id: "flowers", name: "Flowers", icon: "💐" },
  { id: "gifts", name: "Gifts", icon: "🎁" },
];

const shops = [
  {
    id: "1",
    name: "Fresh Market Grocery",
    image: "https://source.unsplash.com/random/400x300/?grocery",
    category: "Grocery",
    rating: 4.7,
    deliveryTime: "15-30 min",
    distance: "0.5 mi",
  },
  {
    id: "2",
    name: "QuickMeds Pharmacy",
    image: "https://source.unsplash.com/random/400x300/?pharmacy",
    category: "Pharmacy",
    rating: 4.5,
    deliveryTime: "20-35 min",
    distance: "0.8 mi",
  },
  {
    id: "3",
    name: "TechGadgets Store",
    image: "https://source.unsplash.com/random/400x300/?electronics",
    category: "Electronics",
    rating: 4.3,
    deliveryTime: "25-40 min",
    distance: "1.2 mi",
  },
  {
    id: "4",
    name: "Urban Style Apparel",
    image: "https://source.unsplash.com/random/400x300/?clothing",
    category: "Fashion",
    rating: 4.2,
    deliveryTime: "30-45 min",
    distance: "1.5 mi",
  },
  {
    id: "5",
    name: "Burgers & Beyond",
    image: "https://source.unsplash.com/random/400x300/?burger",
    category: "Food",
    rating: 4.8,
    deliveryTime: "20-35 min",
    distance: "0.7 mi",
  },
  {
    id: "6",
    name: "PetPals Supplies",
    image: "https://source.unsplash.com/random/400x300/?pets",
    category: "Pets",
    rating: 4.4,
    deliveryTime: "25-40 min",
    distance: "1.1 mi",
  },
  {
    id: "7",
    name: "Blooms Floral Shop",
    image: "https://source.unsplash.com/random/400x300/?flowers",
    category: "Flowers",
    rating: 4.6,
    deliveryTime: "30-45 min",
    distance: "1.3 mi",
  },
  {
    id: "8",
    name: "Gift Emporium",
    image: "https://source.unsplash.com/random/400x300/?gifts",
    category: "Gifts",
    rating: 4.3,
    deliveryTime: "35-50 min",
    distance: "1.7 mi",
  },
];

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hasLocation, setHasLocation] = useState(false);
  const [userLocation, setUserLocation] = useState<string>("");
  const [cartItemCount, setCartItemCount] = useState(0);
  
  const handleLocationSelect = (location: string) => {
    setUserLocation(location);
    setHasLocation(true);
  };
  
  const filteredShops = selectedCategory
    ? shops.filter(shop => shop.category.toLowerCase() === selectedCategory)
    : shops;
  
  // For demo purposes, initialize cart with random items
  useEffect(() => {
    setCartItemCount(Math.floor(Math.random() * 5));
  }, []);
  
  if (!hasLocation) {
    return (
      <Layout cartItemCount={cartItemCount}>
        <div className="container max-w-lg mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome to DashDepot</h1>
            <p className="text-muted-foreground">
              Get instant delivery from your favorite local shops
            </p>
          </div>
          <LocationPicker onLocationSelect={handleLocationSelect} />
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout cartItemCount={cartItemCount}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center mb-4">
          <MapPin className="h-5 w-5 text-brand-500 mr-2" />
          <div className="flex items-center">
            <p className="text-sm text-muted-foreground">Delivering to:</p>
            <Button 
              variant="link" 
              className="p-0 ml-1 text-sm font-medium text-brand-500"
              onClick={() => setHasLocation(false)}
            >
              {userLocation || "123 Main St"}
            </Button>
          </div>
        </div>
        
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-6">Shops Near You</h1>
          
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {filteredShops.map((shop) => (
              <ShopCard key={shop.id} {...shop} />
            ))}
          </div>
        </section>
        
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Featured Shops</h2>
            <Button variant="link" className="text-brand-500">See All</Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {shops.slice(0, 4).map((shop) => (
              <ShopCard key={`featured-${shop.id}`} {...shop} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
