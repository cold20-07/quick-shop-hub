import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MainLayout } from '@/components/layout/MainLayout'
import { useAuth } from '@/contexts/AuthContext'

// Mock data - in a real app, this would come from an API
const mockOrders = [
  {
    id: '1',
    customerName: 'John Doe',
    items: [
      { name: 'Fresh Apples', quantity: 2, price: 2.99 },
      { name: 'Organic Bananas', quantity: 1, price: 1.99 },
    ],
    total: 7.97,
    status: 'pending',
    time: '10:30 AM',
  },
  {
    id: '2',
    customerName: 'Jane Smith',
    items: [
      { name: 'Fresh Apples', quantity: 1, price: 2.99 },
    ],
    total: 2.99,
    status: 'preparing',
    time: '11:15 AM',
  },
]

export default function ShopDashboardPage() {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')

  if (!user || user.role !== 'shop') {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-gray-600">
              You need to be logged in as a shop owner to access this page.
            </p>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Shop Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user.name}</p>
          </div>
          <Button>Add New Product</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Today's Orders</CardTitle>
              <CardDescription>Total orders received today</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
              <CardDescription>Total revenue today</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$156.45</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Average Rating</CardTitle>
              <CardDescription>Customer satisfaction score</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">4.8</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Manage and track incoming orders</CardDescription>
              </div>
              <Input
                type="text"
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockOrders.map((order) => (
                <div
                  key={order.id}
                  className="border rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{order.customerName}</h3>
                      <p className="text-sm text-gray-600">{order.time}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        order.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>
                          {item.quantity}x {item.name}
                        </span>
                        <span>${(item.quantity * item.price).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">
                      ${order.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
} 