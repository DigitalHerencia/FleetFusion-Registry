import { MapPinned } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                <MapPinned className="text-blue-500" />
                <span className="text-2xl font-extrabold text-white">FleetFusion</span>
                </div>
                <div className="text-sm text-gray-400">Enterprise Fleet Management</div>
            </div>
            <div className="flex items-center gap-6">
                <Link href="#features" className="text-gray-400 hover:text-white">
                Features
                </Link>
                <Link href="#pricing" className="text-gray-400 hover:text-white">
                Pricing
                </Link>
                <Link href="#demos" className="text-gray-400 hover:text-white">
                Demos
                </Link>
            </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
                © 2025 FleetFusion. All rights reserved. | Terms of Service | Privacy
            </p>
            </div>
        </div>
    </footer>
    )
  }