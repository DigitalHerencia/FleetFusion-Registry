import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { MapPinned } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
   <header className="sticky top-0 z-30 flex h-16 items-center border-b border-gray-200 bg-black px-4 lg:px-6">
        <div className="flex items-center space-x-2">
          <MapPinned className="text-blue-500" />
          <span className="text-2xl font-extrabold text-white">FleetFusion</span>
        </div>
        <nav className="ml-auto flex items-center space-x-6">
          <Link href="#features" className="text-sm font-medium text-white hover:text-blue-500 transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-white hover:text-blue-500 transition-colors">
            Pricing
          </Link>
          <Link href="#about" className="text-sm font-medium text-white hover:text-blue-500 transition-colors">
            About
          </Link>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">Sign In</Button>
        </nav>
      </header>

  )
}
