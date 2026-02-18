export type StatusCardIcon = "target" | "flask" | "clock"

export type StatusCard = {
  icon: StatusCardIcon
  label: string
  value: string
  note: string
}

export type CurrentStatusContent = {
  sectionLabel: string
  title: string
  description: string
  cards: StatusCard[]
}

export const currentStatusContent: CurrentStatusContent = {
  sectionLabel: "Current Status",
  title: "Where things stand right now",
  description:
    "This section is intentionally light for now and ready for real outcomes when they are available.",
  cards: [
    {
      icon: "target",
      label: "Core Outcome",
      value: "Pending",
      note: "This slot is ready for your first validated result metric.",
    },
    {
      icon: "flask",
      label: "Validation Stage",
      value: "In Progress",
      note: "Use this area to summarize pilot, study, or product milestones.",
    },
    {
      icon: "clock",
      label: "Last Updated",
      value: "TBD",
      note: "Add a date once you start publishing live status updates.",
    },
  ],
}
