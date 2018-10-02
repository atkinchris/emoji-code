import React from 'react'
import PropTypes from 'prop-types'

import getSvgBlob from '../utils/getSvgBlob'

const Canvas = ({ components, onEmojiSubmit }) => {
  const svgElement = React.createRef()

  const submitHandler = async () => {
    const blob = await getSvgBlob(svgElement.current)
    await onEmojiSubmit(blob)
  }

  return (
    <div className="flex-card flex-card--align-center">
      <div className="emoji with-border">
        <svg width="100%" height="100%" viewBox="0 0 100 100" ref={svgElement}>
          {components}
        </svg>
      </div>

      <button type="button" className="button with-border" onClick={submitHandler}>
        Save Emoji
      </button>
    </div>
  )
}

Canvas.propTypes = {
  components: PropTypes.arrayOf(PropTypes.node).isRequired,
  onEmojiSubmit: PropTypes.func.isRequired,
}

export default Canvas
