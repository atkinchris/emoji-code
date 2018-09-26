import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AceEditor from 'react-ace'

import 'brace/mode/css'
import 'brace/theme/textmate'

const EXAMPLE_CODE = `circle(50, 50, 50, #ffde7d)
circle(35, 35, 5, #00b8a9)
circle(65, 35, 5, #00b8a9)
semicircle(50, 60, 15, #f6416c)
`

class Editor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: EXAMPLE_CODE,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {
    this.handleUpdate()
  }

  handleChange(value) {
    this.setState({ value })
    this.handleUpdate()
  }

  handleUpdate() {
    const { value } = this.state
    const { onUpdate } = this.props

    onUpdate(value)
  }

  render() {
    const { value } = this.state
    const { className, errors } = this.props
    const markers = errors.map(error => ({
      startRow: error.lineNumber,
      endRow: error.lineNumber,
      startCol: 0,
      endCol: Number.MAX_SAFE_INTEGER,
      className: 'editor__error-marker',
      type: 'background',
    }))

    return (
      <div className={`editor ${className}`}>
        <header className="editor__header">Preset buttons go here</header>

        <AceEditor
          className="editor__area"
          width="100%"
          mode="css"
          theme="textmate"
          onChange={this.handleChange}
          value={value}
          fontSize={16}
          showGutter={false}
          highlightActiveLine
          showLineNumbers
          showPrintMargin={false}
          tabSize={2}
          markers={markers}
        />
      </div>
    )
  }
}

Editor.propTypes = {
  onUpdate: PropTypes.func.isRequired,
  className: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.shape({ lineNumber: PropTypes.number })).isRequired,
}

Editor.defaultProps = {
  className: null,
}

export default Editor
