"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { MapPin, Clock, Truck, User, Plus, Filter } from "lucide-react"

const loadData = [
  {
    id: "L-1001",
    company: "ABC Distributors",
    origin: "El Paso, TX",
    destination: "Albuquerque, NM",
    pickup: "2025-04-30",
    driver: "John Smith",
    vehicle: "T-101",
    status: "in transit",
  },
  {
    id: "L-1002",
    company: "XYZ Logistics",
    origin: "Las Cruces, NM",
    destination: "Phoenix, AZ",
    pickup: "2025-05-01",
    driver: "Maria Garcia",
    vehicle: "T-102",
    status: "assigned",
  },
  {
    id: "L-1003",
    company: "Southwest Freight",
    origin: "Tucson, AZ",
    destination: "El Paso, TX",
    pickup: "2025-04-27",
    driver: "Robert Johnson",
    vehicle: "T-103",
    status: "completed",
  },
  {
    id: "L-1004",
    company: "Desert Shipping Co.",
    origin: "Denver, CO",
    destination: "Santa Fe, NM",
    pickup: "2025-05-04",
    driver: "",
    vehicle: "",
    status: "pending",
  },
  {
    id: "L-1005",
    company: "Mountain Transport",
    origin: "Salt Lake City, UT",
    destination: "Las Vegas, NV",
    pickup: "2025-05-06",
    driver: "",
    vehicle: "",
    status: "pending",
  },
  {
    id: "L-1006",
    company: "Mountain Transport",
    origin: "Salt Lake City, UT",
    destination: "Las Vegas, NV",
    pickup: "2025-05-06",
    driver: "",
    vehicle: "",
    status: "pending",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "in transit":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    case "assigned":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30"
    case "completed":
      return "bg-green-500/20 text-green-400 border-green-500/30"
    case "pending":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }
}

const statusCounts = {
  all: loadData.length,
  pending: loadData.filter((load) => load.status === "pending").length,
  assigned: loadData.filter((load) => load.status === "assigned").length,
  "in transit": loadData.filter((load) => load.status === "in transit").length,
  completed: loadData.filter((load) => load.status === "completed").length,
}

export function DispatchDemo() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredLoads, setFilteredLoads] = useState(loadData)

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    if (filter === "all") {
      setFilteredLoads(loadData)
    } else {
      setFilteredLoads(loadData.filter((load) => load.status === filter))
    }
  }

  return (
    <div className="flex flex-col gap-6 p-6 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-extrabold text-white">Dispatch Board</h1>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Live</Badge>
        </div>
          <h2 className="text-sm text-white/90">Interactive load management with real-time updates</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" className="rounded-md bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-800">
            <Plus className="mr-2 h-4 w-4" />
            New Load
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" className="text-blue-500 hover:text-white hover:bg-blue-500">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {Object.entries(statusCounts).map(([status, count]) => (
          <Button
            key={status}
            variant={activeFilter === status ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterChange(status)}
            className={
              activeFilter === status
                ? "rounded-md bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-800"
                : "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold"
            }
          >
            {status === "all" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)} {count}
          </Button>
        ))}
      </div>

      {/* Load Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLoads.map((load) => (
          <Card
            key={load.id}
            className="border-muted rounded-md border bg-black hover:border-blue-500 transition-colors"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-white text-lg font-semibold">{load.id}</CardTitle>
                <Badge className={getStatusColor(load.status)}>{load.status}</Badge>
              </div>
              <p className="text-white text-sm">{load.company}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">Origin</span>
                </div>
                <p className="text-white ml-6">{load.origin}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">Destination</span>
                </div>
                <p className="text-white ml-6">{load.destination}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white/90">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium">Pickup</span>
                </div>
                <p className="text-white ml-6">{load.pickup}</p>
              </div>

              {load.driver && (
                <div className="pt-3 border-t border-muted">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/90">
                      <User className="w-4 h-4 text-blue-500" />
                      <span className="text-sm font-medium">Driver:</span>
                      <span className="text-white">{load.driver}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 mt-1">
                    <Truck className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">Vehicle:</span>
                    <span className="text-white">{load.vehicle}</span>
                  </div>
                </div>
              )}

              {!load.driver && (
                <div className="pt-3 border-t border-muted">
                  <Button
                    size="sm"
                    className="w-full rounded-md bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-800"
                  >
                    Assign Driver
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
