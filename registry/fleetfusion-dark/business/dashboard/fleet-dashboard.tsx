import { Card, CardContent, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { 
  Truck, 
  Users, 
  MapPin, 
  AlertTriangle, 
  TrendingUp, 
  Calendar,
  Clock,
  DollarSign
} from "lucide-react"
import { cn } from "@/registry/fleetfusion-dark/lib/utils"

interface FleetStats {
  totalVehicles: number
  activeDrivers: number
  totalTrips: number
  alertsCount: number
  revenue: number
  fuelCost: number
  maintenanceDue: number
  complianceIssues: number
}

interface FleetDashboardProps {
  stats: FleetStats
  className?: string
}

export function FleetDashboard({ stats, className }: FleetDashboardProps) {
  const kpiCards = [
    {
      title: "Total Vehicles",
      value: stats.totalVehicles,
      icon: Truck,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      suffix: "",
    },
    {
      title: "Active Drivers",
      value: stats.activeDrivers,
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      suffix: "",
    },
    {
      title: "Total Trips",
      value: stats.totalTrips,
      icon: MapPin,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      suffix: "",
    },
    {
      title: "Active Alerts",
      value: stats.alertsCount,
      icon: AlertTriangle,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      suffix: "",
    },
  ]

  const financialCards = [
    {
      title: "Revenue",
      value: stats.revenue,
      icon: DollarSign,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      prefix: "$",
      suffix: "",
    },
    {
      title: "Fuel Cost",
      value: stats.fuelCost,
      icon: TrendingUp,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      prefix: "$",
      suffix: "",
    },
  ]

  const complianceCards = [
    {
      title: "Maintenance Due",
      value: stats.maintenanceDue,
      icon: Clock,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      suffix: " vehicles",
    },
    {
      title: "Compliance Issues",
      value: stats.complianceIssues,
      icon: AlertTriangle,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      suffix: " issues",
    },
  ]

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fleet Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your fleet operations and performance
          </p>
        </div>
        <Button>
          <Calendar className="h-4 w-4 mr-2" />
          View Reports
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiCards.map((card, index) => (
          <Card key={index} className="fleet-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <div className={cn("p-2 rounded-full", card.bgColor)}>
                <card.icon className={cn("h-4 w-4", card.color)} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(card.value)}{card.suffix}
              </div>
              <p className="text-xs text-muted-foreground">
                Updated just now
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Financial Overview */}
      <div className="grid gap-4 md:grid-cols-2">
        {financialCards.map((card, index) => (
          <Card key={index} className="fleet-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <div className={cn("p-2 rounded-full", card.bgColor)}>
                <card.icon className={cn("h-4 w-4", card.color)} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {card.prefix}{formatNumber(card.value)}{card.suffix}
              </div>
              <p className="text-xs text-muted-foreground">
                This month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Compliance Overview */}
      <div className="grid gap-4 md:grid-cols-2">
        {complianceCards.map((card, index) => (
          <Card key={index} className="fleet-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <div className={cn("p-2 rounded-full", card.bgColor)}>
                <card.icon className={cn("h-4 w-4", card.color)} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatNumber(card.value)}{card.suffix}
              </div>
              <div className="mt-2">
                <Badge variant={card.value > 0 ? "destructive" : "default"}>
                  {card.value > 0 ? "Needs Attention" : "All Good"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="fleet-fade-in">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Users className="h-4 w-4 mr-2" />
              Add Driver
            </Button>
            <Button variant="outline" size="sm">
              <Truck className="h-4 w-4 mr-2" />
              Add Vehicle
            </Button>
            <Button variant="outline" size="sm">
              <MapPin className="h-4 w-4 mr-2" />
              Create Trip
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Maintenance
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export type { FleetStats, FleetDashboardProps }