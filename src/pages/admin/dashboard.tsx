import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MainLayout } from '@/components/layout/MainLayout'
import { useAuth } from '@/contexts/AuthContext'

// Mock data - in a real app, this would come from an API
const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'customer',
    status: 'active',
    joinDate: '2023-01-15',
  },
  {
    id: '2',
    name: 'Fresh Grocery',
    email: 'shop@example.com',
    role: 'shop',
    status: 'pending',
    joinDate: '2023-02-01',
  },
  {
    id: '3',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'delivery',
    status: 'active',
    joinDate: '2023-01-20',
  },
]

export default function AdminDashboardPage() {
  const { user } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')

  if (!user || user.role !== 'admin') {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-gray-600">
              You need to be logged in as an administrator to access this page.
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
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user.name}</p>
          </div>
          <Button>Generate Report</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
              <CardDescription>All platform users</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">1,234</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Shops</CardTitle>
              <CardDescription>Registered businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">89</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Delivery Personnel</CardTitle>
              <CardDescription>Active delivery partners</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">156</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Daily Orders</CardTitle>
              <CardDescription>Orders placed today</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">245</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage platform users and their roles</CardDescription>
              </div>
              <Input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockUsers.map((user) => (
                <div
                  key={user.id}
                  className="border rounded-lg p-4 hover:bg-gray-50"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{user.name}</h3>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded text-sm ${
                          user.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {user.status}
                      </span>
                      <span className="px-2 py-1 rounded text-sm bg-gray-100 text-gray-800">
                        {user.role}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-600">
                      Joined: {user.joinDate}
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Suspend
                      </Button>
                    </div>
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