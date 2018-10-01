import React from 'react'

const Eye = (x, y, colour = '#664e27') => (
  <svg x={x} y={y}>
    <ellipse cx="5" cy="6" rx="5" ry="6" fill={colour} />
  </svg>
)

Eye.args = ['x', 'y', 'colour']

Eye.previewStyle = {
  width: '50px',
}

Eye.previewViewBox = '0 0 10 12'

export default Eye
