import { Card, CardContent, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { Truck, MapPin, Clock, DollarSign, AlertTriangle, CheckCircle, Route, Navigation } from "lucide-react"
import Image from "next/image"

export function FleetDashboard() {
  const vehicles = [
    {
      id: "TRK-001",
      driver: "John Smith",
      status: "In Transit",
      location: "I-80 Mile 245",
      eta: "2:30 PM",
      revenue: "$2,450",
      image: "/images/route-icon.png",
    },
    {
      id: "TRK-002",
      driver: "Sarah Johnson",
      status: "Loading",
      location: "Chicago, IL",
      eta: "4:15 PM",
      revenue: "$1,890",
      image: "/images/map-pin-icon.png",
    },
    {
      id: "TRK-003",
      driver: "Mike Wilson",
      status: "Available",
      location: "Dallas, TX",
      eta: "Ready",
      revenue: "$0",
      image: "/images/route-icon.png",
    },
    {
      id: "TRK-004",
      driver: "Lisa Brown",
      status: "Maintenance",
      location: "Phoenix, AZ",
      eta: "Tomorrow",
      revenue: "$0",
      image: "/images/map-pin-icon.png",
    },
    {
      id: "TRK-005",
      driver: "David Lee",
      status: "Delivered",
      location: "Los Angeles, CA",
      eta: "Completed",
      revenue: "$3,200",
      image: "/images/route-icon.png",
    },
    {
      id: "TRK-006",
      driver: "Emma Davis",
      status: "In Transit",
      location: "I-10 Mile 156",
      eta: "6:45 PM",
      revenue: "$2,100",
      image: "/images/map-pin-icon.png",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Transit":
        return <Truck className="w-4 h-4" />
      case "Loading":
        return <Clock className="w-4 h-4" />
      case "Available":
        return <CheckCircle className="w-4 h-4" />
      case "Maintenance":
        return <AlertTriangle className="w-4 h-4" />
      case "Delivered":
        return <CheckCircle className="w-4 h-4" />
      default:
        return <Truck className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Transit":
        return "bg-blue-600"
      case "Loading":
        return "bg-yellow-600"
      case "Available":
        return "bg-green-600"
      case "Maintenance":
        return "bg-red-600"
      case "Delivered":
        return "bg-green-700"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="relative w-32 h-20 mx-auto mb-6">
          <Image src="/images/blue-cover.png" alt="FleetFusion Dashboard" fill className="object-contain" />
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">Live Fleet Dashboard</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Real-time visibility into your entire fleet operation with advanced analytics and route optimization
        </p>
      </div>

      {/* Fleet Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500">
          <CardContent className="p-6 text-center">
            <Truck className="w-8 h-8 text-white mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">6</div>
            <div className="text-blue-100 text-sm">Active Vehicles</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-600 to-green-700 border-green-500">
          <CardContent className="p-6 text-center">
            <DollarSign className="w-8 h-8 text-white mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">$9,640</div>
            <div className="text-green-100 text-sm">Today's Revenue</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-yellow-600 to-yellow-700 border-yellow-500">
          <CardContent className="p-6 text-center">
            <Route className="w-8 h-8 text-white mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">4</div>
            <div className="text-yellow-100 text-sm">Active Routes</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-purple-500">
          <CardContent className="p-6 text-center">
            <Navigation className="w-8 h-8 text-white mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">98.5%</div>
            <div className="text-purple-100 text-sm">On-Time Rate</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8">
                    <Image
                      src={vehicle.image || "/placeholder.svg"}
                      alt="Vehicle status"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardTitle className="text-white text-lg">{vehicle.id}</CardTitle>
                </div>
                <Badge className={`${getStatusColor(vehicle.status)} text-white`}>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(vehicle.status)}
                    {vehicle.status}
                  </div>
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Truck className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">{vehicle.driver}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-sm">{vehicle.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">ETA: {vehicle.eta}</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                <div className="flex items-center gap-2 text-green-400">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-bold text-lg">{vehicle.revenue}</span>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                >
                  Track
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
