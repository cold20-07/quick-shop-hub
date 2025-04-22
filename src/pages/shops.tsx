import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ShopCard } from '@/components/shop/ShopCard'
import { MainLayout } from '@/components/layout/MainLayout'

// Mock data - in a real app, this would come from an API
const mockShops = [
  {
    id: '1',
    name: 'Fresh Grocery',
    description: 'Your local grocery store with fresh produce and daily essentials',
    rating: 4.5,
    deliveryTime: '15-20 min',
    distance: '0.5 km',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: '2',
    name: 'Bakery Delight',
    description: 'Freshly baked goods and pastries made daily',
    rating: 4.8,
    deliveryTime: '10-15 min',
    distance: '0.3 km',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  },
  // Add more mock shops as needed
]

export default function ShopsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('distance')

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search for shops..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="distance">Distance</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="deliveryTime">Delivery Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockShops.map((shop) => (
            <ShopCard key={shop.id} {...shop} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
} 