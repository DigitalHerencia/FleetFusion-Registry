"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/fleetfusion-dark/ui/tabs"
import { Code, Copy, Eye, ExternalLink } from "lucide-react"

interface ComponentPreviewProps {
  title: string
  description: string
  category: string
  children: React.ReactNode
  code?: string
  dependencies?: string[]
}

export function ComponentPreview({
  title,
  description,
  category,
  children,
  code,
  dependencies = [],
}: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (code) {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Card className="border-muted rounded-lg border bg-black/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 group">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CardTitle className="text-white text-lg font-semibold">{title}</CardTitle>
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
            </div>
            <CardDescription className="text-white/70">{description}</CardDescription>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="sm"
              variant="ghost"
              className="text-blue-400 hover:text-white hover:bg-blue-500"
              onClick={handleCopy}
            >
              {copied ? <Eye className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
            <Button size="sm" variant="ghost" className="text-blue-400 hover:text-white hover:bg-blue-500">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="preview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-black/50 border border-muted">
            <TabsTrigger
              value="preview"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
            >
              <Code className="w-4 h-4 mr-2" />
              Code
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-4">
            <div className="rounded-lg border border-muted bg-black/30 p-6">{children}</div>
          </TabsContent>
          <TabsContent value="code" className="mt-4">
            <div className="rounded-lg border border-muted bg-black/80 p-4">
              <pre className="text-sm text-green-400 overflow-x-auto">
                <code>{code || "// Code example coming soon..."}</code>
              </pre>
              {dependencies.length > 0 && (
                <div className="mt-4 pt-4 border-t border-muted">
                  <p className="text-xs text-white/60 mb-2">Dependencies:</p>
                  <div className="flex flex-wrap gap-2">
                    {dependencies.map((dep) => (
                      <Badge key={dep} variant="outline" className="text-xs">
                        {dep}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
