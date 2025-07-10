import type React from "react"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { Bell, RefreshCw } from "lucide-react"

interface DashboardHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function DashboardHeader({ heading, text, children }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 px-2">
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {heading}
          </h1>
          <Badge variant="secondary" className="text-xs">
            Live
          </Badge>
        </div>
        {text && <p className="text-white text-lg">{text}</p>}
        <div className="flex items-center space-x-2 text-sm text-white">
          <span>Last updated: 2 minutes ago</span>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
            <RefreshCw className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" className="relative">
          <Bell className="h-4 w-4 mr-2" />
          Alerts
          <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
            3
          </Badge>
        </Button>
        {children}
      </div>
    </div>
  )
}
