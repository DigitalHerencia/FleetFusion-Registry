import { SettingsDashboard } from "@/registry/fleetfusion-dark/business/settings/settings-dashboard"
import { PageHeader } from "@/registry/fleetfusion-dark/ui/page-header"
import { Button } from "@/registry/fleetfusion-dark/ui/button"
import { Save } from "lucide-react"

export default function SettingsDemo() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-black text-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold text-white">Settings</h1>
            <div className="flex items-center gap-2 bg-green-500/20 rounded-full px-3 py-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Live</span>
            </div>
          </div>
          <h2 className="text-sm text-white/90">Manage your account and application settings with comprehensive configuration options</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            className="rounded-md bg-blue-500 px-6 py-2 font-semibold text-white hover:bg-blue-800"
          >
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Settings Dashboard */}
      <SettingsDashboard />
    </div>
  )
}
