const hashToEmoji = (hash) => {
  return JSON.parse(atob(hash))
}

const emojiToHash = ({ name, textCommands }) => {
  return btoa(JSON.stringify({
    name,
    textCommands,
  }))
}

export {
  emojiToHash,
  hashToEmoji,
}
