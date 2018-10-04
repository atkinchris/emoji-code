import 'whatwg-fetch'
import sanitize from 'sanitize-filename'

const postEmojiToServer = async (name, emoji) => {
  const body = new FormData()
  body.append('emoji', emoji, `${sanitize(name)}.png`)

  const response = await fetch('http://localhost:8080/uploadji', {
    method: 'POST',
    body,
  })

  if (!response.ok) {
    throw new Error('nooo')
  }
}

export default postEmojiToServer
