import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/fleetfusion-dark/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { CalendarIcon, Download, BarChart3, DollarSign, Truck, User } from "lucide-react"
import { PerformanceMetrics } from "@/registry/fleetfusion-dark/business/analytics/performance-metrics"
import { FinancialMetrics } from "@/registry/fleetfusion-dark/business/analytics/financial-metrics"
import { DriverPerformance } from "@/registry/fleetfusion-dark/business/analytics/driver-performance"
import { VehicleUtilization } from "@/registry/fleetfusion-dark/business/analytics/vehicle-utilization"
import { PageHeader } from "@/registry/fleetfusion-dark/ui/page-header"

export default function AnalyticsDemo() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold text-white">Analytics Dashboard</h1>
            <div className="flex items-center gap-2 bg-green-500/20 rounded-full px-3 py-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Live</span>
            </div>
          </div>
          <h2 className="text-sm text-white/90">Track and analyze fleet performance metrics with real-time insights</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold bg-transparent"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            Last 30 Days
          </Button>
          <Button 
            size="sm" 
            className="rounded-md bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-800"
          >
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <DollarSign className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">$45,231.89</div>
          <p className="text-white text-sm">Total Revenue</p>
          <div className="flex items-center text-blue-500 text-xs">
            <span>+20.1% from last month</span>
          </div>
        </Card>
        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <Truck className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">24,565</div>
          <p className="text-white text-sm">Total Miles</p>
          <div className="flex items-center text-blue-500 text-xs">
            <span>+12.5% from last month</span>
          </div>
        </Card>
        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <BarChart3 className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">126</div>
          <p className="text-white text-sm">Load Count</p>
          <div className="flex items-center text-blue-500 text-xs">
            <span>+8.2% from last month</span>
          </div>
        </Card>
        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <User className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">87%</div>
          <p className="text-white text-sm">Driver Utilization</p>
          <div className="flex items-center text-blue-500 text-xs">
            <span>+5.1% from last month</span>
          </div>
        </Card>
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-2 md:grid-cols-4 bg-black border border-muted">
          <TabsTrigger 
            value="performance" 
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
          >
            Performance
          </TabsTrigger>
          <TabsTrigger 
            value="financial"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
          >
            Financial
          </TabsTrigger>
          <TabsTrigger 
            value="drivers"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
          >
            Drivers
          </TabsTrigger>
          <TabsTrigger 
            value="vehicles"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
          >
            Vehicles
          </TabsTrigger>
        </TabsList>
        <TabsContent value="performance" className="mt-4">
          <Card className="border-muted rounded-lg border bg-black">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">Performance Metrics</CardTitle>
              <CardDescription className="text-white/70">Key performance indicators for your fleet operations.</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Suspense fallback={<div className="text-white/70">Loading performance metrics...</div>}>
                <PerformanceMetrics timeRange={ "" } />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="financial" className="mt-4">
          <Card className="border-muted rounded-lg border bg-black">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">Financial Metrics</CardTitle>
              <CardDescription className="text-white/70">Revenue, expenses, and profitability analysis.</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Suspense fallback={<div className="text-white/70">Loading financial metrics...</div>}>
                <FinancialMetrics timeRange={ "" } />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="drivers" className="mt-4">
          <Card className="border-muted rounded-lg border bg-black">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">Driver Performance</CardTitle>
              <CardDescription className="text-white/70">Analyze driver productivity and efficiency.</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Suspense fallback={<div className="text-white/70">Loading driver performance data...</div>}>
                <DriverPerformance timeRange={ "" } />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="vehicles" className="mt-4">
          <Card className="border-muted rounded-lg border bg-black">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">Vehicle Utilization</CardTitle>
              <CardDescription className="text-white/70">Track vehicle usage and maintenance metrics.</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Suspense fallback={<div className="text-white/70">Loading vehicle utilization data...</div>}>
                <VehicleUtilization timeRange={ "" } />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
