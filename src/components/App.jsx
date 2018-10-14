import React, { Component } from 'react'

import Canvas from './Canvas'
import Editor from './Editor'
import Library from './Library'
import Modal from './Modal'

import evaluate from '../utils/evaluate'
import mapFuncs from '../utils/mapFuncs'
import getSvgBlob from '../utils/getSvgBlob'
import postEmojiToServer from '../utils/postEmojiToServer'
import saveSvg from '../utils/saveSvg'
import { loadCode, saveCode } from '../utils/localStorage'

import functionLibrary from '../library'

const EXAMPLE_CODE = `face(50, 50, 90%)
eye(35, 40)
eyeWinking(65, 40)
mouthBlowing(50, 65)
heart(70, 65, 100%, 0, red)
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'My Emoji',
      commands: [],
      errors: [],
      showLibrary: false,
      textCommands: loadCode() || EXAMPLE_CODE,
    }

    this.canvasRef = React.createRef()

    this.onChangeName = this.onChangeName.bind(this)
    this.onEmojiSubmit = this.onEmojiSubmit.bind(this)
    this.updateCommands = this.updateCommands.bind(this)
    this.showLibrary = this.showLibrary.bind(this)
    this.insertEditorCommand = this.insertEditorCommand.bind(this)
  }

  async onEmojiSubmit() {
    const { name } = this.state
    const blob = await getSvgBlob(this.canvasRef.current)

    this.setState({
      submitting: true,
    })

    try {
      await postEmojiToServer(name, blob)
    } catch (e) {
      console.error(e) // eslint-disable-line no-console
      await saveSvg(name, this.canvasRef.current)
    }

    this.setState({
      submitting: false,
    })
  }

  onChangeName(e) {
    const { value } = e.target

    this.setState({
      name: value,
    })
  }

  updateCommands(text) {
    this.setState({ textCommands: text }, () => saveCode(text))
    this.setState(evaluate(text))
  }

  showLibrary() {
    this.setState(({ showLibrary }) => ({ showLibrary: !showLibrary }))
  }

  insertEditorCommand(command) {
    this.showLibrary()
    const commandToInsert = `${command}(50, 50, 100%, 0)`
    const { textCommands } = this.state
    const newCommands = `${textCommands}\n${commandToInsert}`
    this.updateCommands(newCommands)
  }

  render() {
    const { commands, errors, showLibrary, name, textCommands, submitting } = this.state
    const { components, errors: cmdErrors } = mapFuncs(commands, functionLibrary)
    const allErrors = [...errors, ...cmdErrors]

    return (
      <div className="container">
        <div className="container__row container">
          <div className="container__pane padded-card flex-card">
            <Canvas components={components} ref={this.canvasRef} />

            <footer className="controls">
              <div className="logo">
                <h1 className="logo__text">Emoji Code!</h1>
              </div>

              <div className="container__pane flex-card flex-card--row">
                <button
                  type="button"
                  className="button with-border"
                  onClick={this.onEmojiSubmit}
                  disabled={submitting}
                >
                  Save Emoji!
                </button>

                <button
                  type="button"
                  className="button"
                  onClick={this.showLibrary}
                  disabled={submitting}
                >
                  Emoji Library!
                </button>
              </div>
            </footer>
          </div>

          <div className="container__pane container__pane--grow padded-card hard-sides@sm flex-card">
            <div className="flex-card__item flex-card with-background with-border">
              <label className="name-entry" htmlFor="name">
                <span className="name-entry__label">My emoji is called&hellip;</span>

                <input
                  className="name-entry__field"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.onChangeName}
                />
              </label>

              <Editor
                onUpdate={this.updateCommands}
                errors={allErrors}
                className="flex-card__item"
                textCommands={textCommands}
              />
            </div>
          </div>
        </div>

        <Modal isOpen={showLibrary}>
          <div className="modal flex-card flex-card--align-center">
            <h1 className="modal__title">The Emoji Library!</h1>

            <Library onSelectCommand={this.insertEditorCommand} />
            <button
              type="button"
              className="button library-close-button"
              onClick={this.showLibrary}
            >
              X
            </button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default App
