import { Avatar, AvatarImage, AvatarFallback } from "@/registry/fleetfusion-dark/ui/avatar"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { Card, CardContent, CardHeader } from "@/registry/fleetfusion-dark/ui/card"
import { Shield, Phone, MapPin } from "lucide-react"
import { cn, getInitials } from "@/registry/fleetfusion-dark/lib/utils"

interface Driver {
  id: string
  name: string
  position: string
  license: string
  status: "active" | "inactive" | "suspended"
  phone?: string
  location?: string
  photoUrl?: string
  lastActivity?: string
  hoursWorked?: number
  hoursRemaining?: number
}

interface DriverCardProps {
  driver: Driver
  className?: string
  onClick?: () => void
}

export function DriverCard({ driver, className, onClick }: DriverCardProps) {
  const getStatusVariant = (status: Driver["status"]) => {
    switch (status) {
      case "active":
        return "success"
      case "inactive":
        return "neutral"
      case "suspended":
        return "danger"
      default:
        return "neutral"
    }
  }

  const getStatusLabel = (status: Driver["status"]) => {
    switch (status) {
      case "active":
        return "Active"
      case "inactive":
        return "Inactive"
      case "suspended":
        return "Suspended"
      default:
        return "Unknown"
    }
  }

  return (
    <Card 
      className={cn(
        "transition-all duration-200 hover:shadow-md",
        onClick && "cursor-pointer hover:ring-2 hover:ring-ring hover:ring-offset-2",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={driver.photoUrl} alt={driver.name} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {getInitials(driver.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg leading-none">{driver.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{driver.position}</p>
            </div>
          </div>
          <Badge variant={getStatusVariant(driver.status)}>
            {getStatusLabel(driver.status)}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {/* License Information */}
        <div className="flex items-center space-x-2 text-sm">
          <Shield className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">License:</span>
          <span className="font-medium">{driver.license}</span>
        </div>
        
        {/* Phone */}
        {driver.phone && (
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Phone:</span>
            <span className="font-medium">{driver.phone}</span>
          </div>
        )}
        
        {/* Location */}
        {driver.location && (
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Location:</span>
            <span className="font-medium">{driver.location}</span>
          </div>
        )}
        
        {/* Hours of Service */}
        {driver.hoursWorked !== undefined && driver.hoursRemaining !== undefined && (
          <div className="border-t pt-3 mt-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Hours of Service</span>
              <span className="text-sm text-muted-foreground">
                {driver.hoursRemaining}h remaining
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ 
                  width: `${(driver.hoursWorked / (driver.hoursWorked + driver.hoursRemaining)) * 100}%` 
                }}
              />
            </div>
          </div>
        )}
        
        {/* Last Activity */}
        {driver.lastActivity && (
          <div className="text-xs text-muted-foreground pt-2 border-t">
            Last activity: {driver.lastActivity}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export type { Driver, DriverCardProps }