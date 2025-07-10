import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js'
import { promises as fs } from 'fs'
import { join } from 'path'

interface ComponentInfo {
  name: string
  type: string
  title: string
  description: string
  files: Array<{
    path: string
    type: string
    content?: string
  }>
  dependencies: string[]
  registryDependencies: string[]
}

interface Registry {
  $schema: string
  name: string
  homepage: string
  description: string
  items: ComponentInfo[]
}

class FleetFusionMCPServer {
  private server: Server
  private registry: Registry | null = null
  
  constructor() {
    this.server = new Server(
      {
        name: 'fleetfusion-registry',
        version: '1.0.0',
        description: '🎵 FleetFusion ShadCN UI Registry MCP Server - Better lose yourself in the components! 🎵'
      },
    )
    
    this.setupTools()
  }
  
  private async loadRegistry(): Promise<Registry> {
    if (!this.registry) {
      try {
        const registryPath = join(process.cwd(), 'public/r/registry.json')
        const content = await fs.readFile(registryPath, 'utf-8')
        this.registry = JSON.parse(content)
      } catch (error) {
        // Fallback to source registry if built version doesn't exist
        const registryPath = join(process.cwd(), 'registry/fleetfusion-dark/registry.json')
        const content = await fs.readFile(registryPath, 'utf-8')
        this.registry = JSON.parse(content)
      }
    }
    
    if (!this.registry) {
      throw new Error('Failed to load registry from both public/r/registry.json and registry/fleetfusion-dark/registry.json')
    }
    
    return this.registry
  }
  
  private setupTools() {
    // Set up tool handlers
    this.server.setRequestHandler(
      CallToolRequestSchema,
      async (request) => {
        const { name, arguments: args } = await request.params
        
        switch (name) {
          case 'list_components':
            return await this.listComponents(args?.filter as string)
          
          case 'get_component':
            return await this.getComponent(args?.name as string)
          
          case 'search_components':
            return await this.searchComponents(args?.query as string)
          
          case 'get_installation_guide':
            return await this.getInstallationGuide()
            
          case 'get_component_code':
            return await this.getComponentCode(args?.name as string)
            
          case 'get_registry_stats':
            return await this.getRegistryStats()
          
          default:
            throw new Error(`Unknown tool: ${name}`)
        }
      }
    )
    
    // Register available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'list_components',
            description: 'List all available FleetFusion components with optional filtering',
            inputSchema: {
              type: 'object',
              properties: {
                filter: {
                  type: 'string',
                  description: 'Filter by component type (ui, component, block, hook, lib, theme)',
                  enum: ['ui', 'component', 'block', 'hook', 'lib', 'theme']
                }
              },
              required: []
            }
          },
          {
            name: 'get_component',
            description: 'Get detailed information about a specific component',
            inputSchema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Component name (e.g., "button", "driver-card")'
                }
              },
              required: ['name']
            }
          },
          {
            name: 'search_components',
            description: 'Search components by keyword in title or description',
            inputSchema: {
              type: 'object',
              properties: {
                query: {
                  type: 'string',
                  description: 'Search query'
                }
              },
              required: ['query']
            }
          },
          {
            name: 'get_component_code',
            description: 'Get the source code for a specific component',
            inputSchema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Component name'
                }
              },
              required: ['name']
            }
          },
          {
            name: 'get_installation_guide',
            description: 'Get installation instructions for FleetFusion registry',
            inputSchema: {
              type: 'object',
              properties: {},
              required: []
            }
          },
          {
            name: 'get_registry_stats',
            description: 'Get statistics about the registry (total components, types, etc.)',
            inputSchema: {
              type: 'object',
              properties: {},
              required: []
            }
          }
        ]
      }
    })
  }
  
  private async listComponents(filter?: string) {
    const registry = await this.loadRegistry()
    let components = registry.items
    
    if (filter) {
      components = components.filter(item => 
        item.type === `registry:${filter}` || item.type === filter
      )
    }
    
    const componentList = components.map(item => ({
      name: item.name,
      type: item.type,
      title: item.title,
      description: item.description
    }))
    
    return {
      content: [
        {
          type: 'text',
          text: `🎵 FleetFusion Registry Components${filter ? ` (${filter})` : ''} (${componentList.length} total):\n\n${
            componentList.map(c => `• **${c.name}** (${c.type}): ${c.description}`).join('\n')
          }\n\n🚀 *You only get one shot - make it count!*`
        }
      ]
    }
  }
  
  private async getComponent(name: string) {
    if (!name) {
      throw new Error('Component name is required')
    }
    
    const registry = await this.loadRegistry()
    const component = registry.items.find(item => item.name === name)
    
    if (!component) {
      throw new Error(`Component '${name}' not found`)
    }
    
    const installCommand = `npx shadcn@latest add ${registry.homepage || 'http://localhost:3000'}/r/${name}.json`
    
    return {
      content: [
        {
          type: 'text',
          text: `# ${component.title}\n\n${component.description}\n\n## 🎵 Installation\n\`\`\`bash\n${installCommand}\n\`\`\`\n\n## 📁 Files\n${component.files.map(f => `• ${f.path} (${f.type})`).join('\n')}\n\n## 📦 Dependencies\n${component.dependencies?.length ? component.dependencies.join(', ') : 'None'}\n\n## 🔗 Registry Dependencies\n${component.registryDependencies?.length ? component.registryDependencies.join(', ') : 'None'}\n\n*🎵 This opportunity compiles once in a runtime! 🎵*`
        }
      ]
    }
  }
  
  private async getComponentCode(name: string) {
    if (!name) {
      throw new Error('Component name is required')
    }
    
    try {
      const componentPath = join(process.cwd(), `public/r/${name}.json`)
      const content = await fs.readFile(componentPath, 'utf-8')
      const component = JSON.parse(content)
      
      let codeContent = `# ${component.title} - Source Code\n\n`
      
      for (const file of component.files) {
        if (file.content) {
          codeContent += `## ${file.path}\n\n\`\`\`${file.path.endsWith('.tsx') ? 'tsx' : file.path.endsWith('.ts') ? 'typescript' : file.path.endsWith('.css') ? 'css' : 'text'}\n${file.content}\n\`\`\`\n\n`
        }
      }
      
      return {
        content: [
          {
            type: 'text',
            text: codeContent
          }
        ]
      }
    } catch (error) {
      throw new Error(`Component '${name}' not found or code not available`)
    }
  }
  
  private async searchComponents(query: string) {
    if (!query) {
      throw new Error('Search query is required')
    }
    
    const registry = await this.loadRegistry()
    const results = registry.items.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    )
    
    return {
      content: [
        {
          type: 'text',
          text: `🔍 Search results for "${query}" (${results.length} found):\n\n${
            results.map(r => `• **${r.name}** (${r.type}): ${r.description}`).join('\n')
          }\n\n🎵 *Better go compile this moment!* 🎵`
        }
      ]
    }
  }
  
  private async getRegistryStats() {
    const registry = await this.loadRegistry()
    
    const stats = {
      totalComponents: registry.items.length,
      byType: registry.items.reduce((acc, item) => {
        const type = item.type.replace('registry:', '')
        acc[type] = (acc[type] || 0) + 1
        return acc
      }, {} as Record<string, number>),
      registryName: registry.name,
      homepage: registry.homepage
    }
    
    return {
      content: [
        {
          type: 'text',
          text: `📊 FleetFusion Registry Statistics\n\n**Total Components:** ${stats.totalComponents}\n\n**By Type:**\n${Object.entries(stats.byType).map(([type, count]) => `• ${type}: ${count}`).join('\n')}\n\n**Registry:** ${stats.registryName}\n**Homepage:** ${stats.homepage}\n\n🎵 *His registry is ready, components are heavy, there's code spaghetti* 🎵`
        }
      ]
    }
  }
  
  private async getInstallationGuide() {
    const registry = await this.loadRegistry()
    
    return {
      content: [
        {
          type: 'text',
          text: `# 🚀 FleetFusion Registry Installation Guide\n\n## Quick Start\n\`\`\`bash\n# Install any component\nnpx shadcn@latest add ${registry.homepage || 'http://localhost:3000'}/r/[component-name].json\n\n# Examples\nnpx shadcn@latest add ${registry.homepage || 'http://localhost:3000'}/r/button.json\nnpx shadcn@latest add ${registry.homepage || 'http://localhost:3000'}/r/driver-card.json\nnpx shadcn@latest add ${registry.homepage || 'http://localhost:3000'}/r/fleet-dashboard.json\n\`\`\`\n\n## Available Component Types\n• **UI Components** (registry:ui): Base components like buttons, cards, inputs\n• **Business Components** (registry:component): Fleet-specific components\n• **Feature Blocks** (registry:block): Complete feature implementations\n• **Hooks** (registry:hook): Custom React hooks\n• **Utilities** (registry:lib): Helper functions and utilities\n• **Themes** (registry:theme): Complete theme configurations\n\n## Theme Setup\n1. Install the FleetFusion theme:\n   \`\`\`bash\n   npx shadcn@latest add ${registry.homepage || 'http://localhost:3000'}/r/fleetfusion-dark-theme.json\n   \`\`\`\n2. The theme will update your \`tailwind.config.ts\` and \`globals.css\`\n3. Add the \`dark\` class to your \`<html>\` element\n\n## Prerequisites\n• Next.js 15+ with App Router\n• React 19+\n• Tailwind CSS 4+\n• TypeScript\n\n🎵 *You only get one shot - make it count!* 🎵\n🎵 *This opportunity compiles once in a runtime!* 🎵`
        }
      ]
    }
  }
  
  async start() {
    const transport = new StdioServerTransport()
    await this.server.connect(transport)
    console.log('🎵 FleetFusion MCP Server is ready! Better lose yourself in the components! 🎵')
  }
}

// Start the server
const server = new FleetFusionMCPServer()
server.start().catch(console.error)
