import { ClipboardList, Sliders, TrendingUp } from "lucide-react"

// Three-step process data
const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Assess",
    description:
      "Complete a brief clinical assessment so we understand your pain, history, and goals.",
  },
  {
    icon: Sliders,
    number: "02",
    title: "Personalize",
    description:
      "Receive a tailored therapy program with exercises, education, and tracking designed for you.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Progress",
    description:
      "Follow your program, track your recovery journey, and watch your pain improve over time.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 font-serif">
            How it works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to start your evidence-based recovery journey.
          </p>
        </div>

        {/* Three-step horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              {/* Step number */}
              <span className="text-sm font-mono text-teal-600 font-semibold">
                {step.number}
              </span>

              {/* Icon in a circle */}
              <div className="mt-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <step.icon className="h-7 w-7 text-gray-900" />
              </div>

              {/* Step title and description */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
