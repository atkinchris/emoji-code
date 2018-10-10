import { hashToEmoji, emojiToHash } from '../encode'


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