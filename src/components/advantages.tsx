import { Users, FlaskConical, Scaling, Lightbulb } from "lucide-react"
import Image from "next/image"

// Competitive advantages from pitch deck - translated to English
const advantages = [
  {
    icon: Users,
    title: "Multidisciplinary Team",
    description:
      "Our team combines clinical expertise (physicians), technology, and business. Human capital value in the €500,000/year range.",
    position: "top-left",
  },
  {
    icon: FlaskConical,
    title: "Research-Backed",
    description:
      "Our solution is grounded in scientific research. Development is supported by publishable clinical studies.",
    position: "top-right",
  },
  {
    icon: Scaling,
    title: "Scalability",
    description:
      "Web-based, modular digital therapy with no dependency on live resources. Enables wide adoption in occupational health and public healthcare.",
    position: "bottom-left",
  },
  {
    icon: Lightbulb,
    title: "Second Mover Advantage",
    description:
      "We learn from pioneers in the field. The reimbursement model is only in pilot phase in Finland, making this a young market with significant opportunity.",
    position: "bottom-right",
  },
]

export function Advantages() {
  return (
    <section className="bg-gray-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-teal-400 font-semibold uppercase tracking-wider">
            Why Paranto
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white font-serif">
            Competitive advantages
          </h2>
        </div>

        {/* 2x2 grid with center image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left column */}
          <div className="space-y-8">
            {advantages.slice(0, 2).map((adv) => (
              <div
                key={adv.title}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
              >
                <adv.icon className="h-6 w-6 text-teal-400 mb-3" />
                <h3 className="text-lg font-semibold text-white">
                  {adv.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-800 hidden md:block">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop"
              alt="Person celebrating fitness achievement"
              fill
              className="object-cover"
            />
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {advantages.slice(2, 4).map((adv) => (
              <div
                key={adv.title}
                className="rounded-xl border border-gray-800 bg-gray-900/50 p-6"
              >
                <adv.icon className="h-6 w-6 text-teal-400 mb-3" />
                <h3 className="text-lg font-semibold text-white">
                  {adv.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
