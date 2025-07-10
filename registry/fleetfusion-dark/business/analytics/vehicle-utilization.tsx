"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/registry/fleetfusion-dark/ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/fleetfusion-dark/ui/table"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"

interface VehicleUtilizationProps {
  timeRange: string
}

const mockVehicleData = [
  {
    number: "T-101",
    type: "Tractor",
    miles: 14250,
    utilization: 92,
    fuelEfficiency: 6.4,
    maintenance: 1250,
    status: "Active",
  },
  {
    number: "T-102",
    type: "Tractor",
    miles: 13850,
    utilization: 88,
    fuelEfficiency: 6.2,
    maintenance: 1450,
    status: "Active",
  },
  {
    number: "T-103",
    type: "Tractor",
    miles: 14050,
    utilization: 90,
    fuelEfficiency: 6.5,
    maintenance: 950,
    status: "Maintenance",
  },
  {
    number: "TR-201",
    type: "Trailer",
    miles: 13650,
    utilization: 87,
    fuelEfficiency: "N/A",
    maintenance: 750,
    status: "Active",
  },
  {
    number: "TR-202",
    type: "Trailer",
    miles: 12950,
    utilization: 83,
    fuelEfficiency: "N/A",
    maintenance: 850,
    status: "Active",
  },
]

export function VehicleUtilization({ timeRange }: VehicleUtilizationProps) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-medium mb-4">Miles by Vehicle</h3>
          <ChartContainer
            config={{
              miles: {
                label: "Miles",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockVehicleData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="number" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="miles" fill="var(--color-miles)" name="Miles" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Utilization by Vehicle (%)</h3>
          <ChartContainer
            config={{
              utilization: {
                label: "Utilization",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockVehicleData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="number" />
                <YAxis domain={[70, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="utilization" fill="var(--color-utilization)" name="Utilization" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Vehicle Performance Metrics</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vehicle #</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Miles</TableHead>
              <TableHead className="text-right">Utilization</TableHead>
              <TableHead className="text-right">MPG</TableHead>
              <TableHead className="text-right">Maintenance Cost</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockVehicleData.map((vehicle) => (
              <TableRow key={vehicle.number}>
                <TableCell className="font-medium">{vehicle.number}</TableCell>
                <TableCell>{vehicle.type}</TableCell>
                <TableCell className="text-right">{vehicle.miles.toLocaleString()}</TableCell>
                <TableCell className="text-right">{vehicle.utilization}%</TableCell>
                <TableCell className="text-right">
                  {vehicle.fuelEfficiency === "N/A" ? "N/A" : vehicle.fuelEfficiency.toString()}
                </TableCell>
                <TableCell className="text-right">${vehicle.maintenance.toLocaleString()}</TableCell>
                <TableCell>
                  {vehicle.status === "Active" ? (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                  ) : (
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Maintenance</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
