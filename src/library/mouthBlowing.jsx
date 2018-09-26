import React from 'react'

const MouthBlowing = (x, y, scale, colour = '#664e27') => (
  <svg x={x} y={y}>
    <path
      fill={colour}
      d="M8.6 14.9c1.6-1.6-1.8-3-1.8-5.9s3.4-4.2 1.8-5.9c-1.9-2-6-.5-8.6-3.1 0 2.2 1.8 4.5 5.2 4.5 0 0-2.3.9-2.3 4.5s2.3 4.5 2.3 4.5C1.8 13.5 0 15.8 0 18c2.6-2.7 6.7-1.2 8.6-3.1"
    />
  </svg>
)

export default MouthBlowing
