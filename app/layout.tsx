import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { Github, BookOpen, Code } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FleetFusion UI Registry",
  description: "Reusable FleetFusion UI components and blocks – ShadCN UI Registry for fleet management systems",
  keywords: ["shadcn", "ui", "components", "registry", "fleet-management", "transport", "tms", "react", "nextjs"],
  authors: [{ name: "FleetFusion Team" }],
  creator: "FleetFusion Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fleetfusion-registry.com",
    title: "FleetFusion UI Registry",
    description: "Reusable FleetFusion UI components and blocks – ShadCN UI Registry for fleet management systems",
    siteName: "FleetFusion UI Registry",
  },
  twitter: {
    card: "summary_large_image",
    title: "FleetFusion UI Registry",
    description: "Reusable FleetFusion UI components and blocks – ShadCN UI Registry for fleet management systems",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground min-h-screen`}>
        {/* Site Header / Navigation Bar */}
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto">
            <nav className="flex h-16 items-center justify-between px-4">
              <div className="flex items-center space-x-2">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">FF</span>
                  </div>
                  <span className="text-xl font-bold">FleetFusion UI</span>
                </Link>
              </div>
              
              <div className="flex items-center space-x-6">
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                  <Link 
                    href="/" 
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/components" 
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    Components
                  </Link>
                  <Link 
                    href="/docs" 
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    Docs
                  </Link>
                </nav>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/docs">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Docs
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://github.com/fleetfusion/ui-registry" target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen">
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="h-6 w-6 rounded-md bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xs">FF</span>
                </div>
                <span className="text-sm font-medium">FleetFusion UI Registry</span>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  Documentation
                </Link>
                <Link href="/components" className="hover:text-foreground transition-colors">
                  Components
                </Link>
                <Link href="https://github.com/fleetfusion/ui-registry" className="hover:text-foreground transition-colors" target="_blank">
                  GitHub
                </Link>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border/40">
              <p className="text-center text-sm text-muted-foreground">
                © 2024 FleetFusion Team. Built with Next.js 15 and ShadCN UI.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}