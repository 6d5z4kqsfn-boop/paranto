"use client"

import { Check } from "lucide-react"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

// Pricing tiers from pitch deck - translated to English
const tiers = [
  {
    name: "Basic",
    price: "€40",
    unit: "per user",
    audience: "Individuals / HR wellness",
    features: [
      "6-week low back pain DTx program",
      "Self-service web application",
      "Content based on clinical evidence",
    ],
    extras: null,
    highlighted: false,
  },
  {
    name: "Standard",
    price: "€145",
    unit: "per user",
    audience: "Occupational health / Insurers",
    features: [
      "Full 6-week DTx program",
      "Outcome tracking (pain, function)",
      "HR dashboard (anonymized data)",
    ],
    extras: "Impact reports, physiotherapy integration",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "€300",
    unit: "per user",
    audience: "Public healthcare / Reimbursement",
    features: [
      "Suitable for physician prescribing",
      "Customized for public sector needs",
      "Full clinical outcome tracking",
    ],
    extras: "Tailored to public sector requirements",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-teal-400 font-semibold uppercase tracking-wider">
            Pricing
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white font-serif">
            Plans for every need
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            From individual users to enterprise healthcare solutions.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.highlighted
                  ? "border-2 border-teal-500 bg-gray-900"
                  : "border border-gray-800 bg-gray-900/50"
              }`}
            >
              {/* Highlighted badge */}
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-teal-500 px-4 py-1 text-xs font-semibold text-black">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier name */}
              <h3 className="text-lg font-semibold text-white">{tier.name}</h3>

              {/* Price */}
              <div className="mt-4">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                <span className="ml-2 text-sm text-gray-400">/{tier.unit}</span>
              </div>

              {/* Audience */}
              <p className="mt-2 text-sm text-teal-400">{tier.audience}</p>

              {/* Features list */}
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-teal-400 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Extras */}
              {tier.extras && (
                <p className="mt-6 text-xs text-gray-500 border-t border-gray-800 pt-4">
                  Add-ons: {tier.extras}
                </p>
              )}

              {/* CTA button */}
              <div className="mt-8">
                <LiquidButton
                  size="lg"
                  className={`w-full font-semibold ${
                    tier.highlighted ? "text-teal-300" : "text-white"
                  }`}
                >
                  Get Started
                </LiquidButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
