import React from 'react'

const Circle = (x = 25, y = 25, r = 25, colour = '#ffdd67') => (
  <circle cx={x} cy={y} r={r} fill={colour} />
)

Circle.args = ['x', 'y', 'radius', 'colour']

export default Circle
