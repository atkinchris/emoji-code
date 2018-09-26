import React from 'react'

const Rectangle = (x, y, width, height, colour = 'red') => (
  <rect x={x} y={y} width={width} height={height} fill={colour} />
)

export default Rectangle
