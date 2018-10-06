import { saveSvgAsPng } from 'save-svg-as-png'
import sanitize from 'sanitize-filename'

const saveSvg = async (name, svg) => {
  const now = new Date()
    .toISOString()
    .slice(0, 19)
    .replace(/[A-z]/, '_')
  saveSvgAsPng(svg, `${sanitize(name)}_${now}.png`, { scale: 4 })
}

export default saveSvg
