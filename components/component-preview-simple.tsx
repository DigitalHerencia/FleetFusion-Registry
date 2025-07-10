'use client'

import { useState } from 'react'

interface ComponentPreviewProps {
  component: {
    name: string
    title?: string
    description: string
    type: string
  }
}

export function ComponentPreview({ component }: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false)
  
  const copyInstallCommand = async () => {
    try {
      await navigator.clipboard.writeText(
        `npx shadcn@latest add http://localhost:3000/r/${component.name}.json`
      )
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }
  
  return (
    <div className="border border-white/20 rounded-lg overflow-hidden">
      {/* Preview Header */}
      <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">🎵 Live Preview</span>
        </div>
        <button
          onClick={copyInstallCommand}
          className="flex items-center gap-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded text-sm transition-colors"
        >
          {copied ? '✅ Copied!' : '📋 Install'}
        </button>
      </div>
      
      {/* Preview Content */}
      <div className="p-8 bg-black/50 min-h-[300px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎵</div>
          <h3 className="text-xl font-semibold mb-2">{component.title || component.name}</h3>
          <p className="text-gray-400 mb-4">{component.description}</p>
          
          {/* Mock component demonstration */}
          <div className="flex gap-4 justify-center">
            {component.name === 'ff-button' && (
              <>
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition-colors">
                  Primary
                </button>
                <button className="px-4 py-2 border border-white/20 hover:bg-white/10 rounded transition-colors">
                  Outline
                </button>
                <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded transition-colors">
                  Destructive
                </button>
              </>
            )}
            
            {component.name === 'ff-fleet-dashboard' && (
              <div className="grid grid-cols-2 gap-4 max-w-md">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">142</div>
                  <div className="text-sm text-gray-400">Active Vehicles</div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">98%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>
            )}
            
            {component.name === 'ff-driver-card' && (
              <div className="bg-gray-900 p-4 rounded-lg max-w-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold">John Doe</div>
                    <div className="text-sm text-gray-400">CDL-A</div>
                  </div>
                </div>
                <div className="text-sm text-green-400">● Available</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
