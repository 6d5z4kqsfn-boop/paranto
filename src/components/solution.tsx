"use client"

import { Route, Smartphone, BookOpen } from "lucide-react"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

// Solution pillars from pitch deck - translated to English
const solutions = [
  {
    icon: Route,
    title: "A clear path to living with pain",
    description:
      "A six-week digital therapy program that progresses week by week. You always know what comes next — no overwhelm, no uncertainty.",
  },
  {
    icon: Smartphone,
    title: "Support in daily life, not just at appointments",
    description:
      "A web-based DTx that walks alongside you every day. It doesn't just focus on pain — it helps you understand your body and move safely. Small wins build confidence and break the pain cycle.",
  },
  {
    icon: BookOpen,
    title: "Evidence-based, but human",
    description:
      "Content is grounded in research and clinical expertise, but designed to be approachable and easy to understand. The solution works independently or alongside physiotherapy — it doesn't replace care, it amplifies its impact.",
  },
]

export function Solution() {
  return (
    <section id="solution" className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-16">
          <p className="text-sm font-mono text-teal-400 font-semibold uppercase tracking-wider">
            Our Solution
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white font-serif leading-tight max-w-2xl">
            Digital therapy that fits your life
          </h2>
        </div>

        {/* Three solution columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {solutions.map((solution) => (
            <div key={solution.title} className="group">
              {/* Teal accent dot */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg shadow-teal-500/20">
                <solution.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {solution.title}
              </h3>
              <p className="mt-3 text-gray-400 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <LiquidButton size="xl" className="text-white font-semibold">
            Learn More
          </LiquidButton>
        </div>
      </div>
    </section>
  )
}
