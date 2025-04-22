
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
  cartItemCount?: number;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  hideFooter = false,
  cartItemCount = 0 
}) => {
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartItemCount={cartItemCount} />
      
      <main className={cn("flex-1", isCartPage ? "bg-gray-50" : "")}>
        {children}
      </main>
      
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
