import React from 'react'

const rectangle = (x, y, width, height, colour = 'red') => (
  <rect x={x} y={y} width={width} height={height} fill={colour} />
)

export default rectangle
