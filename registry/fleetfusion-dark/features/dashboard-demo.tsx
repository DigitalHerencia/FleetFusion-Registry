"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import {
  TrendingUp,
  AlertTriangle,
  Calendar,
  Plus,
  Truck,
  Users,
  Package,
  DollarSign,
  MapPin,
  BarChart3,
} from "lucide-react"

const mockKPIs = {
  activeVehicles: 10,
  activeDrivers: 12,
  totalLoads: 45,
  completedLoads: 32,
  pendingLoads: 8,
  inTransitLoads: 5,
  totalMiles: 24680,
  totalRevenue: 58750,
  upcomingMaintenance: 3,
  recentInspections: 8,
  failedInspections: 1,
  utilizationRate: "32.0%",
  revenuePerMile: "$2.38",
}

export function DashboardDemo() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-extrabold text-white">Fleet Dashboard</h1>
          <div className="flex items-center gap-2 bg-green-500/20 rounded-full px-3 py-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Live</span>
          </div>
        </div>
        <div className="text-sm text-white/90 font-medium">
          Real-time insights into fleet operations and performance
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <Truck className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">{mockKPIs.activeVehicles}</div>
          <p className="text-white text-sm">Active Vehicles</p>
          <div className="flex items-center text-blue-500 text-xs">
            <TrendingUp className="w-3 h-3 mr-1" />
            +2.1% from last month
          </div>
        </Card>

        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <DollarSign className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">${mockKPIs.totalRevenue.toLocaleString()}</div>
          <p className="text-white text-sm">Revenue (30d)</p>
          <div className="flex items-center text-blue-500 text-xs">
            <TrendingUp className="w-3 h-3 mr-1" />
            +12.5% from last month
          </div>
        </Card>

        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <Package className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">{mockKPIs.totalLoads}</div>
          <p className="text-white text-sm">Active Loads</p>
          <div className="text-blue-500 text-xs">
            {mockKPIs.completedLoads} completed, {mockKPIs.inTransitLoads} in transit
          </div>
        </Card>

        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <BarChart3 className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">{mockKPIs.utilizationRate}</div>
          <p className="text-white text-sm">Utilization Rate</p>
          <div className="text-blue-500 text-xs">Target: 35.0%</div>
        </Card>
      </div>

      {/* Secondary Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-muted rounded-lg border bg-black p-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Total Miles (30d)</CardTitle>
            <MapPin className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-extrabold text-white">{mockKPIs.totalMiles.toLocaleString()}</div>
            <div className="flex items-center text-blue-500 text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8.3% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-muted rounded-lg border bg-black p-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Upcoming Maintenance</CardTitle>
            <AlertTriangle className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-extrabold text-white">{mockKPIs.upcomingMaintenance}</div>
            <div className="text-blue-500 text-xs">7 days ahead</div>
          </CardContent>
        </Card>

        <Card className="border-muted rounded-lg border bg-black p-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Per Mile Avg</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-extrabold text-white">{mockKPIs.revenuePerMile}</div>
            <div className="text-blue-500 text-xs">Target: $2.50/mile</div>
          </CardContent>
        </Card>

        <Card className="border-muted rounded-lg border bg-black p-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Active Drivers</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-extrabold text-white">{mockKPIs.activeDrivers}</div>
            <div className="text-blue-500 text-xs">All drivers available</div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions and Alerts */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-muted rounded-lg border bg-black p-4 hover:border-blue-500 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center text-white">
              <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start rounded-lg bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-800">
              <Plus className="h-4 w-4 mr-2" />
              Create New Load
            </Button>
            <Button
              className="w-full justify-start border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold bg-transparent"
              variant="outline"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Maintenance
            </Button>
            <Button
              className="w-full justify-start border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold bg-transparent"
              variant="outline"
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              View Alerts
            </Button>
          </CardContent>
        </Card>

        <Card className="border-muted rounded-lg border bg-black p-4 hover:border-blue-500 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center text-white">
              <AlertTriangle className="h-5 w-5 mr-2 text-blue-500" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <span className="text-sm text-white font-medium">Vehicle #1234 maintenance due</span>
                <span className="text-xs text-white">2h ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <span className="text-sm text-white font-medium">HOS violation detected</span>
                <span className="text-xs text-white">4h ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <span className="text-sm text-white font-medium">Load #5678 delayed</span>
                <span className="text-xs text-white">6h ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-muted rounded-lg border bg-black p-4 hover:border-blue-500 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center text-white">
              <Calendar className="h-5 w-5 mr-2 text-blue-500" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <span className="text-sm text-white font-medium">5 loads departing</span>
                <span className="text-xs text-white">Morning</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <span className="text-sm text-white font-medium">3 loads arriving</span>
                <span className="text-xs text-white">Afternoon</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                <span className="text-sm text-white font-medium">2 maintenance scheduled</span>
                <span className="text-xs text-white">Evening</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
