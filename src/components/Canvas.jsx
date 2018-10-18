import React, { Component } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import PropTypes from 'prop-types'
import canvg from 'canvg'

class Canvas extends Component {
  constructor(props) {
    super(props)
    this.containerRef = React.createRef()
  }

  componentDidUpdate() {
    // eslint-disable-next-line react/prop-types
    const { components, canvasRef } = this.props
    const svgMarkup = renderToStaticMarkup(
      <svg height="1000px" width="1000px" viewBox="0 0 100 100">
        {components}
      </svg>
    )
    const canvgOptions = {
      ignoreMouse: true,
      ignoreAnimation: true,
    }
    canvg(canvasRef.current, svgMarkup, canvgOptions)

    this.containerRef.current.style['background-image'] = `url(${canvasRef.current.toDataURL()})`
  }

  render() {
    const { canvasRef } = this.props

    return (
      <div className="emoji with-border">
        <div className="emoji__container" ref={this.containerRef} />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    )
  }
}

Canvas.propTypes = {
  components: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default React.forwardRef((props, canvasRef) => <Canvas {...props} canvasRef={canvasRef} />)
