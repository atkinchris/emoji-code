import React from 'react'
import PropTypes from 'prop-types'

const Canvas = React.forwardRef(({ components }, ref) => (
  <div className="flex-card flex-card--align-center">
    <div className="emoji with-border">
      <svg width="100%" height="100%" viewBox="0 0 100 100" ref={ref}>
        {components}
      </svg>
    </div>
  </div>
))

Canvas.propTypes = {
  components: PropTypes.arrayOf(PropTypes.node).isRequired,
  onEmojiSubmit: PropTypes.func.isRequired,
}

export default Canvas
