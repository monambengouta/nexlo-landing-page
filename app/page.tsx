"use client"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import LoaltyCardsSection from "@/components/loyalty-cards-section"
import FeaturesSection from "@/components/features-section"
import DemoModal from "@/components/demo-modal"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import GeoLocationMapSection from "@/components/geo-location-map"

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation onDemoClick={() => setIsDemoOpen(true)} />
      <HeroSection onDemoClick={() => setIsDemoOpen(true)} />
      <LoaltyCardsSection />
      <GeoLocationMapSection />
      <FeaturesSection onDemoClick={() => setIsDemoOpen(true)} />
      <Footer />
      <DemoModal open={isDemoOpen} onOpenChange={setIsDemoOpen} />
    </main>
  )
}
