const circle = (xStr, yStr, radiusStr, colour = 'red') => p => {
  const x = parseFloat(xStr)
  const y = parseFloat(yStr)
  const radius = parseFloat(radiusStr)

  p.noStroke()
  p.fill(colour)
  p.ellipse(x, y, radius)
}

export default circle
