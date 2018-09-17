import React from 'react'
import { render } from 'react-dom'

import './index.css'

const mountElement = document.getElementById('root')

const App = () => <h1>Hello World</h1>

render(<App />, mountElement)

export default App
