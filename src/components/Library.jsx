import React, { Fragment } from 'react'

import PropTypes from "prop-types"
import { categoryList } from '../library'

const Library = (props) => {
  const { onSelectCommand } = props
  return (
    <div className="library">
      <div className="library__guidance">
        <h2>How do I add parts to my emoji?</h2>
        <p>
          In order to add a part to your emoji, type the <strong>part&apos;s name</strong> into the text editor! Your part will appear as if by magic!
        </p>
        <p>
          Everything you add to your emoji can be customised in four different ways, by adding <strong>parameters</strong>.
          These are values which sit in brackets after your part&apos;s name, and represent how your part will be drawn! For example, this is how we&apos;d add a <strong>sparkle</strong>, with five parameters:
        </p>
        <p className="library__code">
          <pre>sparkle(50, 50, 100, 0, pink)</pre>
        </p>
        <p>
          The first two parameters represent <strong>where your part is</strong>. These are its x/y coordinates, and go from 0 to 100!
        </p>
        <p>
          The third parameter is your part&apos;s <strong>size</strong>. Normally, this would be 100, but it can be bigger or smaller!
        </p>
        <p>
          The fourth parameter represents <strong>rotation</strong>! This is the angle of rotation of your part. It goes from 0 to 360!
        </p>
        <p>
          Finally, the fifth parameter lets you change the part&apos;s <strong>colour</strong>.
        </p>
      </div>

      <h2>What parts can I add to my emoji?</h2>

      {categoryList
        .filter(category => category.name !== 'Secret')
        .map(category => (
          <div className="library-category">
            <h2 className="library-category__title">{category.name}</h2>

            <div className="library-category__commands library-commands">
              {category.commands.map(({ command, fn, previewStyle, previewViewBox }) => (
                <button type="button" className="library-commands__command" key={command} onClick={() => onSelectCommand(command)}>
                  {command}
                  <svg className="library__preview" style={previewStyle} viewBox={previewViewBox}>
                    {fn()}
                  </svg>
                </button>
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}

Library.propTypes = {
  onSelectCommand: PropTypes.func.isRequired,
}

export default Library
