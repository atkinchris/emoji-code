import React from 'react'

const EyeWinking = (x = 0, y = 0, colour = '#664e27') => (
  <svg x={x} y={y}>
    <path
      d="M15 6.1C13.1 2 10.3 0 7.5 0S1.9 2 0 6.1c-.2.4.8 1.2 1.3.8 1.8-1.5 4-2.1 6.2-2.1s4.4.6 6.2 2.1c.5.4 1.4-.3 1.3-.8"
      fill={colour}
    />
  </svg>
)

EyeWinking.args = ['x', 'y', 'colour']

EyeWinking.previewViewBox = '0 0 15 8'

export default EyeWinking
