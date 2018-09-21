import React, { Component } from 'react'

import Canvas from './Canvas'
import Editor from './Editor'
import tokenise from '../utils/tokenise'
import compose from '../utils/compose'
import mapFuncs from '../utils/mapFuncs'

import library from '../library'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tokens: [],
    }

    this.updateTokens = this.updateTokens.bind(this)
  }

  updateTokens(text) {
    this.setState({ tokens: tokenise(text) })
  }

  render() {
    const { tokens } = this.state
    const functions = mapFuncs(tokens, library)
    const sketch = compose(functions)

    return (
      <div className="container">
        <header className="container__row">
          <h1>Emoji Code!!</h1>
        </header>

        <div className="container__pane padded-card flex-card">
          <Editor
            onUpdate={this.updateTokens}
            className="flex-card__item"
          />
        </div>

        <div className="container__pane padded-card flex-card">
          <Canvas tokens={tokens} sketch={sketch} />
        </div>
      </div>
    )
  }
}

export default App
