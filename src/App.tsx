import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { CartProvider } from '@/contexts/CartContext'
import { MainLayout } from '@/components/layout/MainLayout'
import Home from '@/pages/Index'
import Shops from '@/pages/shops'
import Shop from '@/pages/shop/[id]'
import ShopRegister from '@/pages/shop/register'
import ShopDashboard from '@/pages/shop/dashboard'
import DeliveryDashboard from '@/pages/delivery/dashboard'
import AdminDashboard from '@/pages/admin/dashboard'
import Cart from '@/pages/cart'
import Auth from '@/pages/auth'
import OrderTracking from '@/pages/orders/[id]'

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<MainLayout><></></MainLayout>}>
              <Route index element={<Home />} />
              <Route path="shops" element={<Shops />} />
              <Route path="shop/:id" element={<Shop />} />
              <Route path="shop/register" element={<ShopRegister />} />
              <Route path="shop/dashboard" element={<ShopDashboard />} />
              <Route path="delivery/dashboard" element={<DeliveryDashboard />} />
              <Route path="admin/dashboard" element={<AdminDashboard />} />
              <Route path="cart" element={<Cart />} />
              <Route path="auth" element={<Auth />} />
              <Route path="orders/:id" element={<OrderTracking />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  )
}
