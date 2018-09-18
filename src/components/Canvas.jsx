import React from 'react'
import PropTypes from 'prop-types'

const Canvas = ({ tokens }) => <pre>{JSON.stringify(tokens, null, '  ')}</pre>

Canvas.propTypes = {
  tokens: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Canvas
