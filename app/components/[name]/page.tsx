"use client"

import { notFound } from "next/navigation"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/fleetfusion-dark/ui/avatar"
import { FleetDashboard } from "@/registry/fleetfusion-dark/business/fleet-dashboard"
import { DriverCard } from "@/registry/fleetfusion-dark/business/drivers/driver-card"
import { AnalyticsDemo } from "@/registry/fleetfusion-dark/features/analytics-demo"
import { 
  Copy, 
  Check, 
  Code, 
  Palette, 
  Blocks, 
  Zap, 
  Book,
  Package,
  ArrowLeft,
  ExternalLink
} from "lucide-react"
import registryData from "@/registry/fleetfusion-dark/registry.json"
import { useState } from "react"
import Link from "next/link"

interface ComponentDetailPageProps {
  params: Promise<{ name: string }>
}

export default function ComponentDetailPage({ params }: ComponentDetailPageProps) {
  const [copied, setCopied] = useState("")
  
  // In a real app, you would await the params
  // For now, we'll use a mock approach
  const resolvedParams = { name: "button" } // This would be: await params
  
  const item = registryData.items.find(i => i.name === resolvedParams.name)
  if (!item) return notFound()

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(id)
      setTimeout(() => setCopied(""), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "registry:ui":
        return Code
      case "registry:component":
        return Palette
      case "registry:block":
        return Blocks
      case "registry:hook":
        return Zap
      case "registry:lib":
        return Book
      case "registry:theme":
        return Package
      default:
        return Code
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "registry:ui":
        return "text-blue-500"
      case "registry:component":
        return "text-purple-500"
      case "registry:block":
        return "text-green-500"
      case "registry:hook":
        return "text-yellow-500"
      case "registry:lib":
        return "text-orange-500"
      case "registry:theme":
        return "text-pink-500"
      default:
        return "text-gray-500"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "registry:ui":
        return "UI Component"
      case "registry:component":
        return "Business Component"
      case "registry:block":
        return "Feature Block"
      case "registry:hook":
        return "Hook"
      case "registry:lib":
        return "Library"
      case "registry:theme":
        return "Theme"
      default:
        return "Component"
    }
  }

  const installCommand = `npx shadcn@latest add https://fleetfusion-registry.com/r/${item.name}.json`
  // Pass item as argument and guard against undefined
  const importExample = getImportExample(item)

  function getImportExample(item: typeof registryData.items[number] | undefined) {
    if (!item) return ""
    const { name, type, title } = item
    const componentName = title.replace(/\s+/g, "")
    if (type === "registry:ui") {
      return `import { ${componentName} } from "@/components/ui/${name}"`
    } else if (type === "registry:component") {
      return `import { ${componentName} } from "@/components/${name}"`
    } else if (type === "registry:hook") {
      return `import { ${name.replace("-", "")} } from "@/hooks/${name}"`
    } else if (type === "registry:lib") {
      return `import { ${name} } from "@/lib/${name}"`
    } else if (type === "registry:block") {
      return `import { ${componentName} } from "@/components/blocks/${name}"`
    }
    return `import { ${componentName} } from "@/components/${name}"`
  }

  const renderPreview = () => {
    switch (item.name) {
      case "button":
        return (
          <div className="flex flex-wrap gap-4 p-6">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
          </div>
        )
      case "card":
        return (
          <div className="p-6">
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This is a card component with header and content sections.
                </p>
              </CardContent>
            </Card>
          </div>
        )
      case "badge":
        return (
          <div className="flex flex-wrap gap-2 p-6">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
        )
      case "avatar":
        return (
          <div className="flex gap-4 p-6">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        )
      case "fleet-dashboard":
        return (
          <div className="p-6">
            <FleetDashboard 
              stats={{
                totalVehicles: 24,
                activeDrivers: 18,
                totalTrips: 156,
                alertsCount: 3,
                revenue: 89420,
                fuelCost: 12340,
                maintenanceDue: 2,
                complianceIssues: 0,
              }}
            />
          </div>
        )
      case "driver-card":
        return (
          <div className="p-6 max-w-sm">
            <DriverCard 
              driver={{
                id: "1",
                name: "John Smith",
                position: "Senior Driver",
                license: "CDL-A",
                status: "active",
                phone: "+1 (555) 123-4567",
                location: "Chicago, IL",
                lastActivity: "2 hours ago",
                hoursWorked: 6,
                hoursRemaining: 5,
              }}
            />
          </div>
        )
      case "analytics-demo":
        return (
          <div className="p-6">
            <AnalyticsDemo />
          </div>
        )
      case "use-toast":
        return (
          <div className="p-6">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                This is a hook component. See the usage example below.
              </p>
              <Button 
                onClick={() => {
                  // This would use the actual hook in a real implementation
                  alert("Toast notification would appear here")
                }}
              >
                Test Toast
              </Button>
            </div>
          </div>
        )
      case "utils":
        return (
          <div className="p-6">
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                This is a utility library. See the usage example below.
              </p>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                cn("text-sm", "font-medium", "text-primary")
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Preview not available for this component
            </p>
          </div>
        )
    }
  }

  const TypeIcon = getTypeIcon(item.type)

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <div>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/components">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Components
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <TypeIcon className={`h-8 w-8 ${getTypeColor(item.type)}`} />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{item.title}</h1>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline">{getTypeLabel(item.type)}</Badge>
          <Badge variant="secondary">{item.name}</Badge>
        </div>
      </div>

      {/* Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Live Preview
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="border-b border-border">
            {renderPreview()}
          </div>
        </CardContent>
      </Card>

      {/* Installation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Installation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Run the following command to add this component to your project:
            </p>
            <div className="relative">
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                {installCommand}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(installCommand, "install")}
              >
                {copied === "install" ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Usage Example
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Import and use the component in your React application:
            </p>
            <div className="relative">
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <div className="text-muted-foreground">Import the component</div>
                <div className="mb-2">{importExample}</div>
                <div className="text-muted-foreground">Use it in your JSX</div>
                <div>&lt;{item.title.replace(/\s+/g, "")} /&gt;</div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard(`${importExample}\n\n<${item.title.replace(/\s+/g, "")} />`, "usage")}
              >
                {copied === "usage" ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dependencies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Dependencies
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {item.dependencies.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">External Dependencies</h4>
              <div className="grid gap-2">
                {item.dependencies.map((dep) => (
                  <div key={dep} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                    <code className="text-sm">{dep}</code>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`https://www.npmjs.com/package/${dep}`} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {item.registryDependencies.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">Registry Dependencies</h4>
              <div className="grid gap-2">
                {item.registryDependencies.map((dep) => (
                  <div key={dep} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                    <code className="text-sm">{dep}</code>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/components/${dep}`}>
                        <ArrowLeft className="h-4 w-4 rotate-180" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {item.dependencies.length === 0 && item.registryDependencies.length === 0 && (
            <p className="text-sm text-muted-foreground">
              This component has no external dependencies.
            </p>
          )}
        </CardContent>
      </Card>

      {/* Files */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Files
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {item.files.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                <div>
                  <code className="text-sm">{file.path.split('/').pop()}</code>
                  <p className="text-xs text-muted-foreground">
                    {file.type} • {file.path}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}