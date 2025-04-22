import { Link } from 'react-router-dom'
import { Star, Clock, MapPin } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ShopCardProps {
  id: string
  name: string
  description: string
  rating: number
  deliveryTime: string
  distance: string
  imageUrl: string
}

export function ShopCard({
  id,
  name,
  description,
  rating,
  deliveryTime,
  distance,
  imageUrl,
}: ShopCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{deliveryTime}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{distance}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/shop/${id}`}>View Shop</Link>
        </Button>
      </CardFooter>
    </Card>
  )
} 