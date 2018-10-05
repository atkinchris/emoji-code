const regex = /^([A-z]+)[ ]*\(([A-z0-9 #,.-]*)\)$/

const evaluate = text => {
  const errors = []
  const commands = []

  const lines = String(text).match(/[^\r\n]+/g)

  if (lines === null) {
    return { commands, errors }
  }

  lines
    .map((line, lineNumber) => ({
      command: line.replace(/[^a-zA-Z0-9 ()#,.-]/g, '').trim(),
      lineNumber,
    }))
    .filter(_ => !!_)
    .forEach(({ command, lineNumber }) => {
      const groups = command.match(regex)

      if (groups === null) {
        errors.push({ lineNumber })
        return
      }

      const commandName = groups[1]
      const args = groups[2]
        .split(',')
        .map(arg => arg.trim())
        .filter(_ => _)

      const id = `${lineNumber}:${commandName}`

      commands.push({
        lineNumber,
        command: commandName,
        args: [id, ...args],
      })
    })

  return {
    commands,
    errors,
  }
}

export default evaluate
