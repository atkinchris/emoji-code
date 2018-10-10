import { hashToEmoji, emojiToHash, generateShareUrl } from '../encode'


describe('hashToEmoji', () => {
  it('takes a base64 encoded string and returns textCommands and a name', () => {
    const emoji = { name: 'testEmoji', textCommands: 'circle()' }
    const code = 'eyJuYW1lIjoidGVzdEVtb2ppIiwidGV4dENvbW1hbmRzIjoiY2lyY2xlKCkifQ=='
    expect(hashToEmoji(code)).toEqual(emoji)
  })
})

describe('emojiToHash', () => {
  it('takes an emoji and returns an encoded string', () => {
    const emoji = { name: 'test', textCommands: 'circle()' }
    const code = 'eyJuYW1lIjoidGVzdCIsInRleHRDb21tYW5kcyI6ImNpcmNsZSgpIn0='
    expect(emojiToHash(emoji)).toEqual(code)
  })
})

describe('generateShareUrl', () => {
  it('creates a share URL for an emoji based off the current URL', () => {
    const url = 'http://localhost:8080#emoji=eyJuYW1lIjoidGVzdCIsInRleHRDb21tYW5kcyI6ImNpcmNsZSgpIn0%3D'
    expect(generateShareUrl({
      name: 'test',
      textCommands: 'circle()',
    })).toBe(url)
  })
})