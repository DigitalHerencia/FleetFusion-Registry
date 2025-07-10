import { Card, CardContent, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Truck, 
  Calendar,
  Download,
  Filter
} from "lucide-react"
import { cn } from "@/registry/fleetfusion-dark/lib/utils"

interface AnalyticsMetric {
  label: string
  value: string
  change: number
  trend: "up" | "down" | "stable"
}

export function AnalyticsDemo() {
  const metrics: AnalyticsMetric[] = [
    { label: "Total Revenue", value: "$124,590", change: 12.5, trend: "up" },
    { label: "Total Miles", value: "45,230", change: -3.2, trend: "down" },
    { label: "Fuel Efficiency", value: "8.2 MPG", change: 0.8, trend: "up" },
    { label: "Driver Utilization", value: "87%", change: 5.1, trend: "up" },
  ]

  const topDrivers = [
    { name: "John Smith", miles: 3250, revenue: "$8,420", efficiency: 92 },
    { name: "Sarah Johnson", miles: 2890, revenue: "$7,650", efficiency: 89 },
    { name: "Mike Wilson", miles: 2640, revenue: "$6,890", efficiency: 85 },
    { name: "Emily Davis", miles: 2340, revenue: "$6,120", efficiency: 88 },
  ]

  const vehiclePerformance = [
    { vehicle: "Truck-001", miles: 4500, fuel: "$890", maintenance: "Good" },
    { vehicle: "Truck-002", miles: 3800, fuel: "$760", maintenance: "Due" },
    { vehicle: "Truck-003", miles: 4200, fuel: "$840", maintenance: "Good" },
    { vehicle: "Truck-004", miles: 3600, fuel: "$720", maintenance: "Critical" },
  ]

  const getTrendColor = (trend: "up" | "down" | "stable") => {
    switch (trend) {
      case "up":
        return "text-green-500"
      case "down":
        return "text-red-500"
      case "stable":
        return "text-yellow-500"
    }
  }

  const getMaintenanceVariant = (status: string) => {
    switch (status) {
      case "Good":
        return "success"
      case "Due":
        return "warning"
      case "Critical":
        return "danger"
      default:
        return "neutral"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive fleet performance insights and metrics
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="fleet-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
              <div className="p-2 rounded-full bg-primary/10">
                <BarChart3 className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center text-sm">
                <TrendingUp className={cn("h-4 w-4 mr-1", getTrendColor(metric.trend))} />
                <span className={getTrendColor(metric.trend)}>
                  {metric.change > 0 ? "+" : ""}{metric.change}%
                </span>
                <span className="text-muted-foreground ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="fleet-fade-in">
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Revenue chart would be rendered here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="fleet-fade-in">
          <CardHeader>
            <CardTitle>Fleet Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="text-center">
                <Truck className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  Utilization chart would be rendered here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Performers */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="fleet-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Top Performing Drivers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topDrivers.map((driver, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/20">
                  <div>
                    <p className="font-medium">{driver.name}</p>
                    <p className="text-sm text-muted-foreground">{driver.miles} miles</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{driver.revenue}</p>
                    <Badge variant="success" className="text-xs">
                      {driver.efficiency}% efficiency
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="fleet-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Truck className="h-5 w-5 mr-2" />
              Vehicle Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {vehiclePerformance.map((vehicle, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/20">
                  <div>
                    <p className="font-medium">{vehicle.vehicle}</p>
                    <p className="text-sm text-muted-foreground">{vehicle.miles} miles</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{vehicle.fuel}</p>
                    <Badge variant={getMaintenanceVariant(vehicle.maintenance)} className="text-xs">
                      {vehicle.maintenance}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary Stats */}
      <Card className="fleet-fade-in">
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-500">94%</p>
              <p className="text-sm text-muted-foreground">On-time Delivery</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-500">8.2</p>
              <p className="text-sm text-muted-foreground">Avg MPG</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-500">3.2</p>
              <p className="text-sm text-muted-foreground">Safety Score</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-500">87%</p>
              <p className="text-sm text-muted-foreground">Driver Satisfaction</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export type { AnalyticsMetric }