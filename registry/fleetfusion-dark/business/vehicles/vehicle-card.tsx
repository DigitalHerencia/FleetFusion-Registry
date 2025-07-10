"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/registry/fleetfusion-dark/ui/card"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { Truck, Calendar, Gauge, AlertTriangle } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface Vehicle {
  id: string
  unitNumber: string
  type: string
  status: string
  make?: string
  model?: string
  year?: number
  vin?: string
  licensePlate?: string
  state?: string
  currentOdometer?: number
  lastOdometerUpdate?: Date
  maintenanceRecords?: {
    id: string
    type: string
    status: string
    description: string
    scheduledDate?: Date
  }[]
}

interface VehicleCardProps {
  vehicle: Vehicle
  onClick: () => void
}

export function VehicleCard({ vehicle, onClick }: VehicleCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "inactive":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "maintenance":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getTypeIcon = (type: string) => {
    return <Truck className="h-4 w-4 text-blue-500" />
  }

  const upcomingMaintenance = vehicle.maintenanceRecords?.find(
    (record) => record.status === "scheduled" && record.scheduledDate,
  )

  return (
    <Card className="border-muted rounded-md border bg-black hover:border-blue-500 transition-colors cursor-pointer" onClick={onClick}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {getTypeIcon(vehicle.type)}
            <h3 className="font-medium text-white">{vehicle.unitNumber}</h3>
          </div>
          <Badge className={getStatusColor(vehicle.status)}>{vehicle.status.replace("_", " ")}</Badge>
        </div>
        <p className="text-sm text-white/70">
          {vehicle.make} {vehicle.model} {vehicle.year}
        </p>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2 text-sm">
          {vehicle.vin && (
            <div className="flex items-center gap-2 text-white/90">
              <span className="text-white/70">VIN:</span>
              <span className="font-mono text-white">{vehicle.vin}</span>
            </div>
          )}
          {vehicle.licensePlate && (
            <div className="flex items-center gap-2 text-white/90">
              <span className="text-white/70">License:</span>
              <span className="text-white">
                {vehicle.licensePlate} ({vehicle.state})
              </span>
            </div>
          )}
          {vehicle.currentOdometer && (
            <div className="flex items-center gap-2 text-white/90">
              <Gauge className="h-4 w-4 text-blue-500" />
              <span className="text-white">
                {vehicle.currentOdometer.toLocaleString()} miles
                {vehicle.lastOdometerUpdate && (
                  <span className="text-xs text-white/70 ml-1">
                    (as of {formatDate(vehicle.lastOdometerUpdate)})
                  </span>
                )}
              </span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t border-muted pt-3">
        {upcomingMaintenance ? (
          <div className="w-full flex items-center gap-2 text-xs">
            <AlertTriangle className="h-3.5 w-3.5 text-yellow-500" />
            <span className="text-yellow-400">
              Maintenance scheduled: {formatDate(upcomingMaintenance.scheduledDate!)}
            </span>
          </div>
        ) : (
          <div className="w-full flex items-center gap-2 text-xs text-white/70">
            <Calendar className="h-3.5 w-3.5 text-blue-500" />
            <span>No upcoming maintenance</span>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
