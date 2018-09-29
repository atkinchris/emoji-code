import React, { Component } from 'react'

import Canvas from './Canvas'
import Editor from './Editor'
import Library from './Library'
import Modal from './Modal'

import evaluate from '../utils/evaluate'
import mapFuncs from '../utils/mapFuncs'
import postEmojiToServer from '../utils/postEmojiToServer'
import getSvgBlob from '../utils/getSvgBlob'

import functionLibrary from '../library'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      commands: [],
      errors: [],
      showLibrary: false,
    }

    this.svgElement = React.createRef()

    this.onEmojiSubmit = this.onEmojiSubmit.bind(this)
    this.updateCommands = this.updateCommands.bind(this)
    this.showLibrary = this.showLibrary.bind(this)
  }

  async onEmojiSubmit() {
    const blob = await getSvgBlob(this.svgElement.current)
    await postEmojiToServer(blob)

    this.setState({
      saved: true, // eslint-disable-line react/no-unused-state
    })
  }

  updateCommands(text) {
    this.setState(evaluate(text))
  }

  showLibrary() {
    this.setState(({ showLibrary }) => ({ showLibrary: !showLibrary }))
  }

  render() {
    const { commands, errors, showLibrary } = this.state
    const { components, errors: cmdErrors } = mapFuncs(commands, functionLibrary)
    const allErrors = [...errors, ...cmdErrors]

    return (
      <div className="container">
        <div className="container__pane padded-card flex-card">
          <Canvas components={components} ref={this.svgElement} />

          <div className="button-group">
            <button type="button" className="button" onClick={this.saveEmoji}>
              Save Emoji
            </button>
            <button type="button" className="button" onClick={this.showLibrary}>
              Show Library
            </button>
            <Modal isOpen={showLibrary}>
              <div className="modal flex-card flex-card--align-center">
                <Library />
                <button type="button" className="button" onClick={this.showLibrary}>
                  Hide Library
                </button>
              </div>
            </Modal>
          </div>
        </div>

        <div className="container__pane padded-card flex-card">
          <Editor onUpdate={this.updateCommands} errors={allErrors} className="flex-card__item" />
        </div>
      </div>
    )
  }
}

export default App
