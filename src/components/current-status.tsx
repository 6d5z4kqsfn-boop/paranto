import { Clock3, FlaskConical, Target } from "lucide-react"
import type { ComponentType } from "react"
import { currentStatusContent, type StatusCardIcon } from "@/lib/current-status-data"

const iconByKey: Record<StatusCardIcon, ComponentType<{ className?: string }>> = {
  target: Target,
  flask: FlaskConical,
  clock: Clock3,
}

export function CurrentStatus() {
  return (
    <section id="status" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-mono text-teal-600 font-semibold uppercase tracking-wider">
            {currentStatusContent.sectionLabel}
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 font-serif leading-tight">
            {currentStatusContent.title}
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {currentStatusContent.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentStatusContent.cards.map((item) => {
            const Icon = iconByKey[item.icon]

            return (
              <article
                key={item.label}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
              >
                <Icon className="h-5 w-5 text-teal-600" />
                <p className="mt-4 text-sm font-medium uppercase tracking-wider text-gray-500">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-gray-900">
                  {item.value}
                </p>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.note}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
