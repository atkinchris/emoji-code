import React, { Component } from 'react'
import PropTypes from 'prop-types'

const EXAMPLE_CODE = `circle(200, 200, 300, #ffde7d)
circle(160, 200, 15, #00b8a9)
circle(210, 200, 15, #00b8a9)
circle(185, 230, 30, #f6416c)
rectangle(165, 210, 40, 20, #ffde7d)
`

class Editor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: EXAMPLE_CODE,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.handleSubmit()
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit() {
    const { value } = this.state
    const { onSubmit } = this.props

    onSubmit(value)
  }

  render() {
    const { value } = this.state

    return (
      <div className="flex">
        <textarea className="textarea" value={value} onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>
          Run!
        </button>
      </div>
    )
  }
}

Editor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Editor
