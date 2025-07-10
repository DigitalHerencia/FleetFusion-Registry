'use client'

import { useState } from 'react'
import { Copy, Check, Play, ExternalLink } from 'lucide-react'

interface ComponentPreviewProps {
  component: {
    name: string
    title: string
    description: string
    type: string
    files?: Array<{
      path: string
      content?: string
    }>
  }
}

export function ComponentPreview({ component }: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false)
  
  const installCommand = `npx shadcn@latest add http://localhost:3000/r/${component.name}.json`
  
  const copyInstallCommand = async () => {
    try {
      await navigator.clipboard.writeText(installCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  
  return (
    <div className="border border-white/20 rounded-lg overflow-hidden bg-card">
      {/* Preview Header */}
      <div className="bg-muted/50 px-4 py-3 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2">
          <Play className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">Live Preview</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{component.type}</span>
        </div>
        <button
          onClick={copyInstallCommand}
          className="flex items-center gap-2 px-3 py-1 bg-primary hover:bg-primary/90 rounded text-sm font-medium transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Install
            </>
          )}
        </button>
      </div>
      
      {/* Preview Content */}
      <div className="p-8 bg-background/50 min-h-[300px] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-6xl">🎵</div>
          <h3 className="text-xl font-semibold">{component.title}</h3>
          <p className="text-muted-foreground max-w-md">{component.description}</p>
          
          {/* Component-specific previews */}
          {component.name === 'button' && (
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors">
                Default
              </button>
              <button className="px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                Outline
              </button>
              <button className="px-4 py-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-md transition-colors">
                Destructive
              </button>
              <button className="px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md transition-colors">
                Secondary
              </button>
            </div>
          )}
          
          {component.name === 'fleet-dashboard' && (
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <div className="bg-card p-4 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-primary">142</div>
                <div className="text-sm text-muted-foreground">Active Vehicles</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-green-500">98%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-orange-500">23</div>
                <div className="text-sm text-muted-foreground">Alerts</div>
              </div>
              <div className="bg-card p-4 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-blue-500">$47K</div>
                <div className="text-sm text-muted-foreground">Revenue</div>
              </div>
            </div>
          )}
          
          {component.name === 'driver-card' && (
            <div className="bg-card p-4 rounded-lg border border-white/10 max-w-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  JD
                </div>
                <div className="text-left">
                  <div className="font-semibold">John Doe</div>
                  <div className="text-sm text-muted-foreground">CDL-A Driver</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-500">Available</span>
              </div>
            </div>
          )}
          
          {component.name === 'card' && (
            <div className="bg-card p-6 rounded-lg border border-white/10 max-w-sm">
              <h4 className="font-semibold mb-2">Card Title</h4>
              <p className="text-sm text-muted-foreground mb-4">
                This is a card component with FleetFusion dark theme styling.
              </p>
              <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-sm">
                Action
              </button>
            </div>
          )}
          
          {component.name === 'badge' && (
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                Primary
              </span>
              <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                Secondary
              </span>
              <span className="px-2 py-1 bg-destructive text-destructive-foreground rounded-full text-sm">
                Destructive
              </span>
              <span className="px-2 py-1 border border-input bg-background rounded-full text-sm">
                Outline
              </span>
            </div>
          )}
          
          {component.name === 'avatar' && (
            <div className="flex gap-4 items-center justify-center">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                A
              </div>
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-semibold">
                B
              </div>
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-semibold">
                C
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Installation Command */}
      <div className="p-4 bg-muted/30 border-t border-white/10">
        <div className="flex items-center justify-between">
          <code className="text-sm text-muted-foreground font-mono">
            {installCommand}
          </code>
          <button
            onClick={copyInstallCommand}
            className="text-muted-foreground hover:text-foreground"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
