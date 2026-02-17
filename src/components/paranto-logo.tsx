// Paranto logo - rounded medical cross matching the brand identity
// The design is a thick cross with rounded corners, outline style

export function ParantoLogo({ className = "h-8 w-8", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cross shape: two overlapping rounded rectangles */}
      {/* Vertical bar */}
      <rect
        x="30"
        y="5"
        width="40"
        height="90"
        rx="16"
        ry="16"
        stroke={color}
        strokeWidth="6"
        fill="none"
      />
      {/* Horizontal bar */}
      <rect
        x="5"
        y="30"
        width="90"
        height="40"
        rx="16"
        ry="16"
        stroke={color}
        strokeWidth="6"
        fill="none"
      />
    </svg>
  )
}
