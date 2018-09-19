import mapFuncs from '../mapFuncs'

describe('mapFuncs', () => {
  const map = {
    foo: jest.fn(() => () => null),
    bar: jest.fn(() => () => null),
    zoo: jest.fn(() => () => null),
  }

  const tokens = [
    { command: 'foo', args: ['a', 'b', '3'] },
    { command: 'zoo', args: ['1', 'b', 'b', '2'] },
    { command: 'foo', args: [] },
    { command: 'bar', args: ['1', '1', '0.5'] },
  ]

  it('maps an array of commands to an array of functions', () => {
    const functions = mapFuncs(tokens, map)

    expect(Array.isArray(functions)).toBe(true)
    expect(functions.every(fn => typeof fn === 'function')).toBe(true)
  })

  it('calls each function with the arguments', () => {
    mapFuncs(tokens, map)

    expect(map.foo.mock.calls[0]).toEqual(['a', 'b', '3'])
    expect(map.zoo.mock.calls[0]).toEqual(['1', 'b', 'b', '2'])
    expect(map.foo.mock.calls[1]).toEqual([])
    expect(map.bar.mock.calls[0]).toEqual(['1', '1', '0.5'])
  })
})
