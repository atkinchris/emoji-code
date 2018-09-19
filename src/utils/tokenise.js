const regex = /^([A-z]+)[ ]*\(([A-z0-9 #,.-]*)\)$/

const tokenise = text =>
  String(text)
    .match(/[^\r\n]+/g)
    .map(line => line.replace(/[^a-zA-Z0-9 ()#,.-]/g, '').trim())
    .filter(_ => !!_)
    .map(line => {
      const groups = line.match(regex)

      if (groups === null) {
        return null
      }

      return {
        command: groups[1],
        args: groups[2]
          .split(',')
          .map(arg => arg.trim())
          .filter(_ => _),
      }
    })

export default tokenise
