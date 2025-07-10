'use client'

import { useState } from 'react'
import { Copy, Check, Terminal, Package, Zap } from 'lucide-react'

interface InstallationGuideProps {
  componentName: string
}

export function InstallationGuide({ componentName }: InstallationGuideProps) {
  const [copied, setCopied] = useState<string | null>(null)
  
  const commands = {
    install: `npx shadcn@latest add http://localhost:3000/r/${componentName}.json`,
    usage: `import { ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from "@/components/ui/${componentName}"\n\n<${componentName.charAt(0).toUpperCase() + componentName.slice(1)} />`,
    theme: `npx shadcn@latest add http://localhost:3000/r/fleetfusion-dark-theme.json`
  }
  
  const copyCommand = async (command: string, type: string) => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  
  return (
    <div className="space-y-6">
      {/* Quick Install */}
      <div className="bg-card p-6 rounded-lg border border-white/10">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Quick Install</h3>
        </div>
        <div className="bg-black/50 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <code className="text-sm text-gray-100 font-mono">
              {commands.install}
            </code>
            <button
              onClick={() => copyCommand(commands.install, 'install')}
              className="flex items-center gap-1 px-2 py-1 text-xs bg-primary hover:bg-primary/90 text-primary-foreground rounded transition-colors"
            >
              {copied === 'install' ? (
                <>
                  <Check className="w-3 h-3" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Usage Example */}
      <div className="bg-card p-6 rounded-lg border border-white/10">
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="w-5 h-5 text-green-500" />
          <h3 className="text-lg font-semibold">Usage Example</h3>
        </div>
        <div className="bg-black/50 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <pre className="text-sm text-gray-100 font-mono overflow-x-auto">
              {commands.usage}
            </pre>
            <button
              onClick={() => copyCommand(commands.usage, 'usage')}
              className="flex items-center gap-1 px-2 py-1 text-xs bg-green-600 hover:bg-green-700 text-white rounded transition-colors"
            >
              {copied === 'usage' ? (
                <>
                  <Check className="w-3 h-3" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Theme Setup */}
      <div className="bg-card p-6 rounded-lg border border-white/10">
        <div className="flex items-center gap-2 mb-4">
          <Package className="w-5 h-5 text-orange-500" />
          <h3 className="text-lg font-semibold">Theme Setup (Optional)</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Install the FleetFusion dark theme for consistent styling across all components.
        </p>
        <div className="bg-black/50 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <code className="text-sm text-gray-100 font-mono">
              {commands.theme}
            </code>
            <button
              onClick={() => copyCommand(commands.theme, 'theme')}
              className="flex items-center gap-1 px-2 py-1 text-xs bg-orange-600 hover:bg-orange-700 text-white rounded transition-colors"
            >
              {copied === 'theme' ? (
                <>
                  <Check className="w-3 h-3" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Prerequisites */}
      <div className="bg-muted/30 p-6 rounded-lg border border-white/10">
        <h3 className="text-lg font-semibold mb-4">Prerequisites</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Next.js 15+ with App Router
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            React 19+
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Tailwind CSS 4+
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            TypeScript
          </li>
        </ul>
      </div>
    </div>
  )
}
