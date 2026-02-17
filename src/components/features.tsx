import { Activity, Brain, HeartPulse, BellRing } from "lucide-react"
import Image from "next/image"

// Feature data - each card in the 2x2 grid
const features = [
  {
    icon: Activity,
    title: "Personalized Exercise Programs",
    description:
      "Tailored movement plans that adapt to your progress and pain levels, designed by clinical specialists.",
  },
  {
    icon: HeartPulse,
    title: "Pain & Progress Tracking",
    description:
      "Monitor your symptoms daily, track improvements over time, and understand your pain patterns.",
  },
  {
    icon: Brain,
    title: "Expert Guidance",
    description:
      "Evidence-based education and clinical insights to help you understand and manage your condition.",
  },
  {
    icon: BellRing,
    title: "Adherence Support",
    description:
      "Smart reminders, motivation, and progress celebrations to keep you consistent on your recovery path.",
  },
]

export function Features() {
  return (
    <section id="features" className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - stock image of person stretching */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200">
            <Image
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=800&fit=crop"
              alt="Person doing gentle back stretches"
              fill
              className="object-cover"
            />
          </div>

          {/* Right side - heading + feature cards grid */}
          <div>
            {/* Section heading - large serif font like Letter's layout */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 font-serif leading-tight">
              Your complete recovery companion
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to manage low back pain, in one app.
            </p>

            {/* 2x2 feature cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title}>
                  <feature.icon className="h-6 w-6 text-teal-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
