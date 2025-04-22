import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, MapPin, User } from "lucide-react"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              DashDepot
            </Link>
            
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for shops or products..."
                  className="pl-10"
                />
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <nav className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">DashDepot</h3>
              <p className="text-sm text-gray-600">
                Your instant delivery solution for local shops
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Customers</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/shops" className="text-gray-600 hover:text-primary">Find Shops</Link></li>
                <li><Link to="/orders" className="text-gray-600 hover:text-primary">My Orders</Link></li>
                <li><Link to="/account" className="text-gray-600 hover:text-primary">Account</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Shops</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/shop/register" className="text-gray-600 hover:text-primary">Register Shop</Link></li>
                <li><Link to="/shop/login" className="text-gray-600 hover:text-primary">Shop Login</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/support" className="text-gray-600 hover:text-primary">Support</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
            © {new Date().getFullYear()} DashDepot. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
} 