import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

interface ProductCardProps {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  onAddToCart: (quantity: number) => void
}

export function ProductCard({
  id,
  name,
  description,
  price,
  imageUrl,
  onAddToCart,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  return (
    <Card className="overflow-hidden">
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
        <p className="text-lg font-semibold text-primary">
          ${price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-20"
        />
        <Button
          className="flex-1"
          onClick={() => onAddToCart(quantity)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
} 