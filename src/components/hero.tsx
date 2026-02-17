"use client"

import { ShaderAnimation } from "@/components/ui/shader-animation"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Shader animation fills the entire hero background */}
      <ShaderAnimation />

      {/* Text overlay centered on top of the shader */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none">
        {/* Main headline - large serif font like Letter's "Beyond banking" */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white text-center font-serif">
          Beyond back pain
        </h1>

        {/* Subtitle describing the product */}
        <p className="mt-6 max-w-xl text-lg md:text-xl text-white/80 text-center leading-relaxed">
          Evidence-based digital therapy for lasting low back pain relief.
        </p>

        {/* Call-to-action button */}
        <a
          href="#"
          className="mt-10 pointer-events-auto rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 transition-all hover:bg-white/90 hover:scale-105"
        >
          Start Your Recovery
        </a>
      </div>
    </section>
  )
}
