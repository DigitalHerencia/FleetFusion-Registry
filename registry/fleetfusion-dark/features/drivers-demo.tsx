"use client"

import { useEffect, useState } from "react"
import { DashboardShell } from "@/registry/fleetfusion-dark/business/dashboard/dashboard-shell"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { Input } from "@/registry/fleetfusion-dark/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/fleetfusion-dark/ui/tabs"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { DriverCard } from "@/registry/fleetfusion-dark/business/drivers/driver-card"
import { DriverDetailsDialog } from "@/registry/fleetfusion-dark/business/drivers/driver-details-dialog"
import { Skeleton } from "@/registry/fleetfusion-dark/ui/skeleton"
import { Plus, Search, Filter } from "lucide-react"
import Link from "next/link"
import { PageHeader } from "@/registry/fleetfusion-dark/ui/page-header"

// Mock data
const mockDrivers = [
  {
    id: "f81d4e2e-bcf2-11e6-869b-7df92533d2db",
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    phone: "555-111-2222",
    status: "active",
    licenseNumber: "DL123456",
    licenseState: "NM",
    licenseExpiration: new Date("2026-05-15"),
    medicalCardExpiration: new Date("2025-08-20"),
    hireDate: new Date("2022-03-10"),
    notes: "Experienced driver with hazmat endorsement",
  },
  {
    id: "f81d4e2e-bcf2-11e6-869b-7df92533d2dc",
    firstName: "Maria",
    lastName: "Garcia",
    email: "maria.garcia@example.com",
    phone: "555-222-3333",
    status: "active",
    licenseNumber: "DL234567",
    licenseState: "TX",
    licenseExpiration: new Date("2025-11-30"),
    medicalCardExpiration: new Date("2025-04-15"),
    hireDate: new Date("2021-06-22"),
    notes: "Team driver capability",
  },
  {
    id: "f81d4e2e-bcf2-11e6-869b-7df92533d2dd",
    firstName: "Robert",
    lastName: "Johnson",
    email: "robert.johnson@example.com",
    phone: "555-333-4444",
    status: "active",
    licenseNumber: "DL345678",
    licenseState: "AZ",
    licenseExpiration: new Date("2024-09-18"),
    medicalCardExpiration: new Date("2024-12-05"),
    hireDate: new Date("2023-01-15"),
    notes: "Prefers southwest routes",
  },
  {
    id: "f81d4e2e-bcf2-11e6-869b-7df92533d2de",
    firstName: "Sarah",
    lastName: "Williams",
    email: "sarah.williams@example.com",
    phone: "555-444-5555",
    status: "active",
    licenseNumber: "DL456789",
    licenseState: "NM",
    licenseExpiration: new Date("2025-07-22"),
    medicalCardExpiration: new Date("2024-08-30"),
    hireDate: new Date("2022-11-08"),
    notes: "Excellent safety record",
  },
  {
    id: "f81d4e2e-bcf2-11e6-869b-7df92533d2df",
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@example.com",
    phone: "555-555-6666",
    status: "inactive",
    licenseNumber: "DL567890",
    licenseState: "CA",
    licenseExpiration: new Date("2026-02-14"),
    medicalCardExpiration: new Date("2025-03-10"),
    hireDate: new Date("2021-09-30"),
    terminationDate: new Date("2023-10-15"),
    notes: "On extended leave",
  },
]

// Mock recent loads
const mockRecentLoads = [
  {
    id: "a81d4e2e-bcf2-11e6-869b-7df92533d2db",
    referenceNumber: "L-1001",
    status: "in_transit",
    originCity: "El Paso",
    originState: "TX",
    destinationCity: "Albuquerque",
    destinationState: "NM",
    pickupDate: new Date("2025-05-01"),
    deliveryDate: new Date("2025-05-02"),
  },
  {
    id: "a81d4e2e-bcf2-11e6-869b-7df92533d2dd",
    referenceNumber: "L-1003",
    status: "completed",
    originCity: "Tucson",
    originState: "AZ",
    destinationCity: "El Paso",
    destinationState: "TX",
    pickupDate: new Date("2025-04-28"),
    deliveryDate: new Date("2025-04-29"),
  },
]

export default function DriversDemo() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDriver, setSelectedDriver] = useState<any>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleDriverClick = (driver: any) => {
    setSelectedDriver(driver)
    setIsDetailsOpen(true)
  }

  const activeDrivers = mockDrivers.filter((driver) => driver.status === "active")
  const inactiveDrivers = mockDrivers.filter((driver) => driver.status === "inactive")

  const filteredDrivers = mockDrivers.filter((driver) =>
    `${driver.firstName} ${driver.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const filteredActiveDrivers = activeDrivers.filter((driver) =>
    `${driver.firstName} ${driver.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()),
  )
  const filteredInactiveDrivers = inactiveDrivers.filter((driver) =>
    `${driver.firstName} ${driver.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex flex-col gap-6 p-6 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold text-white">Driver Management</h1>
            <div className="flex items-center gap-2 bg-green-500/20 rounded-full px-3 py-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Live</span>
            </div>
          </div>
          <h2 className="text-sm text-white/90">Manage your fleet drivers with compliance tracking and performance monitoring</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            className="rounded-md bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-800"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Driver
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Skeleton className="h-10 flex-1 bg-white/10" />
            <Skeleton className="h-10 w-full sm:w-10 bg-white/10" />
          </div>
          <Skeleton className="h-10 w-full bg-white/10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-48 w-full bg-white/10" />
              ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/70" />
              <Input
                type="search"
                placeholder="Search drivers..."
                className="pl-8 w-full bg-black border-muted text-white placeholder:text-white/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" className="w-full sm:w-auto h-10 sm:h-10 sm:aspect-square border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
              <Filter className="h-4 w-4" />
              <span className="sm:hidden ml-2">Filter</span>
            </Button>
          </div>

          {/* Driver Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-black border border-muted">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
              >
                All <Badge className="ml-2 bg-blue-500/20 text-blue-400 border-blue-500/30">{filteredDrivers.length}</Badge>
              </TabsTrigger>
              <TabsTrigger 
                value="active"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
              >
                Active <Badge className="ml-2 bg-green-500/20 text-green-400 border-green-500/30">{filteredActiveDrivers.length}</Badge>
              </TabsTrigger>
              <TabsTrigger 
                value="inactive"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
              >
                Inactive <Badge className="ml-2 bg-red-500/20 text-red-400 border-red-500/30">{filteredInactiveDrivers.length}</Badge>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDrivers.map((driver) => (
                  <DriverCard key={driver.id} driver={driver} onClick={() => handleDriverClick(driver)} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="active" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredActiveDrivers.map((driver) => (
                  <DriverCard key={driver.id} driver={driver} onClick={() => handleDriverClick(driver)} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="inactive" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInactiveDrivers.map((driver) => (
                  <DriverCard key={driver.id} driver={driver} onClick={() => handleDriverClick(driver)} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Driver Details Dialog */}
          {selectedDriver && (
            <DriverDetailsDialog
              driver={selectedDriver}
              recentLoads={mockRecentLoads}
              isOpen={isDetailsOpen}
              onClose={() => setIsDetailsOpen(false)}
            />
          )}
        </div>
      )}
    </div>
  )
}
