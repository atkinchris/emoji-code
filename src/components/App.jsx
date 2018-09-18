import React, { Component } from 'react'

import Canvas from './Canvas'
import Editor from './Editor'
import tokenise from '../utils/tokenise'

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

    return (
      <div className="container">
        <div className="container__pane padded-card">
          <Editor onSubmit={this.updateTokens} />
        </div>
        <div className="container__pane padded-card">
          <Canvas tokens={tokens} />
        </div>
      </div>
    )
  }
}

export default App
