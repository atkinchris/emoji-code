import saveAs from 'file-saver'
import sanitize from 'sanitize-filename'

const saveSvg = (name, blob) => {
  const now = new Date()
    .toISOString()
    .slice(0, 19)
    .replace(/[A-z]/, '_')
  saveAs(blob, `${sanitize(name)}_${now}.png`)
}

export default saveSvg
