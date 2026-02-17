import { TrendingUp, Globe, BarChart3 } from "lucide-react"

// Market statistics from pitch deck
const stats = [
  {
    value: "$4–8B",
    label: "Current DTx market size",
    icon: BarChart3,
  },
  {
    value: "$10.1B",
    label: "DTx market revenue by 2030",
    source: "Statista, 2024",
    icon: TrendingUp,
  },
  {
    value: "$2.86B",
    label: "Musculoskeletal DTx segment by 2030",
    source: "Statista, 2024",
    icon: TrendingUp,
  },
  {
    value: "$32.5B",
    label: "Optimistic DTx market estimate by 2030",
    source: "Grand View Research, 2024",
    icon: Globe,
  },
]

export function Market() {
  return (
    <section id="evidence" className="bg-gray-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-teal-400 font-semibold uppercase tracking-wider">
            Market Opportunity
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white font-serif">
            A rapidly growing market
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Digital therapeutics is one of the fastest-growing segments in healthcare, with the largest markets in the US and Europe (especially Germany).
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20">
                <stat.icon className="h-6 w-6 text-teal-400" />
              </div>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              {stat.source && (
                <p className="mt-1 text-xs text-gray-600">{stat.source}</p>
              )}
            </div>
          ))}
        </div>

        {/* Key insight */}
        <div className="mt-12 rounded-xl border border-teal-800/50 bg-teal-950/30 p-8 text-center">
          <p className="text-lg text-teal-300 font-medium">
            The most optimistic projections see the DTx market growing tenfold to $88 billion by 2030.
          </p>
          <p className="mt-2 text-sm text-gray-500">MRW, 2024</p>
        </div>
      </div>
    </section>
  )
}
