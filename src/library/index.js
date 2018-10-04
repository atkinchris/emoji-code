import circle from './svgs/circle.svg'
import eye from './svgs/eye.svg'
import eyeWinking from './svgs/eyeWinking.svg'
import mouthBlowing from './svgs/mouthBlowing.svg'
import mouthGrinning from './svgs/mouthGrinning.svg'
import heart from './svgs/heart.svg'
import sparkle from './svgs/sparkle.svg'
import mouth from './svgs/mouth.svg'
import mouthLaughing from './svgs/mouthLaughing.svg'
import poop from './svgs/poop.svg'
import tear from './svgs/tear.svg'

import unicornHorn from './unicornHorn'
import rectangle from './rectangle'
import semicircle from './semicircle'

import withWrapper from './withWrapper'

export default {
  circle: withWrapper(circle),
  eye: withWrapper(eye),
  eyeWinking: withWrapper(eyeWinking),
  heart: withWrapper(heart),
  mouth: withWrapper(mouth),
  mouthBlowing: withWrapper(mouthBlowing),
  mouthGrinning: withWrapper(mouthGrinning),
  mouthLaughing: withWrapper(mouthLaughing),
  poop: withWrapper(poop),
  rectangle,
  semicircle,
  sparkle: withWrapper(sparkle),
  tear: withWrapper(tear),
  unicornHorn,
}
