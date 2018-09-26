import React from 'react'
import PropTypes from 'prop-types'

const Canvas = ({ components }) => (
  <div className="emoji with-border">
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      {components}
    </svg>
  </div>
)

Canvas.propTypes = {
  components: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Canvas
