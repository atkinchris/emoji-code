const mapFuncs = (commands, functionMap) =>
  commands.map(({ command, args }) => functionMap[command](...args))

export default mapFuncs
