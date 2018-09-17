import React from 'react'

import Canvas from './Canvas'
import Editor from './Editor'

const App = () => (
  <div className="container">
    <div className="container__pane padded-card">
      <Editor />
    </div>
    <div className="container__pane padded-card">
      <Canvas />
    </div>
  </div>
)

export default App
