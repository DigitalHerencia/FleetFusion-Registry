import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { 
  BookOpen, 
  Code, 
  Download, 
  Settings, 
  Zap, 
  Shield,
  ArrowRight,
  ExternalLink
} from "lucide-react"

export default function DocsPage() {
  const documentationSections = [
    {
      title: "Getting Started",
      description: "Learn how to install and set up FleetFusion UI components",
      icon: Zap,
      color: "text-green-500",
      items: [
        { title: "Installation Guide", href: "/docs/installation", description: "Install the ShadCN CLI and add components" },
        { title: "Quick Start", href: "/docs/quick-start", description: "Get up and running in minutes" },
        { title: "Project Setup", href: "/docs/setup", description: "Configure your project for FleetFusion UI" },
      ]
    },
    {
      title: "Components",
      description: "Detailed documentation for all available components",
      icon: Code,
      color: "text-blue-500",
      items: [
        { title: "UI Components", href: "/docs/components/ui", description: "Base UI components and primitives" },
        { title: "Business Components", href: "/docs/components/business", description: "Fleet-specific components" },
        { title: "Feature Blocks", href: "/docs/components/blocks", description: "Complete feature implementations" },
      ]
    },
    {
      title: "API Reference",
      description: "MCP server endpoints and CLI commands",
      icon: Settings,
      color: "text-purple-500",
      items: [
        { title: "MCP Server API", href: "/docs/api", description: "Model Context Protocol server endpoints" },
        { title: "CLI Commands", href: "/docs/cli", description: "ShadCN CLI commands for FleetFusion" },
        { title: "Registry Schema", href: "/docs/schema", description: "Registry JSON schema documentation" },
      ]
    },
    {
      title: "Advanced",
      description: "Advanced usage patterns and customization",
      icon: Shield,
      color: "text-orange-500",
      items: [
        { title: "Theming", href: "/docs/theming", description: "Customize colors and styling" },
        { title: "Contributing", href: "/docs/contributing", description: "Contribute to the registry" },
        { title: "Migration Guide", href: "/docs/migration", description: "Migrate from other UI libraries" },
      ]
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
            <p className="text-muted-foreground">
              Everything you need to know about using FleetFusion UI components
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5 text-primary" />
              Quick Start
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Get started with FleetFusion UI in your project
            </p>
            <Button size="sm" asChild>
              <Link href="/docs/installation">
                Get Started
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-500" />
              Components
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Browse all available components
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/components">
                Browse Components
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-green-500" />
              GitHub
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              View source code and contribute
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/fleetfusion/ui-registry" target="_blank">
                View on GitHub
                <ExternalLink className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Documentation Sections */}
      <div className="space-y-8">
        {documentationSections.map((section, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center gap-3">
              <section.icon className={`h-6 w-6 ${section.color}`} />
              <div>
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <p className="text-muted-foreground">{section.description}</p>
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="group hover:shadow-md transition-all duration-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <Button variant="ghost" size="sm" asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                      <Link href={item.href}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Additional Resources</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                See FleetFusion UI in action with real-world examples
              </p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="/examples/dashboard">
                    Dashboard Example
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="/examples/analytics">
                    Analytics Example
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Get help and support for FleetFusion UI
              </p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="https://github.com/fleetfusion/ui-registry/issues" target="_blank">
                    Report Issue
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href="https://github.com/fleetfusion/ui-registry/discussions" target="_blank">
                    Community
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}