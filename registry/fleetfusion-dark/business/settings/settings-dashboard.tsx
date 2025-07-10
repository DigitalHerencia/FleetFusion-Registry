"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/fleetfusion-dark/ui/tabs"
import { CreditCard, HelpCircle } from "lucide-react"
import { CompanySettings } from "./company-settings"
import { UserSettings } from "./user-settings"
import { NotificationSettings } from "./notification-settings"
import { IntegrationSettings } from "./integration-settings"

// Loading component for Settings page
function SettingsLoading() {
  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
    </div>
  )
}

// Billing Settings
function BillingSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="rounded-lg border p-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-medium">Current Plan: Professional</h4>
              <p className="text-sm text-white">$99/month, billed monthly</p>
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full sm:w-auto">
              Change Plan
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Payment Method</h4>
          <div className="rounded-lg border p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Visa ending in 4242</p>
                  <p className="text-sm text-white">Expires 12/2025</p>
                </div>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 px-3 text-white hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Billing Address</h4>
          <div className="rounded-lg border p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p>C & J Express Inc.</p>
                <p>123 Trucking Way</p>
                <p>Atlanta, GA 30301</p>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 px-3 text-white hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
                Edit
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium">Billing History</h4>
          <div className="rounded-lg border">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b p-4 gap-2">
              <div>
                <p className="font-medium">Invoice #INV-2023-11</p>
                <p className="text-sm text-white">Nov 1, 2023 - $99.00</p>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 px-3 text-white hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
                Download
              </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b p-4 gap-2">
              <div>
                <p className="font-medium">Invoice #INV-2023-10</p>
                <p className="text-sm text-white">Oct 1, 2023 - $99.00</p>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 px-3 text-white hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
                Download
              </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 gap-2">
              <div>
                <p className="font-medium">Invoice #INV-2023-09</p>
                <p className="text-sm text-white">Sep 1, 2023 - $99.00</p>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 px-3 text-white hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Support Settings
function SupportSettings() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="rounded-lg border p-4">
          <h4 className="font-medium">Contact Support</h4>
          <p className="text-sm text-white mb-4">Our support team is available Monday-Friday, 9am-5pm ET</p>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm">support@fleetfusion.com</p>
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm">(800) 555-FLEET</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Subject
            </label>
            <input
              id="subject"
              placeholder="Brief description of your issue"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Please describe your issue in detail"
              rows={5}
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Attachments
            </label>
            <div className="flex items-center gap-2">
              <input
                id="attachments"
                type="file"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto"
          >
            Submit Support Request
          </button>
        </form>

        <div className="rounded-lg border p-4 mt-6">
          <h4 className="font-medium mb-2">Documentation & Resources</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              <a href="#" className="text-blue-600 hover:underline">
                User Guide
              </a>
            </div>
            <div className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              <a href="#" className="text-blue-600 hover:underline">
                Video Tutorials
              </a>
            </div>
            <div className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              <a href="#" className="text-blue-600 hover:underline">
                FAQs
              </a>
            </div>
            <div className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              <a href="#" className="text-blue-600 hover:underline">
                API Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Settings Dashboard
export function SettingsDashboard() {
  return (
    <Tabs defaultValue="user" className="w-full">
      <TabsList className="w-full md:w-auto grid grid-cols-2 md:grid-cols-4 bg-black border border-muted">
        <TabsTrigger 
          value="user" 
          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
        >
          User Profile
        </TabsTrigger>
        <TabsTrigger 
          value="company"
          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
        >
          Company
        </TabsTrigger>
        <TabsTrigger 
          value="notifications"
          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
        >
          Notifications
        </TabsTrigger>
        <TabsTrigger 
          value="integrations"
          className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-white/70"
        >
          Integrations
        </TabsTrigger>
      </TabsList>
      <TabsContent value="user" className="mt-4">
        <Card className="border-muted rounded-lg border bg-black">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">User Profile</CardTitle>
            <CardDescription className="text-white/70">Manage your personal information and preferences.</CardDescription>
          </CardHeader>
          <CardContent>
            <UserSettings />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="company" className="mt-4">
        <Card className="border-muted rounded-lg border bg-black">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">Company Settings</CardTitle>
            <CardDescription className="text-white/70">Manage your company information and preferences.</CardDescription>
          </CardHeader>
          <CardContent>
            <CompanySettings />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications" className="mt-4">
        <Card className="border-muted rounded-lg border bg-black">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">Notification Preferences</CardTitle>
            <CardDescription className="text-white/70">Manage how and when you receive notifications.</CardDescription>
          </CardHeader>
          <CardContent>
            <NotificationSettings />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="integrations" className="mt-4">
        <Card className="border-muted rounded-lg border bg-black">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white">Integrations</CardTitle>
            <CardDescription className="text-white/70">Connect with third-party services and APIs.</CardDescription>
          </CardHeader>
          <CardContent>
            <IntegrationSettings />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
