"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { Input } from "@/registry/fleetfusion-dark/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/registry/fleetfusion-dark/ui/tabs"
import { Search, Plus } from "lucide-react"
import { VehicleCard } from "@/registry/fleetfusion-dark/business/vehicles/vehicle-card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/registry/fleetfusion-dark/ui/dialog"
import { Label } from "@/registry/fleetfusion-dark/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/fleetfusion-dark/ui/select"
import { PageHeader } from "@/registry/fleetfusion-dark/ui/page-header"

// Mock vehicle data
const mockVehicles = [
  {
    id: "d81d4e2e-bcf2-11e6-869b-7df92533d2db",
    unitNumber: "T-101",
    type: "tractor",
    status: "active",
    make: "Freightliner",
    model: "Cascadia",
    year: 2022,
    vin: "1FUJGHDV0CLBP8834",
    licensePlate: "ABC1234",
    state: "NM",
    currentOdometer: 125000,
    lastOdometerUpdate: new Date("2025-04-30"),
    fuelType: "diesel",
    maintenanceRecords: [
      {
        id: "g81d4e2e-bcf2-11e6-869b-7df92533d2db",
        type: "preventive",
        status: "completed",
        description: "Oil change and filter replacement",
        odometer: 120000,
        cost: 350.0,
        vendor: "FleetCare Service Center",
        completedDate: new Date("2025-04-20"),
        scheduledDate: new Date("2025-04-20"),
        notes: "Used synthetic oil",
      },
    ],
  },
  {
    id: "d81d4e2e-bcf2-11e6-869b-7df92533d2dc",
    unitNumber: "T-102",
    type: "tractor",
    status: "active",
    make: "Peterbilt",
    model: "579",
    year: 2021,
    vin: "1XPBD49X1MD456789",
    licensePlate: "XYZ5678",
    state: "NM",
    currentOdometer: 98000,
    lastOdometerUpdate: new Date("2025-04-28"),
    fuelType: "diesel",
    maintenanceRecords: [
      {
        id: "g81d4e2e-bcf2-11e6-869b-7df92533d2dc",
        type: "repair",
        status: "completed",
        description: "Replace air filter and cabin filter",
        odometer: 95000,
        cost: 280.0,
        vendor: "FleetCare Service Center",
        completedDate: new Date("2025-04-15"),
        scheduledDate: new Date("2025-04-15"),
        notes: "Routine replacement",
      },
    ],
  },
  {
    id: "d81d4e2e-bcf2-11e6-869b-7df92533d2dd",
    unitNumber: "T-103",
    type: "tractor",
    status: "active",
    make: "Kenworth",
    model: "T680",
    year: 2023,
    vin: "1XKAD49X1NJ123456",
    licensePlate: "DEF9012",
    state: "NM",
    currentOdometer: 45000,
    lastOdometerUpdate: new Date("2025-04-25"),
    fuelType: "diesel",
    maintenanceRecords: [
      {
        id: "g81d4e2e-bcf2-11e6-869b-7df92533d2de",
        type: "preventive",
        status: "scheduled",
        description: "50,000 mile service",
        odometer: 45000,
        cost: 850.0,
        vendor: "FleetCare Service Center",
        scheduledDate: new Date("2025-05-10"),
        notes: "Comprehensive service including all fluids and filters",
      },
    ],
  },
  {
    id: "d81d4e2e-bcf2-11e6-869b-7df92533d2de",
    unitNumber: "T-104",
    type: "tractor",
    status: "maintenance",
    make: "Volvo",
    model: "VNL",
    year: 2020,
    vin: "4V4NC9EH4LN234567",
    licensePlate: "GHI3456",
    state: "NM",
    currentOdometer: 210000,
    lastOdometerUpdate: new Date("2025-04-20"),
    fuelType: "diesel",
    maintenanceRecords: [
      {
        id: "g81d4e2e-bcf2-11e6-869b-7df92533d2dd",
        type: "repair",
        status: "in_progress",
        description: "Transmission fluid leak repair",
        odometer: 208000,
        cost: 1200.0,
        vendor: "Truck Repair Specialists",
        scheduledDate: new Date("2025-05-02"),
        notes: "Parts on order, estimated completion in 2 days",
      },
    ],
  },
  {
    id: "e81d4e2e-bcf2-11e6-869b-7df92533d2db",
    unitNumber: "TR-201",
    type: "trailer",
    status: "active",
    make: "Great Dane",
    model: "Everest",
    year: 2021,
    vin: "1GRAA06Y5KM123456",
    licensePlate: "TRL1234",
    state: "NM",
  },
  {
    id: "e81d4e2e-bcf2-11e6-869b-7df92533d2dc",
    unitNumber: "TR-202",
    type: "trailer",
    status: "active",
    make: "Utility",
    model: "3000R",
    year: 2022,
    vin: "1UYVS2538NM234567",
    licensePlate: "TRL5678",
    state: "NM",
  },
  {
    id: "e81d4e2e-bcf2-11e6-869b-7df92533d2de",
    unitNumber: "TR-204",
    type: "trailer",
    status: "maintenance",
    make: "Hyundai",
    model: "Translead",
    year: 2019,
    vin: "3H3V532C1KT456789",
    licensePlate: "TRL3456",
    state: "NM",
    maintenanceRecords: [
      {
        id: "g81d4e2e-bcf2-11e6-869b-7df92533d2df",
        type: "repair",
        status: "scheduled",
        description: "Replace worn brake pads",
        cost: 450.0,
        vendor: "Trailer Repair Shop",
        scheduledDate: new Date("2025-05-05"),
        notes: "Scheduled during non-use period",
      },
    ],
  },
]

export default function VehiclesDemo() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [isAddVehicleOpen, setIsAddVehicleOpen] = useState(false)

  // Form state for new vehicle
  const [newVehicle, setNewVehicle] = useState({
    unitNumber: "",
    type: "tractor",
    make: "",
    model: "",
    year: new Date().getFullYear(),
    vin: "",
    licensePlate: "",
    state: "",
    status: "active",
  })

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleVehicleClick = (vehicle: any) => {
    setSelectedVehicle(vehicle)
    setIsDetailsOpen(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewVehicle((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setNewVehicle((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddVehicle = () => {
    // In a real app, this would send data to the server
    console.log("Adding new vehicle:", newVehicle)

    // Reset form and close dialog
    setNewVehicle({
      unitNumber: "",
      type: "tractor",
      make: "",
      model: "",
      year: new Date().getFullYear(),
      vin: "",
      licensePlate: "",
      state: "",
      status: "active",
    })
    setIsAddVehicleOpen(false)
  }

  const filteredVehicles = mockVehicles.filter((vehicle) => {
    // Filter by search term
    const matchesSearch =
      vehicle.unitNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (vehicle.make?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (vehicle.model?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      vehicle.status.toLowerCase().includes(searchTerm.toLowerCase())

    // Filter by vehicle type
    if (activeTab === "all") return matchesSearch
    if (activeTab === "tractors") return matchesSearch && vehicle.type === "tractor"
    if (activeTab === "trailers") return matchesSearch && vehicle.type === "trailer"

    return matchesSearch
  })

  return (
    <div className="flex flex-col gap-6 p-6 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold text-white">Fleet Vehicles</h1>
            <div className="flex items-center gap-2 bg-green-500/20 rounded-full px-3 py-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Live</span>
            </div>
          </div>
          <h2 className="text-sm text-white/90">Manage your fleet of tractors and trailers with real-time tracking</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            onClick={() => setIsAddVehicleOpen(true)}
            size="sm" 
            className="rounded-md bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-800"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Vehicle
          </Button>
        </div>
      </div>

      {/* Filter Tabs and Search */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
          <TabsList className="grid w-full grid-cols-3 bg-black border border-muted">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
            >
              All Vehicles
            </TabsTrigger>
            <TabsTrigger 
              value="tractors"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
            >
              Tractors
            </TabsTrigger>
            <TabsTrigger 
              value="trailers"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
            >
              Trailers
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="relative w-full md:w-auto mt-2 md:mt-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/70" />
          <Input
            placeholder="Search vehicles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 w-full md:w-[250px] bg-black border-muted text-white placeholder:text-white/50"
          />
        </div>
      </div>

      {/* Vehicle Cards Grid */}
      {filteredVehicles.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-white/70">No vehicles found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} onClick={() => handleVehicleClick(vehicle)} />
          ))}
        </div>
      )}

      {/* Add Vehicle Dialog */}
      <Dialog open={isAddVehicleOpen} onOpenChange={setIsAddVehicleOpen}>
        <DialogContent className="sm:max-w-[500px] bg-black border-muted text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Add New Vehicle</DialogTitle>
            <DialogDescription className="text-white/70">
              Enter the details for the new vehicle. All fields marked with * are required.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="unitNumber" className="text-white">Unit Number *</Label>
                <Input
                  id="unitNumber"
                  name="unitNumber"
                  value={newVehicle.unitNumber}
                  onChange={handleInputChange}
                  placeholder="e.g., T-105"
                  className="bg-black border-muted text-white placeholder:text-white/50"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type" className="text-white">Vehicle Type *</Label>
                <Select value={newVehicle.type} onValueChange={(value) => handleSelectChange("type", value)}>
                  <SelectTrigger className="bg-black border-muted text-white">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-muted text-white">
                    <SelectItem value="tractor">Tractor</SelectItem>
                    <SelectItem value="trailer">Trailer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="make" className="text-white">Make</Label>
                <Input
                  id="make"
                  name="make"
                  value={newVehicle.make}
                  onChange={handleInputChange}
                  placeholder="e.g., Freightliner"
                  className="bg-black border-muted text-white placeholder:text-white/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model" className="text-white">Model</Label>
                <Input
                  id="model"
                  name="model"
                  value={newVehicle.model}
                  onChange={handleInputChange}
                  placeholder="e.g., Cascadia"
                  className="bg-black border-muted text-white placeholder:text-white/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year" className="text-white">Year</Label>
                <Input
                  id="year"
                  name="year"
                  type="number"
                  value={newVehicle.year}
                  onChange={handleInputChange}
                  placeholder="e.g., 2023"
                  className="bg-black border-muted text-white placeholder:text-white/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status" className="text-white">Status *</Label>
                <Select value={newVehicle.status} onValueChange={(value) => handleSelectChange("status", value)}>
                  <SelectTrigger className="bg-black border-muted text-white">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-muted text-white">
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="vin" className="text-white">VIN</Label>
              <Input
                id="vin"
                name="vin"
                value={newVehicle.vin}
                onChange={handleInputChange}
                placeholder="Vehicle Identification Number"
                className="bg-black border-muted text-white placeholder:text-white/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="licensePlate" className="text-white">License Plate</Label>
                <Input
                  id="licensePlate"
                  name="licensePlate"
                  value={newVehicle.licensePlate}
                  onChange={handleInputChange}
                  placeholder="e.g., ABC1234"
                  className="bg-black border-muted text-white placeholder:text-white/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state" className="text-white">State</Label>
                <Input
                  id="state"
                  name="state"
                  value={newVehicle.state}
                  onChange={handleInputChange}
                  placeholder="e.g., NM"
                  maxLength={2}
                  className="bg-black border-muted text-white placeholder:text-white/50"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="border-muted text-white hover:bg-white/10">
                Cancel
              </Button>
            </DialogClose>
            <Button 
              onClick={handleAddVehicle}
              className="bg-blue-500 hover:bg-blue-800 text-white"
            >
              Add Vehicle
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
