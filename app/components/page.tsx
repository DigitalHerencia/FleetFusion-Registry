"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Badge } from "@/registry/fleetfusion-dark/ui/badge"
import { 
  Search, 
  Filter, 
  Code, 
  Palette, 
  Blocks, 
  Zap, 
  Book,
  Package,
  ArrowRight
} from "lucide-react"
import registry from "@/registry/fleetfusion-dark/registry.json"

interface RegistryItem {
  name: string
  title: string
  description: string
  type: string
  dependencies: string[]
  registryDependencies: string[]
}

export default function ComponentsPage() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState<"" | "ui" | "component" | "block" | "hook" | "lib" | "theme">("")

  const items: RegistryItem[] = registry.items
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = 
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase())
      const matchesFilter = filter === "" || item.type === `registry:${filter}`
      return matchesSearch && matchesFilter
    })
  }, [items, search, filter])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "registry:ui":
        return Code
      case "registry:component":
        return Palette
      case "registry:block":
        return Blocks
      case "registry:hook":
        return Zap
      case "registry:lib":
        return Book
      case "registry:theme":
        return Package
      default:
        return Code
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "registry:ui":
        return "text-blue-500"
      case "registry:component":
        return "text-purple-500"
      case "registry:block":
        return "text-green-500"
      case "registry:hook":
        return "text-yellow-500"
      case "registry:lib":
        return "text-orange-500"
      case "registry:theme":
        return "text-pink-500"
      default:
        return "text-gray-500"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "registry:ui":
        return "UI Component"
      case "registry:component":
        return "Business Component"
      case "registry:block":
        return "Feature Block"
      case "registry:hook":
        return "Hook"
      case "registry:lib":
        return "Library"
      case "registry:theme":
        return "Theme"
      default:
        return "Component"
    }
  }

  const categories = [
    { value: "", label: "All Categories", count: items.length },
    { value: "ui", label: "UI Components", count: items.filter(i => i.type === "registry:ui").length },
    { value: "component", label: "Business Components", count: items.filter(i => i.type === "registry:component").length },
    { value: "block", label: "Feature Blocks", count: items.filter(i => i.type === "registry:block").length },
    { value: "hook", label: "Hooks", count: items.filter(i => i.type === "registry:hook").length },
    { value: "lib", label: "Libraries", count: items.filter(i => i.type === "registry:lib").length },
    { value: "theme", label: "Themes", count: items.filter(i => i.type === "registry:theme").length },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Components Catalog</h1>
          <p className="text-muted-foreground">
            Browse and discover reusable components for your fleet management application
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search components..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value as any)}
              className="bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label} ({category.count})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredItems.length} of {items.length} components
        </p>
        {search && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setSearch("")}
          >
            Clear search
          </Button>
        )}
      </div>

      {/* Components Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => {
          const TypeIcon = getTypeIcon(item.type)
          return (
            <Card key={item.name} className="group hover:shadow-lg transition-all duration-200 fleet-fade-in">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <TypeIcon className={`h-5 w-5 ${getTypeColor(item.type)}`} />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {getTypeLabel(item.type)}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
                
                {/* Dependencies */}
                <div className="space-y-2">
                  {item.dependencies.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Dependencies:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.dependencies.slice(0, 3).map((dep) => (
                          <Badge key={dep} variant="outline" className="text-xs">
                            {dep}
                          </Badge>
                        ))}
                        {item.dependencies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{item.dependencies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {item.registryDependencies.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Registry Dependencies:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.registryDependencies.slice(0, 2).map((dep) => (
                          <Badge key={dep} variant="secondary" className="text-xs">
                            {dep}
                          </Badge>
                        ))}
                        {item.registryDependencies.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{item.registryDependencies.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Action */}
                <div className="pt-2">
                  <Button variant="ghost" size="sm" asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Link href={`/components/${item.name}`}>
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No components found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search or filter criteria
          </p>
          <Button variant="outline" onClick={() => { setSearch(""); setFilter("") }}>
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  )
}