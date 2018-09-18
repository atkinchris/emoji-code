import React, { Component } from 'react'
import PropTypes from 'prop-types'
import P5 from 'p5'

class Canvas extends Component {
  constructor(props) {
    super(props)

    this.wrapper = React.createRef()

    this.updateSketch = this.updateSketch.bind(this)
  }

  componentDidMount() {
    this.updateSketch()
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

    if (wrapper.childNodes[0]) {
      wrapper.removeChild(wrapper.childNodes[0])
    }

    this.canvas = new P5(sketch, wrapper)
  }

  render() {
    return <div ref={this.wrapper} />
  }
}

Canvas.propTypes = {
  sketch: PropTypes.func.isRequired,
}

export default Canvas
