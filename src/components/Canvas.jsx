import React from 'react'
import PropTypes from 'prop-types'

const Canvas = React.forwardRef(
  ({ components, onEmojiSubmit }, canvasRef) => (
    <div className="flex-card flex-card--align-center">
      <div className="emoji with-border">
        <svg width="100%" height="100%" viewBox="0 0 100 100" ref={canvasRef}>
          {components}
        </svg>
      </div>

      <button type="button" className="button with-border" onClick={onEmojiSubmit}>
        Save Emoji
      </button>
    </div>
  )
)

Canvas.propTypes = {
  components: PropTypes.arrayOf(PropTypes.node).isRequired,
  onEmojiSubmit: PropTypes.func.isRequired,
}

export default Canvas
