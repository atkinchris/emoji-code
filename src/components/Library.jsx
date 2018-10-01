import React from 'react'

import library from '../library'

const Library = () => {
  const functions = Object.keys(library).map(command => ({
    command,
    args: library[command].args,
    fn: library[command],
    previewStyle: library[command].previewStyle,
    previewViewBox: library[command].previewViewBox,
  }))

  return (
    <div className="library">
      <table>
        <thead>
          <tr>
            <th>Command</th>
            <th>Arguments</th>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          {functions.map(({ command, args = [], fn, previewStyle, previewViewBox }) => (
            <tr className="align-center" key={command}>
              <td>
                <pre>{command}</pre>
              </td>
              <td>
                <pre>{args.join(', ')}</pre>
              </td>
              <td>
                <svg className="library__preview" style={previewStyle} viewBox={previewViewBox}>
                  {fn()}
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Library
