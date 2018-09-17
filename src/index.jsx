import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

import './index.css'

const mountElement = document.getElementById('root')

render(<App />, mountElement)

export default App
