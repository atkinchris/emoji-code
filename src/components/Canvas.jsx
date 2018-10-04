import React from 'react'
import PropTypes from 'prop-types'

const Canvas = React.forwardRef(({ components }, canvasRef) => (
  <div className="emoji with-border">
    <svg width="100%" height="100%" viewBox="0 0 100 100" ref={canvasRef}>
      {components}
    </svg>
  </div>
))

Canvas.propTypes = {
  components: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Canvas
