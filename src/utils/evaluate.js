const regex = /^([A-z]+)[ ]*\(([A-z0-9 #,.-]*)\)$/

const evaluate = text => {
  const errors = []
  const commands = []

  String(text)
    .match(/[^\r\n]+/g)
    .map((line, lineNumber) => ({
      command: line.replace(/[^a-zA-Z0-9 ()#,.-]/g, '').trim(),
      lineNumber,
    }))
    .filter(_ => !!_)
    .forEach(({ command, lineNumber }) => {
      const groups = command.match(regex)

      if (groups === null) {
        errors.push(lineNumber)
        return
      }

      commands.push({
        command: groups[1],
        args: groups[2]
          .split(',')
          .map(arg => arg.trim())
          .filter(_ => _),
      })
    })

  return {
    commands,
    errors,
  }
}

export default evaluate
