import Image from "next/image"
import { Button } from "@/registry/fleetfusion-dark/ui/button"

export function HeroSection() {
  return (
    <div className="w-full">
      <section className="inset-0">
        <Image
          src="/landing-hero.png"
          alt="hero background"
          fill
          className="object-fill" />
      </section>
      <section className="relative container mx-auto flex items-center">
        <div className="max-w-xl mt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Enterprise-Grade UI Components for TMS
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            FleetFusion frontend unifies dispatch, compliance, and real-time analytics so you can get freight out the
            door—faster, safer, smarter.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
            Watch Demo →
          </Button>
        </div>
      </section>
    </div>
  )
}
