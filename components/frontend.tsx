import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { Shield, FileCheck, Clock, AlertTriangle, BarChart3, FileText, MapPinned, Truck, Users } from "lucide-react"
import { Card } from "../registry/fleetfusion-dark/ui/card"

export function FrontendFeatures() {
  return (
    <div className="relative mt-48 w-full">
      <section className="w-full bg-black py-24">
        <div className="container mx-auto px-4 text-center mb-20">
          <h1 className="text-5xl font-extrabold text-blue-500 mb-4">
            Comprehensive Fleet Management UI
          </h1>
          <h2 className="text-xl text-white max-w-3xl mx-auto">
            Everything you need to manage your fleet operations efficiently
          </h2>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature Cards */}
            <Card className="bg-gray-900 border-gray-700 text-center p-8">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Dispatch & Routing</h3>
              <p className="text-gray-400">Optimize loads, assign drivers, and track vehicles in real time.</p>
            </Card>

            <Card className="bg-gray-900 border-gray-700 text-center p-8">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Compliance Automation</h3>
              <p className="text-gray-400">Automate document management, HOS, and safety compliance.</p>
            </Card>

            <Card className="bg-gray-900 border-gray-700 text-center p-8">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Analytics & Reporting</h3>
              <p className="text-gray-400">Gain insights into performance, costs, and utilization.</p>
            </Card>

            <Card className="bg-gray-900 border-gray-700 text-center p-8">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Document Management</h3>
              <p className="text-gray-400">Centralize and securely store all your fleet and driver documents.</p>
            </Card>

            <Card className="bg-gray-900 border-gray-700 text-center p-8">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPinned className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">IFTA Management</h3>
              <p className="text-gray-400">
                Automate IFTA reporting and fuel tax calculations to ensure compliance and save time.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-700 text-center p-8">
              <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Team Collaboration</h3>
              <p className="text-gray-400">Empower your team with shared schedules, notes, and communication tools.</p>
            </Card>
          </div>
        </div>
      </section>
      </div>
  )
}
