import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Editor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
