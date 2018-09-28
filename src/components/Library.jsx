import React from 'react'

import library from '../library'

const Library = () => {
  const functions = Object.keys(library).map(command => ({
    command,
    args: library[command].args,
    fn: library[command],
    previewStyle: library[command].previewStyle,
  }))

  return (
    <div className="library">
      <table>
        <thead>
          <th>Command</th>
          <th>Arguments</th>
          <th>Output</th>
        </thead>
        <tbody>
          {functions.map(({ command, args = [], fn, previewStyle }) => (
            <tr className="align-center">
              <td>
                <pre>{command}</pre>
              </td>
              <td>
                <pre>{args.join(', ')}</pre>
              </td>
              <td>
                <svg className="library__preview" style={previewStyle} viewbox="0 0 100 100">
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
