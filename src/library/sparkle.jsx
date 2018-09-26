import React from 'react'

const Sparkle = (x, y, scaleStr = 1) => {
  const scale = parseFloat(scaleStr) / 2

  return (
    <svg x={x} y={y} viewBox="0 0 128 128">
      <g transform={`scale(${scale} ${scale})`}>
        <path
          d="M19 45c12-9 20-18 24-25 4 7 11 16 23 25-12 8-19 18-23 24-4-6-12-16-24-24z"
          fill="#fcc21b"
        />
        <path
          d="M47 80s8-19 29-32l6-3-6-4a76 76 0 0 1-29-31L43 0l-4 10S31 28 9 41l-6 4 6 3c22 13 30 32 30 32l4 10 4-10zM19 45c12-9 20-18 24-25 4 7 11 16 23 25-12 8-19 18-23 24-4-6-12-16-24-24z"
          fill="#f79329"
        />
      </g>
    </svg>
  )
}

export default Sparkle
