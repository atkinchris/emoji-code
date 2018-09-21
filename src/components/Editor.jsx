import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AceEditor from 'react-ace'

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

    return (
      <div className="flex">
        <AceEditor
          className="c-editor"
          mode="javascript"
          theme="github"
          onChange={this.handleChange}
          fontSize={14}
          value={value}
          showGutter
          highlightActiveLine
          showLineNumbers
          showPrintMargin={false}
          tabSize={2}
          annotations={
            [{ row: 0, column: 0, type: 'error', text: 'Some error.' }]
          }
          width="100%"
        />
      </div>
    )
  }
}

Editor.propTypes = {
  onUpdate: PropTypes.func.isRequired,
}

export default Editor
