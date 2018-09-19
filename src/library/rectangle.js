const rectangle = (xStr, yStr, widthStr, heightStr, colour = 'red') => p => {
  const x = parseFloat(xStr)
  const y = parseFloat(yStr)
  const width = parseFloat(widthStr)
  const height = parseFloat(heightStr)

  p.noStroke()
  p.fill(colour)
  p.rect(x, y, width, height)
}

export default rectangle
