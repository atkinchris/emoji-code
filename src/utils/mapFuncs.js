const mapFuncs = (commands, functionMap) => {
  const components = []
  const errors = []

  commands.forEach(({ command, args, lineNumber }) => {
    const func = functionMap[command]

    if (!func) {
      errors.push({ lineNumber })
    } else {
      components.push(func(...args))
    }
  })

  return {
    components,
    errors,
  }
}

export default mapFuncs
