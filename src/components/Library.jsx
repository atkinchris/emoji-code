import React, { Fragment } from 'react'

import { categoryList } from '../library'

const Library = () => (
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
        {categoryList.filter(category => category.name !== 'Secret').map(category => (
          <Fragment>
            <tr>
              <td>
                <h2>{category.name}</h2>
              </td>
            </tr>

            {category.commands.map(({ command, args = [], fn, previewStyle, previewViewBox }) => (
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
          </Fragment>
        ))}
      </tbody>
    </table>
  </div>
)

export default Library
