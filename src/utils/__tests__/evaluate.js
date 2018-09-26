import evaluate from '../evaluate'

describe('evaluate', () => {
  it('returns an array of commands for the text', () => {
    const text = `
      circle(10, 10, purple, 5)
      square(15, -4, red, 2.5, 2.5)
    `
    const { commands } = evaluate(text)

    expect(commands).toEqual([
      { command: 'circle', args: ['10', '10', 'purple', '5'] },
      { command: 'square', args: ['15', '-4', 'red', '2.5', '2.5'] },
    ])
  })

  it('should ignore blank lines and indentation', () => {
    const text = `

    circle(10, 10, purple, 5)



        square(15, -4, red, 2.5, 2.5)
    `
    const { commands } = evaluate(text)

    expect(commands).toEqual([
      { command: 'circle', args: ['10', '10', 'purple', '5'] },
      { command: 'square', args: ['15', '-4', 'red', '2.5', '2.5'] },
    ])
  })

  it('should ignore unnecessary whitespace', () => {
    const text = `
      circle(10,       10 , purple, 5)
      square  ( 15,   -4, red , 2.5  , 2.5  )
    `
    const { commands } = evaluate(text)

    expect(commands).toEqual([
      { command: 'circle', args: ['10', '10', 'purple', '5'] },
      { command: 'square', args: ['15', '-4', 'red', '2.5', '2.5'] },
    ])
  })
})
