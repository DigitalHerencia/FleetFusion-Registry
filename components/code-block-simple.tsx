'use client'

import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language: string
  fileName?: string
}

export function CodeBlock({ code, language, fileName }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }
  
  return (
    <div className="border border-white/20 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">
            {fileName ? `📄 ${fileName}` : `🔤 ${language}`}
          </span>
        </div>
        <button
          onClick={copyCode}
          className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors"
        >
          {copied ? '✅ Copied!' : '📋 Copy'}
        </button>
      </div>
      
      {/* Code Content */}
      <div className="p-4 bg-black/50 overflow-x-auto">
        <pre className="text-sm text-gray-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}
