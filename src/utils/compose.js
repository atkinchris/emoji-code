const compose = funcs => (...args) => funcs.forEach(fn => fn(...args))

export default compose
