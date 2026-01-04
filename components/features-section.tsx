"use client"

import { Zap, BarChart3, Lock, Wallet, MapPin, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Wallet,
    title: "Digital Wallet Ready",
    description: "Cards appear in Google Pay and Apple Wallet instantly",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track customer behavior, repeat purchases, and ROI",
  },
  {
    icon: MapPin,
    title: "Google Geo Notifications",
    description: "Send location-based loyalty offers when customers near your shop",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level encryption and PCI compliance built-in",
  },
  {
    icon: MessageSquare,
    title: "Google Maps Review Collection",
    description: "Automatically collect and manage reviews from Google Maps",
  },
  {
    icon: Zap,
    title: "Easy Integration",
    description: "Connect to your POS in minutes, no technical skills needed",
  },
]

export default function FeaturesSection({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Everything Your Shop{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Needs to Thrive
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built specifically for restaurants, cafes, boutiques, and retail shops to build lasting customer
            relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors group"
              >
                <Icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Shop?</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of shop owners who are increasing customer loyalty, managing reviews, and growing their
            business with Nexlo.
          </p>
          <Button
            onClick={onDemoClick}
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 h-12 text-base font-semibold"
          >
            Schedule Your Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
