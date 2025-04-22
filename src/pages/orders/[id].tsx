import { useParams } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MainLayout } from '@/components/layout/MainLayout'
import { useAuth } from '@/contexts/AuthContext'

// Mock data - in a real app, this would come from an API
const mockOrder = {
  id: 'ORD-123',
  status: 'in_transit',
  items: [
    {
      id: '1',
      name: 'Fresh Apples',
      quantity: 2,
      price: 2.99,
      imageUrl: 'https://images.unsplash.com/photo-1568702846914-96b02d118851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '2',
      name: 'Organic Bananas',
      quantity: 1,
      price: 1.99,
      imageUrl: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
  ],
  shop: {
    name: 'Fresh Grocery',
    address: '456 Market St, City, State',
  },
  delivery: {
    name: 'John Smith',
    phone: '+1 234 567 8900',
    estimatedTime: '15 min',
  },
  timeline: [
    {
      status: 'placed',
      time: '10:30 AM',
      description: 'Order placed',
    },
    {
      status: 'confirmed',
      time: '10:32 AM',
      description: 'Order confirmed by shop',
    },
    {
      status: 'preparing',
      time: '10:35 AM',
      description: 'Shop is preparing your order',
    },
    {
      status: 'ready',
      time: '10:45 AM',
      description: 'Order is ready for pickup',
    },
    {
      status: 'in_transit',
      time: '10:50 AM',
      description: 'Delivery partner is on the way',
    },
  ],
}

export default function OrderTrackingPage() {
  const { id } = useParams()
  const { user } = useAuth()

  if (!user) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-gray-600">
              You need to be logged in to view this order.
            </p>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Order #{mockOrder.id}</CardTitle>
              <CardDescription>
                Track your order status in real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Order Timeline */}
                <div className="relative">
                  {mockOrder.timeline.map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-4 pb-6 last:pb-0"
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-4 h-4 rounded-full ${
                            index <=
                            mockOrder.timeline.findIndex(
                              (s) => s.status === mockOrder.status
                            )
                              ? 'bg-primary'
                              : 'bg-gray-200'
                          }`}
                        />
                        {index < mockOrder.timeline.length - 1 && (
                          <div
                            className={`w-0.5 h-full ${
                              index <
                              mockOrder.timeline.findIndex(
                                (s) => s.status === mockOrder.status
                              )
                                ? 'bg-primary'
                                : 'bg-gray-200'
                            }`}
                          />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{step.description}</p>
                        <p className="text-sm text-gray-600">{step.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Details */}
                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Order Details</h3>
                  <div className="space-y-4">
                    {mockOrder.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4"
                      >
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">
                            {item.quantity} x ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <p className="font-medium">
                          ${(item.quantity * item.price).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shop and Delivery Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
                  <div>
                    <h3 className="font-semibold mb-2">Shop Information</h3>
                    <p className="text-sm">{mockOrder.shop.name}</p>
                    <p className="text-sm text-gray-600">
                      {mockOrder.shop.address}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Delivery Information</h3>
                    <p className="text-sm">{mockOrder.delivery.name}</p>
                    <p className="text-sm text-gray-600">
                      {mockOrder.delivery.phone}
                    </p>
                    <p className="text-sm text-gray-600">
                      Estimated delivery: {mockOrder.delivery.estimatedTime}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
} 