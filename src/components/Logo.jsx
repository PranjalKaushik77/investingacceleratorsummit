import React from 'react'

const Logo = ({ className }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized "M" shape with arrow */}
      <path
        d="M30 90 L30 30 L50 30 L60 50 L70 30 L90 30 L90 90 L70 90 L70 50 L60 70 L50 50 L50 90 Z"
        fill="white"
      />
      {/* Three dots on left */}
      <circle cx="20" cy="40" r="3" fill="white" />
      <circle cx="20" cy="60" r="3" fill="white" />
      <circle cx="20" cy="80" r="3" fill="white" />
      {/* Arrow pointing up-right */}
      <path
        d="M95 25 L110 25 L100 15 L110 10 L105 5 L95 15 L100 20 Z"
        fill="white"
      />
    </svg>
  )
}

export default Logo

