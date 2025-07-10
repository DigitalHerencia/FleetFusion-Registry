import { promises as fs } from 'fs'
import { join } from 'path'
import { execSync } from 'child_process'

interface RegistryItem {
  name: string
  type: string
  title: string
  description: string
  files: Array<{
    path: string
    type: string
    target?: string
  }>
  dependencies?: string[]
  registryDependencies?: string[]
}

interface Registry {
  $schema: string
  name: string
  homepage: string
  description: string
  items: RegistryItem[]
}

async function buildRegistry() {
  console.log('🎵 Building FleetFusion Registry - this opportunity compiles once in a runtime! 🎵')
  
  try {
    // Read the main registry.json
    const registryPath = join(process.cwd(), 'registry/fleetfusion-dark/registry.json')
    const registryContent = await fs.readFile(registryPath, 'utf-8')
    const registry: Registry = JSON.parse(registryContent)
    
    console.log(`📦 Found ${registry.items.length} registry items to build...`)
    
    // Create public/r directory for output
    const outputDir = join(process.cwd(), 'public/r')
    await fs.mkdir(outputDir, { recursive: true })
    
    // Build each registry item
    for (const item of registry.items) {
      console.log(`🔨 Building ${item.name}...`)
      
      try {
        // Read all files for this item
        const itemFiles = await Promise.all(
          item.files.map(async (file) => {
            const filePath = join(process.cwd(), file.path)
            const content = await fs.readFile(filePath, 'utf-8')
            return {
              ...file,
              content
            }
          })
        )
        
        // Create the complete item with file contents
        const itemOutput = {
          ...item,
          files: itemFiles
        }
        
        // Write individual item JSON
        const itemPath = join(outputDir, `${item.name}.json`)
        await fs.writeFile(itemPath, JSON.stringify(itemOutput, null, 2))
        
        console.log(`✅ Built ${item.name}.json`)
        
      } catch (error) {
        console.error(`❌ Error building ${item.name}:`, error)
      }
    }
    
    // Write complete registry index
    const registryOutputPath = join(outputDir, 'registry.json')
    await fs.writeFile(registryOutputPath, JSON.stringify(registry, null, 2))
    
    console.log(`📋 Created registry index at ${registryOutputPath}`)
    
    // Create a stats file
    const stats = {
      totalItems: registry.items.length,
      itemsByType: registry.items.reduce((acc, item) => {
        acc[item.type] = (acc[item.type] || 0) + 1
        return acc
      }, {} as Record<string, number>),
      buildTime: new Date().toISOString()
    }
    
    await fs.writeFile(
      join(outputDir, 'stats.json'),
      JSON.stringify(stats, null, 2)
    )
    
    console.log('🎉 Registry build complete! You only get one shot - and you NAILED IT!')
    console.log('📊 Build Stats:')
    console.log(`   Total Items: ${stats.totalItems}`)
    console.log(`   By Type:`, stats.itemsByType)
    
  } catch (error) {
    console.error('❌ Build failed:', error)
    process.exit(1)
  }
}

// Run the build
buildRegistry().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
