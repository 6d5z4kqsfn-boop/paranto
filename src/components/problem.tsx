import { AlertCircle, Building2, Puzzle } from "lucide-react"

// Problem cards from pitch deck - translated to English
const problems = [
  {
    icon: AlertCircle,
    title: "Chronic low back pain is underdiagnosed and undertreated",
    description:
      "Especially among desk workers, low back pain often becomes chronic without notice. Symptoms are treated sporadically, not systematically, and evidence-based care is not easily accessible in daily life.",
  },
  {
    icon: Building2,
    title: "Current solutions are not scalable or accessible",
    description:
      "Healthcare systems face resource shortages. Traditional physiotherapy requires time, presence, and resources. Not everyone has the opportunity or motivation to commit to long care pathways, leading to dropouts and poor outcomes.",
  },
  {
    icon: Puzzle,
    title: "Seeking help is fragmented and overwhelming",
    description:
      "Help is available, but the path is unclear. Appointments, instructions, and exercises come from different directions, and no one walks alongside you in daily life. When fatigue hits, exercises are easily skipped.",
  },
]

export function Problem() {
  return (
    <section id="problem" className="bg-gray-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - section title */}
          <div>
            <p className="text-sm font-mono text-teal-400 font-semibold uppercase tracking-wider">
              The Problem
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white font-serif leading-tight">
              Low back pain disrupts daily life and work capacity
            </h2>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              But the care pathway is fragmented.
            </p>
          </div>

          {/* Right side - problem cards */}
          <div className="space-y-8">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="flex gap-5 rounded-xl border border-gray-800 bg-gray-900/50 p-6"
              >
                {/* Teal icon circle (inspired by the pitch deck's teal dots) */}
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/20">
                  <problem.icon className="h-5 w-5 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
