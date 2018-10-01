import React from 'react'

const MouthBarfing = (x = 0, y = 0, colour = '#664e27') => (
  <svg x={x} y={y}>
    <rect width="100%" height="100%" fill="none" />
    <radialGradient
      id="a"
      cx="31.949"
      cy="60.695"
      r="25.951"
      gradientTransform="matrix(1 0 0 .2151 0 47.637)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset=".418" stopColor="#a6e639" />
      <stop offset=".547" stopColor="#a2e339" />
      <stop offset=".66" stopColor="#98dc39" />
      <stop offset=".768" stopColor="#86cf39" />
      <stop offset=".873" stopColor="#6cbc3a" />
      <stop offset=".974" stopColor="#4ca53a" />
      <stop offset="1" stopColor="#429e3a" />
    </radialGradient>
    <linearGradient id="b" x1=".5" y1="1" x2=".5">
      <stop offset=".145" stopColor="#a6e639" />
      <stop offset=".274" stopColor="#9bdc37" />
      <stop offset=".501" stopColor="#7dc032" />
      <stop offset=".797" stopColor="#4e932a" />
      <stop offset="1" stopColor="#297124" />
    </linearGradient>
    <linearGradient id="c" y1=".5" x2="1" y2=".5">
      <stop offset="0" stopColor="#cfd7e6" />
      <stop offset=".037" stopColor="#dae0ec" />
      <stop offset=".126" stopColor="#eef1f6" />
      <stop offset=".215" stopColor="#fbfcfd" />
      <stop offset=".3" stopColor="#fff" />
      <stop offset=".7" stopColor="#fff" />
      <stop offset=".785" stopColor="#fbfcfd" />
      <stop offset=".874" stopColor="#eef1f6" />
      <stop offset=".963" stopColor="#dae0ec" />
      <stop offset="1" stopColor="#cfd7e6" />
    </linearGradient>
    <linearGradient id="d" x1=".5" y1="1" x2=".5">
      <stop offset=".242" stopColor="#a6e639" />
      <stop offset=".39" stopColor="#a2e339" />
      <stop offset=".531" stopColor="#97da37" />
      <stop offset=".671" stopColor="#83cc36" />
      <stop offset=".809" stopColor="#68b733" />
      <stop offset=".945" stopColor="#459d30" />
      <stop offset="1" stopColor="#35912e" />
    </linearGradient>
    <linearGradient id="e" x1=".5" y1="1" x2=".5">
      <stop offset=".242" stopColor="#a6e639" />
      <stop offset=".39" stopColor="#a2e339" />
      <stop offset=".531" stopColor="#97da37" />
      <stop offset=".671" stopColor="#83cc36" />
      <stop offset=".809" stopColor="#68b733" />
      <stop offset=".945" stopColor="#459d30" />
      <stop offset="1" stopColor="#35912e" />
    </linearGradient>
    <g className="currentLayer">
      <path
        fill="url(#a)"
        d="M43.506 22.944c0 4.073-43.506 4.073-43.506 0 0-4.071 43.506-4.071 43.506 0z"
      />
      <path
        fill={colour}
        d="M21.803 0C15.4 0 2.644 1.844 6.524 11c3.903 9.209 26.657 9.209 30.561 0 3.879-9.156-8.876-11-15.282-11z"
      />
      <path
        fill="url(#b)"
        d="M31.304 8h-19c-2.896 2.896-2 16.385-2 16.385h23s.574-13.199-2-16.385z"
      />
      <path
        fill="#529320"
        d="M14.933 17.815c-2.771 0-2.771-7.063 0-7.063s2.771 7.063 0 7.063zM29.433 20.918c-2.435 0-2.435-6.205 0-6.205 2.433 0 2.433 6.205 0 6.205zM20.207 23.604c-2.13 0-2.13-5.428 0-5.428 2.129.001 2.129 5.428 0 5.428zM24.399 15.686c-2.128 0-2.128-5.428 0-5.428 2.129 0 2.129 5.428 0 5.428z"
      />
      <path
        fill="url(#c)"
        d="M33.876 4.965c.096-.26-.006-.617-.23-.797 0 0-2.704-2.168-11.843-2.168C12.666 2 9.962 4.168 9.962 4.168c-.223.18-.326.537-.23.797l.207.563c.095.259.413.472.704.472h22.32c.293 0 .61-.213.706-.473l.207-.562z"
      />
      <path
        fill="url(#d)"
        d="M3.647 20.061c6.664 1.858 10.032 7.817 9.077 3.622-1.773-7.786-13.798-4.938-9.077-3.622z"
      />
      <path
        fill="url(#e)"
        d="M30.808 23.683c-.955 4.195 2.413-1.764 9.077-3.622 4.721-1.316-7.305-4.164-9.077 3.622z"
      />
    </g>
  </svg>
)

MouthBarfing.args = ['x', 'y', 'colour']

MouthBarfing.previewViewBox = '0 0 43 26'

export default MouthBarfing
