import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { 
  Terminal, 
  Download, 
  Settings, 
  CheckCircle, 
  AlertTriangle,
  Code,
  ArrowLeft,
  ExternalLink
} from "lucide-react"

export default function InstallationPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="not-prose mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/docs">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Documentation
          </Link>
        </Button>
      </div>

      <div className="not-prose space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Installation Guide</h1>
        <p className="text-muted-foreground text-lg">
          Get started with FleetFusion UI components in your Next.js project
        </p>
      </div>

      <div className="not-prose space-y-8">
        {/* Prerequisites */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Prerequisites
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Before installing FleetFusion UI components, ensure you have:
            </p>
            <div className="grid gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Node.js 18.0.0 or higher</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Next.js 15.0.0 or higher</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">React 19.0.0 or higher</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Tailwind CSS 4.0.0 or higher</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 1: Install ShadCN CLI */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                1
              </div>
              Install ShadCN CLI
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              First, install the ShadCN UI CLI globally or use npx:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm font-mono">npm install -g shadcn@latest</code>
            </div>
            <p className="text-sm text-muted-foreground">
              Or use with npx (recommended):
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm font-mono">npx shadcn@latest</code>
            </div>
          </CardContent>
        </Card>

        {/* Step 2: Initialize Your Project */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                2
              </div>
              Initialize Your Project
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              If you don't have a Next.js project yet, create one:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm font-mono">npx create-next-app@latest my-fleet-app</code>
            </div>
            <p className="text-sm text-muted-foreground">
              Then navigate to your project and initialize ShadCN:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm font-mono">cd my-fleet-app && npx shadcn@latest init</code>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Install FleetFusion Theme */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                3
              </div>
              Install FleetFusion Theme
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Install the FleetFusion dark theme configuration:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm font-mono">npx shadcn@latest add https://fleetfusion-registry.com/r/fleetfusion-dark-theme.json</code>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-blue-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-500">Note</p>
                  <p className="text-sm text-muted-foreground">
                    This will update your <code>tailwind.config.ts</code> and <code>globals.css</code> files with FleetFusion's dark theme configuration.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 4: Add Components */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                4
              </div>
              Add Components
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Add individual components to your project:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm font-mono">npx shadcn@latest add https://fleetfusion-registry.com/r/button.json</code>
            </div>
            <p className="text-sm text-muted-foreground">
              Or add multiple components at once:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm font-mono">npx shadcn@latest add https://fleetfusion-registry.com/r/button.json https://fleetfusion-registry.com/r/card.json https://fleetfusion-registry.com/r/badge.json</code>
            </div>
          </CardContent>
        </Card>

        {/* Step 5: Use Components */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                5
              </div>
              Use Components
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Import and use components in your React application:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="text-sm font-mono">
{`import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fleet Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  )
}`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Component Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Component Categories
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              FleetFusion UI components are organized into different categories:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Badge variant="outline">UI</Badge>
                  Base Components
                </h4>
                <p className="text-sm text-muted-foreground">
                  Button, Card, Badge, Avatar, and other foundational UI components
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Badge variant="outline">Business</Badge>
                  Fleet Components
                </h4>
                <p className="text-sm text-muted-foreground">
                  Driver cards, fleet dashboards, and other fleet-specific components
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Badge variant="outline">Blocks</Badge>
                  Feature Blocks
                </h4>
                <p className="text-sm text-muted-foreground">
                  Complete feature implementations like analytics dashboards
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium flex items-center gap-2">
                  <Badge variant="outline">Hooks</Badge>
                  React Hooks
                </h4>
                <p className="text-sm text-muted-foreground">
                  Custom hooks for toast notifications and other utilities
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Troubleshooting
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-medium">TypeScript Errors</h4>
                <p className="text-sm text-muted-foreground">
                  Make sure you have the latest version of TypeScript and that your <code>tsconfig.json</code> includes the paths configuration.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Styling Issues</h4>
                <p className="text-sm text-muted-foreground">
                  Ensure you have installed the FleetFusion theme and that your <code>globals.css</code> imports the theme styles.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Component Not Found</h4>
                <p className="text-sm text-muted-foreground">
                  Check that the component was installed correctly and that you're importing from the correct path.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Now that you have FleetFusion UI installed, here's what you can do next:
            </p>
            <div className="grid gap-2">
              <Button variant="outline" size="sm" asChild className="justify-start">
                <Link href="/components">
                  <Code className="h-4 w-4 mr-2" />
                  Browse all components
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="justify-start">
                <Link href="/docs">
                  <Settings className="h-4 w-4 mr-2" />
                  Read the documentation
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="justify-start">
                <Link href="https://github.com/fleetfusion/ui-registry" target="_blank">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on GitHub
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}