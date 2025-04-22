import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { MainLayout } from '@/components/layout/MainLayout'

export default function ShopRegisterPage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // In a real app, this would validate and send the form data to an API
    const formData = new FormData(e.target as HTMLFormElement)
    const shopData = {
      name: formData.get('name'),
      description: formData.get('description'),
      address: formData.get('address'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      businessLicense: formData.get('businessLicense'),
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Shop registration data:', shopData)

    // Redirect to shop dashboard after successful registration
    navigate('/shop/dashboard')
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Register Your Shop</CardTitle>
              <CardDescription>
                Join DashDepot and start reaching more customers in your area
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Shop Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your shop name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Shop Description
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    placeholder="Describe your shop and what you offer"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium">
                    Shop Address
                  </label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    required
                    placeholder="Enter your shop's address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="businessLicense" className="text-sm font-medium">
                    Business License Number
                  </label>
                  <Input
                    id="businessLicense"
                    name="businessLicense"
                    type="text"
                    required
                    placeholder="Enter your business license number"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Registering...' : 'Register Shop'}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
} 