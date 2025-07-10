"use client"

import { useState } from "react"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { Card } from "@/registry/fleetfusion-dark/ui/card"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { Copy, Check, Terminal, Package, Github } from "lucide-react"

const installationSteps = {
  cli: [
    {
      title: "Initialize Project",
      command: "npx fleetfusion-ui@latest init",
      description: "Set up your project with FleetFusion UI",
    },
    {
      title: "Add Components",
      command: "npx fleetfusion-ui@latest add dashboard",
      description: "Add specific components to your project",
    },
    {
      title: "Start Development",
      command: "npm run dev",
      description: "Start your development server",
    },
  ],
  manual: [
    {
      title: "Install Dependencies",
      command: "npm install @radix-ui/react-* class-variance-authority clsx tailwind-merge",
      description: "Install required peer dependencies",
    },
    {
      title: "Copy Components",
      command: "# Copy component files to your project",
      description: "Download and copy component files",
    },
    {
      title: "Update Config",
      command: "# Update tailwind.config.js and globals.css",
      description: "Configure Tailwind CSS",
    },
  ],
}

export function InstallationGuide() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

  const copyCommand = async (command: string) => {
    await navigator.clipboard.writeText(command)
    setCopiedCommand(command)
    setTimeout(() => setCopiedCommand(null), 2000)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* CLI Installation */}
      <Card className="flex flex-col items-center rounded-2xl bg-white/95 backdrop-blur-sm p-8 text-center shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
          <Terminal className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-black mb-2">CLI Installation</h3>
        <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/30 mb-4">Recommended</Badge>
        <p className="text-gray-600 mb-6 leading-relaxed">
          The fastest way to get started with FleetFusion UI components
        </p>

        <div className="space-y-3 mb-8 w-full">
          {installationSteps.cli.map((step, index) => (
            <div key={index} className="text-left">
              <p className="text-sm font-medium text-gray-800 mb-2">{step.title}</p>
              <div className="bg-black rounded-lg p-3 flex items-center justify-between group">
                <code className="text-green-400 text-sm flex-1">{step.command}</code>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyCommand(step.command)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/20"
                >
                  {copiedCommand === step.command ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-1">{step.description}</p>
            </div>
          ))}
        </div>

        <Button className="w-full rounded-md bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600 text-lg">
          Get Started
        </Button>
      </Card>

      {/* Manual Setup - Featured */}
      <Card className="z-10 scale-105 ring-4 ring-blue-200/50 flex flex-col items-center rounded-2xl bg-white/95 backdrop-blur-sm p-8 text-center shadow-2xl border-0 hover:shadow-3xl transition-all duration-300">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
          <Package className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-black mb-2">Manual Setup</h3>
        <Badge className="bg-green-500/20 text-green-600 border-green-500/30 mb-4">Most Popular</Badge>
        <p className="text-gray-600 mb-6 leading-relaxed">Copy and paste components directly into your project</p>

        <div className="space-y-4 mb-8 w-full text-left">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-800">Browse component library</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-800">Copy component code</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-800">Install dependencies</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-800">Customize as needed</span>
          </div>
        </div>

        <Button className="w-full rounded-md bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 font-semibold text-white hover:from-blue-600 hover:to-blue-700 text-lg shadow-lg">
          Browse Components
        </Button>
      </Card>

      {/* GitHub */}
      <Card className="flex flex-col items-center rounded-2xl bg-white/95 backdrop-blur-sm p-8 text-center shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6">
          <Github className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-black mb-2">GitHub</h3>
        <Badge className="bg-gray-500/20 text-gray-600 border-gray-500/30 mb-4">Open Source</Badge>
        <p className="text-gray-600 mb-6 leading-relaxed">Access the full source code and contribute to the project</p>

        <div className="space-y-4 mb-8 w-full text-left">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-800">Full source code access</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-800">MIT License</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-800">Community contributions</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-800">Regular updates</span>
          </div>
        </div>

        <Button className="w-full rounded-md bg-gray-800 px-6 py-3 font-semibold text-white hover:bg-gray-900 text-lg">
          <Github className="w-5 h-5 mr-2" />
          View on GitHub
        </Button>
      </Card>
    </div>
  )
}
