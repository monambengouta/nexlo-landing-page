"use client"

import { MapPin, Bell, Zap } from "lucide-react"

export default function GeoLocationMapSection() {
  const shopData = {
    name: "Downtown Coffee Shop",
    lat: 40.7128,
    lng: -74.006,
  }

  const nearbyCustomers = [
    { id: 1, name: "Sarah", distance: 0.3, reward: "10% Off" },
    { id: 2, name: "Mike", distance: 0.5, reward: "Free Beverage" },
    { id: 3, name: "Emma", distance: 0.7, reward: "Double Points" },
  ]

  return (
    <section id="geo-map" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Geo-Location Rewards with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Google Maps Integration
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Automatically notify nearby customers about exclusive rewards when they're close to your shop
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map section */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-96 rounded-2xl border-2 border-border overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
              {/* Simulated map background */}
              <svg className="w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                {/* Map grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#grid)" />

                {/* Shop pin - center */}
                <circle cx="200" cy="150" r="20" fill="#1f2937" opacity="0.3" />
                <g transform="translate(200, 150)">
                  <circle cx="0" cy="0" r="8" fill="#ef4444" />
                  <path d="M -4 0 Q 0 4 4 0 Q 0 -4 -4 0" fill="none" stroke="white" strokeWidth="1.5" />
                </g>

                {/* Customer pins - nearby */}
                {[
                  { x: 120, y: 100 },
                  { x: 260, y: 120 },
                  { x: 200, y: 220 },
                ].map((pos, idx) => (
                  <g key={idx} transform={`translate(${pos.x}, ${pos.y})`}>
                    <circle cx="0" cy="0" r="6" fill="#3b82f6" opacity="0.8" />
                    <circle cx="0" cy="0" r="3" fill="white" />
                    {/* Notification pulse */}
                    <circle cx="0" cy="0" r="10" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6">
                      <animate attributeName="r" from="8" to="16" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.8" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}

                {/* Shop label */}
                <text x="200" y="185" textAnchor="middle" className="fill-gray-800 text-xs font-semibold">
                  {shopData.name.split(" ").slice(0, 2).join("\n")}
                </text>
              </svg>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg border border-border">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span>Your Shop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Customers Nearby</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customers list */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Nearby Customers</h3>
            {nearbyCustomers.map((customer) => (
              <div
                key={customer.id}
                className="p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="font-semibold text-foreground">{customer.name}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {customer.distance} km away
                    </p>
                  </div>
                  <Bell className="w-5 h-5 text-primary animate-pulse" />
                </div>

                {/* Reward notification */}
                <div className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">{customer.reward}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
