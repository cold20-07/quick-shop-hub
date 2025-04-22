
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-brand-500">DashDepot</h3>
            <p className="text-sm text-muted-foreground">
              Your go-to platform for instant delivery from local shops.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shops" className="text-sm text-muted-foreground hover:text-foreground">
                  All Shops
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm text-muted-foreground hover:text-foreground">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/auth?mode=signup" className="text-sm text-muted-foreground hover:text-foreground">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-sm text-muted-foreground hover:text-foreground">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-sm text-muted-foreground hover:text-foreground">
                  My Orders
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-3 sm:mb-0">
            &copy; {new Date().getFullYear()} DashDepot. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
