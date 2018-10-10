import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AceEditor from 'react-ace'

import 'brace/mode/css'
import 'brace/theme/textmate'

class Editor extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidMount() {
    const { textCommands } = this.props
    this.handleUpdate(textCommands)
  }

  handleChange(value) {
    this.handleUpdate(value)
  }

  handleUpdate(value) {
    const { onUpdate } = this.props

    onUpdate(value)
  }

  render() {
    const { className, errors, textCommands } = this.props
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
        <AceEditor
          className="editor__area"
          width="100%"
          mode="css"
          theme="textmate"
          onChange={this.handleChange}
          value={textCommands}
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
  textCommands: PropTypes.string.isRequired,
}

Editor.defaultProps = {
  className: null,
}

export default Editor
