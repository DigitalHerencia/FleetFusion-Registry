"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import {
  CalendarIcon,
  ClipboardCheck,
  FileText,
  TruckIcon,
  UserIcon,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"

// Mock data for drivers compliance
const driverComplianceData = [
  {
    id: "1",
    name: "John Smith",
    status: "Compliant",
    licenseExpiry: "2024-12-15",
    medicalExpiry: "2024-10-20",
    lastHosViolation: "None",
    dutyStatus: "Off Duty",
    availableHours: 11,
  },
  {
    id: "2",
    name: "Michael Johnson",
    status: "Warning",
    licenseExpiry: "2024-08-30",
    medicalExpiry: "2024-07-15",
    lastHosViolation: "2024-03-10",
    dutyStatus: "Driving",
    availableHours: 4,
  },
  {
    id: "3",
    name: "Robert Williams",
    status: "Non-Compliant",
    licenseExpiry: "2024-05-10",
    medicalExpiry: "2024-04-30",
    lastHosViolation: "2024-04-05",
    dutyStatus: "On Duty",
    availableHours: 0,
  },
  {
    id: "4",
    name: "David Brown",
    status: "Compliant",
    licenseExpiry: "2025-01-20",
    medicalExpiry: "2024-11-15",
    lastHosViolation: "None",
    dutyStatus: "Sleeper",
    availableHours: 8,
  },
  {
    id: "5",
    name: "James Miller",
    status: "Compliant",
    licenseExpiry: "2024-10-05",
    medicalExpiry: "2024-09-25",
    lastHosViolation: "None",
    dutyStatus: "Off Duty",
    availableHours: 11,
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Compliant":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "Warning":
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />
    case "Non-Compliant":
      return <XCircle className="h-4 w-4 text-red-500" />
    default:
      return null
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Compliant":
      return "bg-green-500/20 text-green-400 border-green-500/30"
    case "Warning":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    case "Non-Compliant":
      return "bg-red-500/20 text-red-400 border-red-500/30"
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }
}

export function ComplianceDemo() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Compliance Management</h1>
          <p className="text-white/90 font-medium">
            Monitor and manage regulatory compliance with real-time status tracking
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold bg-transparent"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            Schedule Audit
          </Button>
          <Button size="sm" className="rounded-md bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-800">
            <FileText className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <UserIcon className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">80%</div>
          <p className="text-white text-sm">Driver Compliance Rate</p>
        </Card>
        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <TruckIcon className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">80%</div>
          <p className="text-white text-sm">Vehicle Compliance Rate</p>
        </Card>
        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <ClipboardCheck className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">2</div>
          <p className="text-white text-sm">HOS Violations (30d)</p>
        </Card>
        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <FileText className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">90%</div>
          <p className="text-white text-sm">Document Compliance</p>
        </Card>
      </div>

      {/* Driver Compliance Table */}
      <Card className="border-muted rounded-lg border bg-black">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-white">Driver Compliance Status</CardTitle>
          <CardDescription className="text-white">
            Real-time monitoring of driver compliance with regulations including HOS, licenses, and medical
            certifications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-muted">
                  <th className="text-left py-3 px-4 text-white font-medium">Driver Name</th>
                  <th className="text-left py-3 px-4 text-white font-medium">Status</th>
                  <th className="text-left py-3 px-4 text-white font-medium">License Expiry</th>
                  <th className="text-left py-3 px-4 text-white font-medium">Medical Expiry</th>
                  <th className="text-left py-3 px-4 text-white font-medium">Last Violation</th>
                  <th className="text-left py-3 px-4 text-white font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {driverComplianceData.map((driver) => (
                  <tr key={driver.id} className="border-b border-muted hover:bg-white/5">
                    <td className="py-3 px-4 text-white font-medium">{driver.name}</td>
                    <td className="py-3 px-4">
                      <Badge className={getStatusColor(driver.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(driver.status)}
                          {driver.status}
                        </div>
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-white/90">{driver.licenseExpiry}</td>
                    <td className="py-3 px-4 text-white/90">{driver.medicalExpiry}</td>
                    <td className="py-3 px-4 text-white/90">{driver.lastHosViolation}</td>
                    <td className="py-3 px-4">
                      <Button size="sm" variant="ghost" className="text-blue-500 hover:text-white hover:bg-blue-500">
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
