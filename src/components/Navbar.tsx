
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ShoppingCart,
  MapPin,
  Bell,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const Navbar = ({ cartItemCount = 0 }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [isAuthenticated] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-brand-500">DashDepot</span>
          </Link>
          
          <div className="ml-4 hidden md:flex relative items-center">
            <MapPin className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Button variant="link" className="pl-8 text-sm text-muted-foreground">
              123 Main St
            </Button>
          </div>
        </div>
        
        <form onSubmit={handleSearch} className="hidden md:flex-1 md:flex md:mx-8 max-w-md">
          <div className="relative w-full">
            <Input
              placeholder="Search for shops or products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-8 rounded-full bg-secondary"
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>
        
        <div className="flex items-center space-x-2">
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" aria-label="Shopping Cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge 
                  className={cn(
                    "absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center",
                    "bg-brand-500 text-white text-xs font-bold rounded-full"
                  )}
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </Link>
          
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          
          {isAuthenticated ? (
            <Link to="/profile">
              <Button variant="ghost" size="icon" aria-label="User Profile">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link to="/auth">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden px-4 pb-3">
        <form onSubmit={handleSearch} className="w-full">
          <div className="relative w-full">
            <Input
              placeholder="Search shops or products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-8 rounded-full bg-secondary"
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
