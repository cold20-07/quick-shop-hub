import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MainLayout } from '@/components/layout/MainLayout'
import { useAuth } from '@/contexts/AuthContext'

// Mock data - in a real app, this would come from an API
const mockDeliveries = [
  {
    id: '1',
    orderId: 'ORD-123',
    customerName: 'John Doe',
    customerAddress: '123 Main St, City, State',
    shopName: 'Fresh Grocery',
    shopAddress: '456 Market St, City, State',
    items: [
      { name: 'Fresh Apples', quantity: 2 },
      { name: 'Organic Bananas', quantity: 1 },
    ],
    status: 'assigned',
    estimatedTime: '15 min',
  },
  {
    id: '2',
    orderId: 'ORD-124',
    customerName: 'Jane Smith',
    customerAddress: '789 Oak Ave, City, State',
    shopName: 'Bakery Delight',
    shopAddress: '321 Baker St, City, State',
    items: [
      { name: 'Fresh Bread', quantity: 1 },
      { name: 'Croissant', quantity: 2 },
    ],
    status: 'picked_up',
    estimatedTime: '10 min',
  },
]

export default function DeliveryDashboardPage() {
  const { user } = useAuth()
  const [activeDelivery, setActiveDelivery] = useState<string | null>(null)

  if (!user || user.role !== 'delivery') {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-gray-600">
              You need to be logged in as a delivery personnel to access this page.
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
            <h1 className="text-2xl font-bold">Delivery Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user.name}</p>
          </div>
          <Button variant="outline">Update Availability</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Today's Deliveries</CardTitle>
              <CardDescription>Total deliveries assigned today</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">8</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Earnings</CardTitle>
              <CardDescription>Total earnings today</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$45.60</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Average Rating</CardTitle>
              <CardDescription>Customer satisfaction score</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">4.9</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Deliveries</CardTitle>
            <CardDescription>Manage your current deliveries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockDeliveries.map((delivery) => (
                <div
                  key={delivery.id}
                  className="border rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">
                        Order #{delivery.orderId}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {delivery.customerName}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-sm ${
                        delivery.status === 'assigned'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {delivery.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-medium mb-2">Pickup Location</h4>
                      <p className="text-sm">{delivery.shopName}</p>
                      <p className="text-sm text-gray-600">
                        {delivery.shopAddress}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Delivery Location</h4>
                      <p className="text-sm">{delivery.customerName}</p>
                      <p className="text-sm text-gray-600">
                        {delivery.customerAddress}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Items</h4>
                    <ul className="text-sm space-y-1">
                      {delivery.items.map((item, index) => (
                        <li key={index}>
                          {item.quantity}x {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <span className="text-sm text-gray-600">
                      Estimated time: {delivery.estimatedTime}
                    </span>
                    <Button
                      variant="outline"
                      onClick={() => setActiveDelivery(delivery.id)}
                    >
                      View Details
                    </Button>
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