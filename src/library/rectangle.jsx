import React from 'react'

const Rectangle = (x = 0, y = 0, width = 50, height = 25, colour = '#f46767') => (
  <rect x={x} y={y} width={width} height={height} fill={colour} />
)

Rectangle.args = ['x', 'y', 'width', 'height', 'colour']

export default Rectangle
