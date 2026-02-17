"use client"

import { ShaderAnimation } from "@/components/ui/shader-animation"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Shader animation fills the entire hero background */}
      <ShaderAnimation />

      {/* Text overlay centered on top of the shader */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white text-center font-serif">
          Beyond back pain
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-lg md:text-xl text-white/80 text-center leading-relaxed">
          Evidence-based digital therapy for lasting low back pain relief.
        </p>

        {/* Liquid glass CTA button */}
        <div className="mt-10">
          <LiquidButton size="xxl" className="text-white text-base font-semibold">
            Start Your Recovery
          </LiquidButton>
        </div>
      </div>
    </section>
  )
}
