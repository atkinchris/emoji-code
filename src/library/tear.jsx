import React from 'react'

const Tear = (x = 0, y = 0, rotation = 0, colour = '#65b1ef') => (
  <path
    transform={`translate(${x} ${y}) rotate(${rotation})`}
    d="M14.4 15.5C14.6 26.1.3 25.7 0 15.1-.2 7.4 6.8 0 6.8 0s7.3 7.8 7.6 15.5"
    fill={colour}
  />
)

Tear.args = ['x', 'y', 'rotation', 'colour']

Tear.previewViewBox = '0 0 14 24'

export default Tear
