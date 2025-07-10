# FleetFusion UI Registry

A comprehensive collection of reusable UI components, hooks, and feature modules extracted from FleetFusion TMS for building fleet management applications.

## 🚀 Features

- **50+ Components**: Comprehensive collection of UI components, business components, and feature blocks
- **Dark Theme First**: Carefully crafted dark theme optimized for fleet management interfaces
- **Ready to Use**: Copy-paste components with full TypeScript support and documentation
- **Production Ready**: Battle-tested components from real fleet management systems
- **ShadCN Compatible**: Built with ShadCN UI v4 standards

## 🎯 Component Categories

### Tier 1: Base UI Components
- Button, Card, Badge, Avatar, and other foundational UI components
- Fully customizable with variant support
- Accessibility-first design

### Tier 2: Fleet-Specific Components
- Driver cards, fleet dashboards, and other fleet-specific components
- Business logic integration
- Fleet management workflows

### Tier 3: Feature Blocks
- Complete feature implementations like analytics dashboards
- Full-page layouts and complex interactions
- Ready-to-use feature modules

### Tier 4: Support Assets
- Custom hooks for toast notifications and utilities
- Helper functions and utilities
- Theme configurations

## 🛠️ Installation

### Prerequisites

- Node.js 18.0.0 or higher
- Next.js 15.0.0 or higher
- React 19.0.0 or higher
- Tailwind CSS 4.0.0 or higher

### Quick Start

1. **Install ShadCN CLI**:
   ```bash
   npm install -g shadcn@latest
   ```

2. **Initialize your project**:
   ```bash
   npx create-next-app@latest my-fleet-app
   cd my-fleet-app
   npx shadcn@latest init
   ```

3. **Install FleetFusion theme**:
   ```bash
   npx shadcn@latest add https://fleetfusion-registry.com/r/fleetfusion-dark-theme.json
   ```

4. **Add components**:
   ```bash
   npx shadcn@latest add https://fleetfusion-registry.com/r/button.json
   npx shadcn@latest add https://fleetfusion-registry.com/r/fleet-dashboard.json
   ```

5. **Use in your project**:
   ```tsx
   import { Button } from "@/components/ui/button"
   import { FleetDashboard } from "@/components/fleet-dashboard"
   
   export default function MyApp() {
     return (
       <div>
         <FleetDashboard />
         <Button>Get Started</Button>
       </div>
     )
   }
   ```

## 📖 Documentation

- **[Installation Guide](https://fleetfusion-registry.com/docs/installation)** - Get started with FleetFusion UI
- **[Component Library](https://fleetfusion-registry.com/components)** - Browse all available components
- **[API Reference](https://fleetfusion-registry.com/docs/api)** - MCP server endpoints and CLI commands

## 🎨 Design System

FleetFusion UI uses a dark-first design system optimized for fleet management applications:

- **Primary Color**: `hsl(217, 91%, 60%)` - Blue for actions and emphasis
- **Background**: `hsl(240, 10%, 3.9%)` - Dark background for reduced eye strain
- **Foreground**: `hsl(0, 0%, 98%)` - High contrast text
- **Accent**: `hsl(190, 80%, 50%)` - Cyan for highlights and secondary actions

## 🔧 Development

### Build the Registry

```bash
npm run registry:build
```

### Development Mode

```bash
npm run dev
npm run registry:dev
```

### Project Structure

```
registry/
└── fleetfusion-dark/
    ├── registry.json          # Registry configuration
    ├── ui/                    # Base UI components
    ├── business/              # Fleet-specific components
    ├── features/              # Feature blocks
    ├── hooks/                 # Custom React hooks
    ├── lib/                   # Utilities
    └── themes/                # Theme configurations
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://fleetfusion-registry.com/docs/contributing) for details.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [ShadCN UI](https://ui.shadcn.com/)
- Powered by [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)

---

**FleetFusion UI Registry** - Built for the future of fleet management applications.