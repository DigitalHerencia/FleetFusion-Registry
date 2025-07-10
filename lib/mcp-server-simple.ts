#!/usr/bin/env node

/**
 * FleetFusion Registry MCP Server
 * 🎵 Server side magic for AI assistants 🎵
 */

import { promises as fs } from 'fs'
import { join } from 'path'

interface ComponentInfo {
  name: string
  type: string
  title?: string
  description: string
  files: Array<{
    path: string
    type: string
    content?: string
  }>
  dependencies?: string[]
  registryDependencies?: string[]
}

interface Registry {
  items: ComponentInfo[]
}

class FleetFusionMCPServer {
  private registry: Registry | null = null
  
  private async loadRegistry(): Promise<Registry> {
    if (!this.registry) {
      try {
        const registryPath = join(process.cwd(), 'public/r/registry.json')
        const content = await fs.readFile(registryPath, 'utf-8')
        this.registry = JSON.parse(content)
      } catch (error) {
        // Fallback to main registry
        const registryPath = join(process.cwd(), 'registry/fleetfusion-dark/registry.json')
        const content = await fs.readFile(registryPath, 'utf-8')
        this.registry = JSON.parse(content)
      }
    }
    return this.registry!
  }
  
  async listComponents() {
    const registry = await this.loadRegistry()
    const components = registry.items.map((item) => ({
      name: item.name,
      type: item.type,
      title: item.title || item.name,
      description: item.description
    }))
    
    return {
      content: [
        {
          type: 'text',
          text: `🎵 FleetFusion Registry Components (${components.length} total):\n\n${
            components.map(c => `• **${c.name}** (${c.type}): ${c.description}`).join('\n')
          }`
        }
      ]
    }
  }
  
  async getComponent(name: string) {
    if (!name) {
      throw new Error('Component name is required')
    }
    
    try {
      const componentPath = join(process.cwd(), `public/r/${name}.json`)
      const content = await fs.readFile(componentPath, 'utf-8')
      const component = JSON.parse(content)
      
      return {
        content: [
          {
            type: 'text',
            text: `# ${component.title || component.name}\n\n${component.description}\n\n## Installation\n\`\`\`bash\nnpx shadcn@latest add http://localhost:3000/r/${name}.json\n\`\`\`\n\n## Files\n${component.files.map((f: any) => `• ${f.path} (${f.type})`).join('\n')}\n\n## Dependencies\n${component.dependencies?.join(', ') || 'None'}\n\n## Registry Dependencies\n${component.registryDependencies?.join(', ') || 'None'}`
          }
        ]
      }
    } catch (error) {
      throw new Error(`Component '${name}' not found`)
    }
  }
  
  async searchComponents(query: string) {
    const registry = await this.loadRegistry()
    const results = registry.items.filter((item) => 
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.title?.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase())
    )
    
    return {
      content: [
        {
          type: 'text',
          text: `🔍 Search results for "${query}" (${results.length} found):\n\n${
            results.map((r) => `• **${r.name}**: ${r.description}`).join('\n')
          }`
        }
      ]
    }
  }
  
  async getInstallationGuide() {
    return {
      content: [
        {
          type: 'text',
          text: `# 🚀 FleetFusion Registry Installation Guide

## Quick Start
\`\`\`bash
# Install any component
npx shadcn@latest add http://localhost:3000/r/[component-name].json

# Examples
npx shadcn@latest add http://localhost:3000/r/ff-button.json
npx shadcn@latest add http://localhost:3000/r/ff-fleet-dashboard.json
\`\`\`

## Available Component Types
• **UI Components** (registry:ui): Base components like buttons, cards, inputs
• **Business Components** (registry:component): Fleet-specific components
• **Feature Blocks** (registry:block): Complete feature implementations
• **Hooks** (registry:hook): Custom React hooks
• **Utilities** (registry:lib): Helper functions and utilities

## Theme Setup
1. Copy the FleetFusion theme configuration
2. Update your \`tailwind.config.ts\`
3. Import the global styles in your \`globals.css\`

🎵 *You only get one shot - make it count!* 🎵`
        }
      ]
    }
  }
  
  async start() {
    console.log('🎵 FleetFusion MCP Server is ready! 🎵')
    console.log('Available commands:')
    console.log('• list_components - List all components')
    console.log('• get_component(name) - Get component details')
    console.log('• search_components(query) - Search components')
    console.log('• get_installation_guide - Get installation guide')
    
    // Keep the process running
    process.stdin.resume()
  }
}

// Start the server
const server = new FleetFusionMCPServer()
server.start().catch(console.error)

// Export for testing
export { FleetFusionMCPServer }
