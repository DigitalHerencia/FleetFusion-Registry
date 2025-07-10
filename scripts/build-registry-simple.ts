#!/usr/bin/env node

/**
 * FleetFusion Registry Builder
 * 🎵 Building registry - this opportunity compiles once in a runtime! 🎵
 */

import { promises as fs } from 'fs'
import { join } from 'path'

interface RegistryItem {
  name: string
  type: string
  title?: string
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
  items: RegistryItem[]
}

async function buildRegistry() {
  console.log('🎵 Building registry - this opportunity compiles once in a runtime! 🎵')
  
  try {
    // Read the main registry.json
    const registryPath = join(process.cwd(), 'registry/fleetfusion-dark/registry.json')
    const registryContent = await fs.readFile(registryPath, 'utf-8')
    const registry: Registry = JSON.parse(registryContent)
    
    // Create public/r directory
    const outputDir = join(process.cwd(), 'public/r')
    await fs.mkdir(outputDir, { recursive: true })
    
    // Build each registry item
    for (const item of registry.items) {
      console.log(`📦 Building ${item.name}...`)
      
      const itemFiles = await Promise.all(
        item.files.map(async (file) => {
          const filePath = join(process.cwd(), file.path)
          try {
            const content = await fs.readFile(filePath, 'utf-8')
            return {
              ...file,
              content
            }
          } catch (error) {
            console.warn(`⚠️  Could not read file: ${file.path}`)
            return {
              ...file,
              content: `// File not found: ${file.path}`
            }
          }
        })
      )
      
      const itemOutput = {
        ...item,
        files: itemFiles
      }
      
      // Write individual item JSON
      const itemPath = join(outputDir, `${item.name}.json`)
      await fs.writeFile(itemPath, JSON.stringify(itemOutput, null, 2))
      
      console.log(`✅ Built ${item.name}.json`)
    }
    
    // Write complete registry
    const registryOutputPath = join(outputDir, 'registry.json')
    await fs.writeFile(registryOutputPath, JSON.stringify(registry, null, 2))
    
    console.log('🎉 Registry build complete! You only get one shot - and you nailed it!')
    console.log(`📁 Output directory: ${outputDir}`)
    console.log(`📄 Built ${registry.items.length} components`)
    
  } catch (error) {
    console.error('❌ Build failed:', error)
    process.exit(1)
  }
}

// Run the build
buildRegistry().catch((error) => {
  console.error('❌ Build failed:', error)
  process.exit(1)
})
