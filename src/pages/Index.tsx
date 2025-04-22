import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to DashDepot</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your instant delivery solution for local shops
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter your location"
                className="flex-1"
              />
              <Button>Find Shops</Button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Shop Local</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Discover and support local businesses in your area</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Instant Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get your items delivered to your doorstep in minutes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Track Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Real-time tracking of your orders from shop to door</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
