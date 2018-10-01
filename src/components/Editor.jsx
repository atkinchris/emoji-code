import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AceEditor from 'react-ace'

import 'brace/mode/css'
import 'brace/theme/textmate'

const EXAMPLE_CODE = `circle(50, 50, 45, #ffdd67)
eye(30, 35)
eyeWinking(55, 37)
mouthBlowing(45, 55)
heart(58, 58)
sparkle(8, 8, 0.6)
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
      <div className={`editor with-border ${className}`}>
        {/* <header className="editor__header">Preset buttons go here</header> */}

        <AceEditor
          className="editor__area"
          width="100%"
          mode="css"
          theme="textmate"
          onChange={this.handleChange}
          value={value}
          fontSize={18}
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
