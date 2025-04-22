import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Star, Clock, MapPin } from 'lucide-react'
import { ProductCard } from '@/components/product/ProductCard'
import { MainLayout } from '@/components/layout/MainLayout'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// Mock data - in a real app, this would come from an API
const mockShop = {
  id: '1',
  name: 'Fresh Grocery',
  description: 'Your local grocery store with fresh produce and daily essentials',
  rating: 4.5,
  deliveryTime: '15-20 min',
  distance: '0.5 km',
  imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  products: [
    {
      id: '1',
      name: 'Fresh Apples',
      description: 'Crisp and juicy apples from local orchards',
      price: 2.99,
      imageUrl: 'https://images.unsplash.com/photo-1568702846914-96b02d118851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '2',
      name: 'Organic Bananas',
      description: 'Sweet and nutritious organic bananas',
      price: 1.99,
      imageUrl: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    },
    // Add more mock products as needed
  ],
}

export default function ShopPage() {
  const { id } = useParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('price')

  const handleAddToCart = (productId: string, quantity: number) => {
    // In a real app, this would add the product to the cart
    console.log(`Added ${quantity} of product ${productId} to cart`)
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Shop Header */}
        <div className="mb-8">
          <div className="relative h-64 rounded-lg overflow-hidden mb-4">
            <img
              src={mockShop.imageUrl}
              alt={mockShop.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">{mockShop.name}</h1>
          <p className="text-gray-600 mb-4">{mockShop.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span>{mockShop.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{mockShop.deliveryTime}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{mockShop.distance}</span>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="name">Name</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockShop.products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={(quantity) => handleAddToCart(product.id, quantity)}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  )
} 