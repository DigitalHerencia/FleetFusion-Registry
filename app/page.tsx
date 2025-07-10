"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/fleetfusion-dark/ui/card"
import { Truck, Shield } from "lucide-react"
import { ComplianceDemo } from "@/registry/fleetfusion-dark/features/compliance-demo"
import { DispatchDemo } from "@/registry/fleetfusion-dark/features/dispatch-demo"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FrontendFeatures } from "@/components/frontend"
import ComponentSection from "@/components/component-section"
import { Footer } from "@/components/footer"
import AnalyticsDemo from "@/registry/fleetfusion-dark/features/analytics-demo"
import DriversDemo from "@/registry/fleetfusion-dark/features/drivers-demo"
import IFTADemo from "@/registry/fleetfusion-dark/features/ifta-demo"
import SettingsDemo from "@/registry/fleetfusion-dark/features/settings-demo"
import VehiclesDemo from "@/registry/fleetfusion-dark/features/vehicles-demo"
import { DashboardDemo } from "@/registry/fleetfusion-dark/features/dashboard-demo" 

export default function Home() {
  return (
    <div className="flex flex-col">
    
      {/* Header */}
        <Header />

      {/* Hero Section */}
        <HeroSection />

      {/* Comprehensive Fleet Management Frontend Section */}
        <FrontendFeatures />

      {/* Pricing Section */}
        <ComponentSection />
      
      {/* Live Demos Section */}
      <section id="live-demos" className="relative bg-black">
        
        {/* Title Section */}
          <section id="title" className="relative py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-extrabold text-blue-500 uppercase mt-12 mb-4">
                COMPREHENSIVE FLEET MANAGEMENT FEATURES
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Everything you need to manage your fleet operations efficiently and effectively.
              </p>
            </div>
          </section>
          
          {/* Dispatch Demo */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <Card className="bg-black/80 border-white/20 backdrop-blur-sm overflow-auto max-w-6xl mx-auto">
                <CardHeader className="border-b border-white/20">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Truck className="w-5 h-5 text-blue-500" />
                    Live Dispatch Board Demo
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[600px] overflow-y-auto">
                    <DispatchDemo />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Compliance Demo */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <Card className="bg-black/80 border-white/20 backdrop-blur-sm overflow-hidden max-w-6xl mx-auto">
                <CardHeader className="border-b border-white/20">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-yellow-500" />
                    Compliance Management Demo
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[600px] overflow-y-auto">
                    <ComplianceDemo />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* <Dashboard> */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <Card className="bg-black/80 border-white/20 backdrop-blur-sm overflow-hidden max-w-6xl mx-auto">
                <CardHeader className="border-b border-white/20">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-yellow-500" />
                      Dashboard Management Demo
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[600px] overflow-y-auto">
                    <DashboardDemo />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Vehicles Demo */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <Card className="bg-black/80 border-white/20 backdrop-blur-sm overflow-hidden max-w-6xl mx-auto">
                <CardHeader className="border-b border-white/20">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-yellow-500" />
                    Vehicle Management Demo
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[600px] overflow-y-auto">
                    <VehiclesDemo />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>   
          </section>
          
      <section id="live-demos" className="relative">
        
        {/* Background Image */}
        <section className="inset-0 ">
          <Image
            src="/mountain-bg.png"
            alt="demo background"
            fill
            className="object-bottom w-full" />
        </section>
              
        {/* Analytics Demo */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <Card className="bg-black/80 border-white/20 backdrop-blur-sm overflow-auto max-w-6xl mx-auto">
                <CardHeader className="border-b border-white/20">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Truck className="w-5 h-5 text-blue-500" />
                    Live Analytics Board Demo
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[600px] overflow-y-auto">
                    <AnalyticsDemo />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Driver Demo */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <Card className="bg-black/80 border-white/20 backdrop-blur-sm overflow-hidden max-w-6xl mx-auto">
                <CardHeader className="border-b border-white/20">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-yellow-500" />
                    Driver Management Demo
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[600px] overflow-y-auto">
                    <DriversDemo />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* IFTA Demo */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <Card className="bg-black/80 border-white/20 backdrop-blur-sm overflow-hidden max-w-6xl mx-auto">
                <CardHeader className="border-b border-white/20">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-yellow-500" />
                    IFTA Management Demo
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[600px] overflow-y-auto">
                    <IFTADemo />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          
          {/* Settings Demo */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <Card className="bg-black/80 border-white/20 backdrop-blur-sm overflow-hidden max-w-6xl mx-auto">
                <CardHeader className="border-b border-white/20">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Shield className="w-5 h-5 text-yellow-500" />
                    Settings Demo
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[600px] overflow-y-auto">
                    <SettingsDemo />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>        
        
    
      </section>
      
      {/* Footer Section */}        
      <Footer />
    </div>
  )
}