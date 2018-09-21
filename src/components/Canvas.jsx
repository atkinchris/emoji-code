import React, { Component } from 'react'
import PropTypes from 'prop-types'
import P5 from 'p5'

class Canvas extends Component {
  constructor(props) {
    super(props)

    this.wrapper = React.createRef()

    this.updateSketch = this.updateSketch.bind(this)
  }

  componentDidUpdate(prevProps) {
    const { sketch } = this.props

    if (sketch !== prevProps.sketch) {
      this.updateSketch()
    }
  }

  updateSketch() {
    const { sketch } = this.props
    const wrapper = this.wrapper.current

    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild)
    }

    const fullSketch = p => {
      // eslint-disable-next-line no-param-reassign
      p.setup = () => {
        p.createCanvas(400, 400)
        p.pixelDensity(4)
        sketch(p)
      }
    }

    this.canvas = new P5(fullSketch, wrapper)
  }

  render() {
    return <div ref={this.wrapper} />
  }
}

Canvas.propTypes = {
  sketch: PropTypes.func.isRequired,
}

export default Canvas
