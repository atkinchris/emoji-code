import tokenise from '../tokenise'

describe('tokenise', () => {
  it('returns an array of tokens for the text', () => {
    const text = `
      circle(10, 10, purple, 5)
      square(15, -4, red, 2.5, 2.5)
    `
    const tokens = tokenise(text)

    expect(tokens).toEqual([
      { command: 'circle', arguments: ['10', '10', 'purple', '5'] },
      { command: 'square', arguments: ['15', '-4', 'red', '2.5', '2.5'] },
    ])
  })

  it('should ignore blank lines and indentation', () => {
    const text = `

    circle(10, 10, purple, 5)



        square(15, -4, red, 2.5, 2.5)
    `
    const tokens = tokenise(text)

    expect(tokens).toEqual([
      { command: 'circle', arguments: ['10', '10', 'purple', '5'] },
      { command: 'square', arguments: ['15', '-4', 'red', '2.5', '2.5'] },
    ])
  })

  it('should ignore unnecessary whitespace', () => {
    const text = `
      circle(10,       10 , purple, 5)
      square  ( 15,   -4, red , 2.5  , 2.5  )
    `
    const tokens = tokenise(text)

    expect(tokens).toEqual([
      { command: 'circle', arguments: ['10', '10', 'purple', '5'] },
      { command: 'square', arguments: ['15', '-4', 'red', '2.5', '2.5'] },
    ])
  })
})
