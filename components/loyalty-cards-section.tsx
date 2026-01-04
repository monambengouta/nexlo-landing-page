"use client"

import { useState } from "react"
import { Gift, Star, Crown } from "lucide-react"

export default function LoyaltyCardsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const cards = [
    {
      id: 1,
      color: "from-blue-500 to-cyan-500",
      label: "Coffee Break",
      points: "2,450",
      icon: Gift,
    },
    {
      id: 2,
      color: "from-purple-500 to-pink-500",
      label: "Bella Pizzeria",
      points: "5,890",
      icon: Star,
    },
    {
      id: 3,
      color: "from-amber-500 to-orange-500",
      label: "Elite Retail",
      points: "12,340",
      icon: Crown,
    },
  ]

  return (
    <section id="wallet-cards" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Digital Loyalty Cards Ready for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Google & Apple Wallet
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Create beautiful, branded loyalty cards that live directly in your customers' digital wallets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const IconComponent = card.icon
            return (
              <div
                key={card.id}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-64 rounded-2xl border-2 border-border overflow-hidden group">
                  {/* Card gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} transition-all duration-300 ${
                      hoveredId === card.id ? "scale-110" : "scale-100"
                    }`}
                  ></div>

                  {/* Card content area */}
                  <div className="relative h-full p-8 flex flex-col justify-between text-white z-10">
                    {/* Top section - Logo/Branding area */}
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/30 rounded-lg backdrop-blur-sm flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-lg font-semibold">{card.label}</div>
                        <div className="h-2 bg-white/30 rounded w-1/2"></div>
                      </div>
                    </div>

                    {/* Bottom section - Points/Info area */}
                    <div className="space-y-3">
                      <div className="text-sm text-white/80">Your Points</div>
                      <div className="text-3xl font-bold font-mono">{card.points}</div>
                      <div className="text-xs text-white/60">Tap to add to wallet</div>
                    </div>
                  </div>

                  {/* Shimmer effect on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 transition-opacity duration-500 ${
                      hoveredId === card.id ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transform: hoveredId === card.id ? "skewX(-20deg)" : "none",
                      animation: hoveredId === card.id ? "shimmer 2s infinite" : "none",
                    }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>

        <style jsx>{`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%) skewX(-20deg);
            }
            100% {
              transform: translateX(100%) skewX(-20deg);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
