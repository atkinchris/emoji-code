const mapFuncs = (tokens, functionMap) =>
  tokens.map(({ command, args }) => functionMap[command](...args))

export default mapFuncs
