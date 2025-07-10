import Link from "next/link"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { FleetDashboard } from "@/registry/fleetfusion-dark/business/fleet-dashboard"
import { 
  ArrowRight, 
  Code, 
  Palette, 
  Zap, 
  Shield, 
  Users, 
  Truck,
  BookOpen,
  Download,
  Star,
  CheckCircle
} from "lucide-react"

export default function HomePage() {
  // Sample data for the fleet dashboard preview
  const sampleStats = {
    totalVehicles: 24,
    activeDrivers: 18,
    totalTrips: 156,
    alertsCount: 3,
    revenue: 89420,
    fuelCost: 12340,
    maintenanceDue: 2,
    complianceIssues: 0,
  }

  const features = [
    {
      icon: Code,
      title: "50+ Components",
      description: "Comprehensive collection of UI components, business components, and feature blocks",
      color: "text-blue-500",
    },
    {
      icon: Palette,
      title: "Dark Theme First",
      description: "Carefully crafted dark theme optimized for fleet management interfaces",
      color: "text-purple-500",
    },
    {
      icon: Zap,
      title: "Ready to Use",
      description: "Copy-paste components with full TypeScript support and documentation",
      color: "text-yellow-500",
    },
    {
      icon: Shield,
      title: "Production Ready",
      description: "Battle-tested components from real fleet management systems",
      color: "text-green-500",
    },
  ]

  const stats = [
    { label: "Components", value: "50+", icon: Code },
    { label: "Business Modules", value: "20+", icon: Users },
    { label: "Feature Blocks", value: "15+", icon: Truck },
    { label: "GitHub Stars", value: "2.1k", icon: Star },
  ]

  return (
    <div className="flex flex-col space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <Badge variant="outline" className="px-4 py-2">
            <Star className="h-4 w-4 mr-2" />
            ShadCN UI Registry for Fleet Management
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            FleetFusion UI Registry
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            A comprehensive collection of reusable components, hooks, and feature modules 
            extracted from FleetFusion TMS. Build your fleet management app UI faster.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/components">
              <Code className="h-4 w-4 mr-2" />
              Browse Components
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/docs/installation">
              <BookOpen className="h-4 w-4 mr-2" />
              Installation Guide
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid gap-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-2">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Why Choose FleetFusion UI?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built specifically for fleet management applications with production-ready components
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card key={index} className="fleet-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">See It In Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive preview of FleetFusion components in a real dashboard
          </p>
        </div>
        
        <div className="border border-border rounded-lg p-6 bg-card">
          <FleetDashboard stats={sampleStats} />
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Get Started in Minutes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Install components directly into your project with the ShadCN CLI
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="fleet-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  1
                </div>
                Install CLI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                npm install -g shadcn@latest
              </div>
            </CardContent>
          </Card>
          
          <Card className="fleet-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  2
                </div>
                Add Components
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                shadcn add button
              </div>
            </CardContent>
          </Card>
          
          <Card className="fleet-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  3
                </div>
                Start Building
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                import {"{"} Button {"}"} from "./ui/button"
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Ready to Build Your Fleet App?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of developers using FleetFusion UI components to build better fleet management applications
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/components">
              <Code className="h-4 w-4 mr-2" />
              Explore Components
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com/fleetfusion/ui-registry" target="_blank">
              <Download className="h-4 w-4 mr-2" />
              View on GitHub
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}