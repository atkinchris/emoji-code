import React, { Component } from 'react'

import Canvas from './Canvas'
import Editor from './Editor'
import Library from './Library'

import evaluate from '../utils/evaluate'
import mapFuncs from '../utils/mapFuncs'
import postEmojiToServer from '../utils/postEmojiToServer'

import functionLibrary from '../library'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      commands: [],
      errors: [],
      showLibrary: false,
    }

    this.onEmojiSubmit = this.onEmojiSubmit.bind(this)
    this.updateCommands = this.updateCommands.bind(this)
    this.showLibrary = this.showLibrary.bind(this)
  }

  async onEmojiSubmit(dataUri) {
    await postEmojiToServer(dataUri)

    this.setState({
      saved: true,
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
        <header className="container__row">
          <h1 className="logo">Emoji Code!</h1>
        </header>

        <div className="container__pane padded-card flex-card">
          <Editor onUpdate={this.updateCommands} errors={allErrors} className="flex-card__item" />
        </div>

        <div className="container__pane padded-card flex-card">
          <Canvas components={components} onEmojiSubmit={this.onEmojiSubmit} />
        </div>

        <div className="container__row align-center">
          <button type="button" className="button" onClick={this.showLibrary}>
            Show Library
          </button>
          {showLibrary && (
            <div className="modal flex-card flex-card--align-center">
              <Library />
              <button type="button" className="button" onClick={this.showLibrary}>
                Hide Library
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
