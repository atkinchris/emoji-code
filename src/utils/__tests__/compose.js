import compose from '../compose'

describe('compose', () => {
  const funcs = [jest.fn(), jest.fn(), jest.fn()]

  it('composes an array of functions into one function', () => {
    const func = compose(funcs)

    expect(typeof func).toBe('function')
  })

  it('calls each function in the array in sequence with the same arguments', () => {
    const func = compose(funcs)
    const args = ['a', 'b', '3']

    func(...args)

    expect(funcs[0]).toHaveBeenCalledWith(...args)
    expect(funcs[1]).toHaveBeenCalledWith(...args)
    expect(funcs[2]).toHaveBeenCalledWith(...args)
  })
})
