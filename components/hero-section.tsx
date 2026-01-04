"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone } from "lucide-react"

export default function HeroSection({ onDemoClick }: { onDemoClick: () => void }) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-border/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span className="text-sm text-muted-foreground">For Modern Shops & Restaurants</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Digital Loyalty Cards That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent">
              Drive Real Results
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
            Give your customers digital loyalty cards in Google Wallet and Apple Wallet. Manage reviews, control your
            social media presence, and build lasting customer relationships—all from one intuitive platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={onDemoClick}
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 h-12 text-base font-semibold gap-2"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-border rounded-full px-8 h-12 text-base font-semibold bg-transparent"
            >
              See How It Works
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground">Shops & Restaurants</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">Digital Cards Issued</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">35%</div>
              <div className="text-sm text-muted-foreground">Avg. Revenue Increase</div>
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-8 sm:p-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Smartphone className="w-6 h-6 text-accent" />
            <span className="text-sm text-muted-foreground font-medium">Google Wallet & Apple Wallet Ready</span>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Your digital loyalty cards appear directly in customer wallets</p>
            <div className="inline-block">
              <div className="flex gap-3">
                <div className="w-20 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg border border-primary/40"></div>
                <div className="w-20 h-32 bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg border border-primary/40"></div>
                <div className="w-20 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg border border-primary/40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
