import React from 'react'
import PropTypes from 'prop-types'
import { saveSvgAsPng } from 'save-svg-as-png'

const Canvas = ({ components }) => {
  const svgElement = React.createRef()
  const saveSvg = () => {
    saveSvgAsPng(svgElement.current, `emoji_${new Date().toISOString()}.png`, { scale: 4 })
  }

  return (
    <div className="flex-card flex-card--align-center">
      <div className="emoji with-border">
        <svg width="100%" height="100%" viewBox="0 0 100 100" ref={svgElement}>
          {components}
        </svg>
      </div>
      <button type="button" className="button with-border" onClick={saveSvg}>
        Save Emoji
      </button>
    </div>
  )
}

Canvas.propTypes = {
  components: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Canvas
