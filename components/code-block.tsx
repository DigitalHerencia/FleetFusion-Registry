'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

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
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  
  return (
    <div className="bg-black/80 rounded-lg overflow-hidden border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-white/10">
        {fileName && (
          <span className="text-sm font-medium text-muted-foreground">
            {fileName}
          </span>
        )}
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase">
            {language}
          </span>
          <button
            onClick={copyCode}
            className="flex items-center gap-1 px-2 py-1 text-xs bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded transition-colors"
          >
            {copied ? (
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
      
      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm text-gray-100">
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}
