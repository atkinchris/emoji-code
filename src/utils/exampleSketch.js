/* eslint-disable no-param-reassign */

const sketch = p => {
  p.setup = () => {
    p.createCanvas(300, 300)

    p.fill(204, 101, 192, 127)

    p.rect(40, 120, 120, 40)
    p.ellipse(240, 240, 80, 80)
  }
}

export default sketch
