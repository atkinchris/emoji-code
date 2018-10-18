const hashToEmoji = (hash) => {
  return JSON.parse(atob(hash))
}

const emojiToHash = ({ name, textCommands }) => {
  return btoa(JSON.stringify({
    name,
    textCommands,
  }))
}

const generateShareUrl = (emoji) => {
  const hash = encodeURIComponent(emojiToHash(emoji))
  return `${window.location.origin}#emoji=${hash}`
}

export {
  emojiToHash,
  hashToEmoji,
  generateShareUrl,
}
