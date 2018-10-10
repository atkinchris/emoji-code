import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Canvas from './Canvas'

import { generateShareUrl } from '../utils/encode'


const Share = ({
  name,
  code,
  components,
}) => {
  return (
    <div className="share">
      <div className="share__preview">
        <Canvas components={components} />
        <h3>{name}</h3>
      </div>
      <p>Share this link with your friends to show them your brand new Emoji!</p>
      <textarea
        className="share__code"
        value={generateShareUrl({ name, textCommands: code })}
        readOnly
        rows={4}
      />
    </div>
  )
}

export default Share