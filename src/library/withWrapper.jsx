import React from 'react'

const fromPercentage = percentage => parseInt(percentage, 10) / 100

const withWrapper = Component => {
  const wrapper = (x = 50, y = 50, scale = 100, rotate = 0) => (
    <g transform={`translate(${x}, ${y})`} style={{ transformOrigin: 'center' }}>
      <svg x="-50" y="-50">
        <g
          style={{
            transform: `rotate(${rotate}deg) scale(${fromPercentage(scale)})`,
            transformOrigin: 'center',
          }}
        >
          <Component />
        </g>
      </svg>
    </g>
  )

  wrapper.args = ['x', 'y', 'percentage size', 'degrees rotation']

  return wrapper
}

export default withWrapper
