import type React from "react"
import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/fleetfusion-dark/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { BarChart3, CalendarIcon, FileText, MapPin } from "lucide-react"
import { DataTable } from "@/registry/fleetfusion-dark/ui/data-table"
import type { ColumnDef } from "@tanstack/react-table"
import { PageHeader } from "@/registry/fleetfusion-dark/ui/page-header"

// Define a custom FuelIcon component since it's not in lucide-react
function FuelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 22h12" />
      <path d="M8 4v18" />
      <path d="M10 4v18" />
      <path d="M3 14h12" />
      <path d="M3 4h12" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 0 2 2" />
      <path d="M22 18h-5" />
    </svg>
  )
}

// Define types for IFTA data
type IFTATrip = {
  id: string
  date: string
  driver: string
  vehicle: string
  startLocation: string
  endLocation: string
  miles: number
  gallons: number
  state: string
}

type IFTAReport = {
  id: string
  quarter: string
  year: string
  totalMiles: number
  totalGallons: number
  avgMpg: number
  status: string
  dueDate: string
}

// Define columns for IFTA trips
const tripColumns: ColumnDef<IFTATrip>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "driver",
    header: "Driver",
  },
  {
    accessorKey: "vehicle",
    header: "Vehicle",
  },
  {
    accessorKey: "startLocation",
    header: "Origin",
  },
  {
    accessorKey: "endLocation",
    header: "Destination",
  },
  {
    accessorKey: "state",
    header: "Jurisdiction",
  },
  {
    accessorKey: "miles",
    header: "Miles",
  },
  {
    accessorKey: "gallons",
    header: "Gallons",
  },
]

// Define columns for IFTA reports
const reportColumns: ColumnDef<IFTAReport>[] = [
  {
    accessorKey: "quarter",
    header: "Quarter",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "totalMiles",
    header: "Total Miles",
  },
  {
    accessorKey: "totalGallons",
    header: "Total Gallons",
  },
  {
    accessorKey: "avgMpg",
    header: "Avg MPG",
  },
  {
    accessorKey: "status",
    header: "Status",      cell: ({ row }) => {
        const status = row.getValue("status") as string
        return (
          <div
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
              status === "Filed"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : status === "Draft"
                  ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                  : "bg-red-500/20 text-red-400 border border-red-500/30"
            }`}
          >
            {status}
          </div>
        )
      },
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <Button variant="ghost" size="sm" className="text-blue-500 hover:text-white hover:bg-blue-500">
          {status === "Filed" ? "View" : "Edit"}
        </Button>
      )
    },
  },
]

// Mock data for IFTA trips
const iftaTripsData: IFTATrip[] = [
  {
    id: "1",
    date: "2024-04-15",
    driver: "John Smith",
    vehicle: "TRK-101",
    startLocation: "Dallas, TX",
    endLocation: "Oklahoma City, OK",
    miles: 206,
    gallons: 32.5,
    state: "OK",
  },
  {
    id: "2",
    date: "2024-04-14",
    driver: "Michael Johnson",
    vehicle: "TRK-103",
    startLocation: "Houston, TX",
    endLocation: "New Orleans, LA",
    miles: 348,
    gallons: 54.2,
    state: "LA",
  },
  {
    id: "3",
    date: "2024-04-13",
    driver: "Robert Williams",
    vehicle: "TRK-105",
    startLocation: "San Antonio, TX",
    endLocation: "El Paso, TX",
    miles: 552,
    gallons: 87.6,
    state: "TX",
  },
  {
    id: "4",
    date: "2024-04-12",
    driver: "David Brown",
    vehicle: "TRK-101",
    startLocation: "Oklahoma City, OK",
    endLocation: "Kansas City, MO",
    miles: 352,
    gallons: 55.8,
    state: "MO",
  },
  {
    id: "5",
    date: "2024-04-11",
    driver: "James Miller",
    vehicle: "TRK-103",
    startLocation: "New Orleans, LA",
    endLocation: "Jackson, MS",
    miles: 183,
    gallons: 28.9,
    state: "MS",
  },
]

// Mock data for IFTA reports
const iftaReportsData: IFTAReport[] = [
  {
    id: "1",
    quarter: "Q1",
    year: "2024",
    totalMiles: 15420,
    totalGallons: 2425.8,
    avgMpg: 6.4,
    status: "Filed",
    dueDate: "2024-04-30",
  },
  {
    id: "2",
    quarter: "Q4",
    year: "2023",
    totalMiles: 14850,
    totalGallons: 2356.2,
    avgMpg: 6.3,
    status: "Filed",
    dueDate: "2024-01-31",
  },
  {
    id: "3",
    quarter: "Q3",
    year: "2023",
    totalMiles: 16240,
    totalGallons: 2540.6,
    avgMpg: 6.4,
    status: "Filed",
    dueDate: "2023-10-31",
  },
  {
    id: "4",
    quarter: "Q2",
    year: "2023",
    totalMiles: 15780,
    totalGallons: 2485.0,
    avgMpg: 6.3,
    status: "Filed",
    dueDate: "2023-07-31",
  },
]

export default function IFTADemo() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold text-white">IFTA Management</h1>
            <div className="flex items-center gap-2 bg-green-500/20 rounded-full px-3 py-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Live</span>
            </div>
          </div>
          <h2 className="text-sm text-white/90">Track and manage International Fuel Tax Agreement reporting with automated calculations</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold bg-transparent"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            Select Period
          </Button>
          <Button 
            size="sm" 
            className="rounded-md bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-800"
          >
            <FileText className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <MapPin className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">5,842</div>
          <p className="text-white text-sm">Total Miles (Q2 2024)</p>
          <div className="flex items-center text-blue-500 text-xs">
            <span>+12% from last quarter</span>
          </div>
        </Card>
        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <FuelIcon className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">912.5</div>
          <p className="text-white text-sm">Total Gallons (Q2 2024)</p>
          <div className="flex items-center text-blue-500 text-xs">
            <span>+8% from last quarter</span>
          </div>
        </Card>
        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <BarChart3 className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">6.4</div>
          <p className="text-white text-sm">Average MPG</p>
          <div className="flex items-center text-blue-500 text-xs">
            <span>+0.1 from last quarter</span>
          </div>
        </Card>
        <Card className="border-muted flex flex-col items-center space-y-2 rounded-lg border bg-black p-4 text-center">
          <MapPin className="h-12 w-12 text-blue-500" />
          <div className="text-2xl font-extrabold text-white">8</div>
          <p className="text-white text-sm">Jurisdictions</p>
          <div className="flex items-center text-blue-500 text-xs">
            <span>States traveled this quarter</span>
          </div>
        </Card>
      </div>

      {/* IFTA Tabs */}
      <Tabs defaultValue="trips" className="w-full">
        <TabsList className="w-full md:w-auto grid grid-cols-2 bg-black border border-muted">
          <TabsTrigger 
            value="trips" 
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
          >
            Trip Records
          </TabsTrigger>
          <TabsTrigger 
            value="reports"
            className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
          >
            Quarterly Reports
          </TabsTrigger>
        </TabsList>
        <TabsContent value="trips" className="mt-4">
          <Card className="border-muted rounded-lg border bg-black">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">IFTA Trip Records</CardTitle>
              <CardDescription className="text-white/70">Track interstate travel for IFTA reporting and tax calculations.</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Suspense fallback={<div className="text-white/70">Loading IFTA trip data...</div>}>
                <DataTable columns={tripColumns} data={iftaTripsData} />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="mt-4">
          <Card className="border-muted rounded-lg border bg-black">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">IFTA Quarterly Reports</CardTitle>
              <CardDescription className="text-white/70">Manage and submit your quarterly IFTA tax reports.</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Suspense fallback={<div className="text-white/70">Loading IFTA reports...</div>}>
                <DataTable columns={reportColumns} data={iftaReportsData} />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
