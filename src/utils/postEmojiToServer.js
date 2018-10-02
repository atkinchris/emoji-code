import 'whatwg-fetch'

const postEmojiToServer = async emoji => {
  const body = new FormData()

  body.append('emoji', emoji, `emoji_${new Date().toISOString()}.png`)

  const response = await fetch('http://localhost:8080/uploadji', {
    method: 'POST',
    body,
  })

  if (!response.ok) {
    throw new Error('nooo')
  }
}

export default postEmojiToServer
