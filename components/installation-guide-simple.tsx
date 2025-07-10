'use client'

import { useState } from 'react'

interface InstallationGuideProps {
  componentName: string
}

export function InstallationGuide({ componentName }: InstallationGuideProps) {
  const [copied, setCopied] = useState(false)
  
  const installCommand = `npx shadcn@latest add http://localhost:3000/r/${componentName}.json`
  
  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(installCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }
  
  return (
    <div className="space-y-4">
      {/* Quick Install */}
      <div className="border border-white/20 rounded-lg overflow-hidden">
        <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
          <span className="text-sm text-gray-400">🚀 Quick Install</span>
          <button
            onClick={copyCommand}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded text-sm transition-colors"
          >
            {copied ? '✅ Copied!' : '📋 Copy'}
          </button>
        </div>
        
        <div className="p-4 bg-black/50">
          <pre className="text-sm text-gray-300">
            <code>{installCommand}</code>
          </pre>
        </div>
      </div>
      
      {/* Additional Instructions */}
      <div className="text-sm text-gray-400 space-y-2">
        <p>
          <strong>1. Installation:</strong> Run the command above to install the component
        </p>
        <p>
          <strong>2. Import:</strong> Import the component in your React file
        </p>
        <p>
          <strong>3. Use:</strong> Use the component in your JSX
        </p>
      </div>
      
      {/* Example Usage */}
      <div className="border border-white/20 rounded-lg overflow-hidden">
        <div className="bg-gray-900 px-4 py-2">
          <span className="text-sm text-gray-400">📝 Example Usage</span>
        </div>
        
        <div className="p-4 bg-black/50">
          <pre className="text-sm text-gray-300">
            <code>{`import { ${componentName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')} } from "@/components/ui/${componentName}"

export default function MyComponent() {
  return (
    <div>
      <${componentName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')} />
    </div>
  )
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
