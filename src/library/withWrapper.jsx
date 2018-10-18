import React from 'react'

const fromPercentage = percentage => parseInt(percentage, 10) / 100

const withWrapper = (Component, category) => {
  const wrapper = (id, x = 50, y = 50, scale = 100, rotate = 0, colour) => (
    <g key={id} transform={`translate(${x}, ${y})`} className="svg-wrapper">
      {colour && (
        <defs>
          <filter id={`${id}/colour-shift`} x="0" y="0" width="100%" height="100%">
            <feFlood floodColor={colour} result="flood" />
            <feComposite in="flood" in2="SourceAlpha" operator="in" result="flood-alpha" />
            <feBlend mode="hue" in="flood-alpha" in2="SourceGraphic" />
          </filter>
        </defs>
      )}

      <svg x="-50" y="-50" id={id}>
        <g
          style={{
            transform: [
              `rotate(${rotate}deg)`,
              `translate(50 50)`,
              `scale(${fromPercentage(scale)})`,
              `translate(-50 -50)`,
            ].join(' '),
            transformOrigin: 'center',
            filter: colour ? `url(#${id}/colour-shift)` : '',
          }}
        >
          <Component />
        </g>
      </svg>
    </g>
  )

  wrapper.args = ['x', 'y', 'size', 'rotation', 'colour']
  wrapper.category = category

  return wrapper
}

export default withWrapper
