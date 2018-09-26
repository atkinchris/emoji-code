import React from 'react'

const SemiCircle = (xStr, yStr, rStr, colour = 'red') => {
  const x = parseFloat(xStr)
  const y = parseFloat(yStr)
  const r = parseFloat(rStr)

  return <path d={`M${x - r},${y} a${r},${r} 0 1,0 ${r * 2},0 L${x + r},${y} Z`} fill={colour} />
}

export default SemiCircle
