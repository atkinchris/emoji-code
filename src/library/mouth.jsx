import React from 'react'

const Mouth = (x, y, colour = '#664e27') => (
  <svg x={x} y={y}>
    <path
      d="M0 .8c.1.2 1.5 5.4 9.4 5.4S18.7 1 18.8.7c.1-.3-.1-.6-.3-.7-.2-.1-.5-.1-.7.1 0 0-2.4 2.3-8.3 2.3S1.2.1 1.2.1C.9.1.8 0 .6 0 .5 0 .4 0 .3.1.1.2 0 .5 0 .8"
      fill={colour}
    />
  </svg>
)

Mouth.args = ['x', 'y', 'colour']

Mouth.previewViewBox = '0 0 19 7'

export default Mouth
