import React, { Component } from 'react'

import Canvas from './Canvas'
import Editor from './Editor'
import evaluate from '../utils/evaluate'
import mapFuncs from '../utils/mapFuncs'

import library from '../library'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      commands: [],
      errors: [],
    }

    this.updateCommands = this.updateCommands.bind(this)
  }

  updateCommands(text) {
    this.setState(evaluate(text))
  }

  render() {
    const { commands, errors } = this.state
    const { components, errors: cmdErrors } = mapFuncs(commands, library)
    const allErrors = [...errors, ...cmdErrors]

    return (
      <div className="container">
        <header className="container__row">
          <h1>Emoji Code!!</h1>
        </header>

        <div className="container__pane padded-card flex-card">
          <Editor onUpdate={this.updateCommands} errors={allErrors} className="flex-card__item" />
        </div>

        <div className="container__pane padded-card flex-card">
          <Canvas components={components} />
        </div>
      </div>
    )
  }
}

export default App
