const express = require('express')
const multer = require('multer')
const uniquefilename = require('uniquefilename')
const path = require('path')

const app = express()
const port = 8080

const EMOJI_DIRECTORY = 'emoji/'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, EMOJI_DIRECTORY)
  },
  filename: (req, file, cb) => {
    const fullUploadPath = path.resolve(EMOJI_DIRECTORY, file.originalname)

    uniquefilename.get(fullUploadPath, {}, uniqueFileName => {
      cb(null, path.basename(uniqueFileName))
    })
  },
})

const upload = multer({
  storage,
})

app.post('/uploadji', upload.single('emoji'), (req, res) => {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file)
  res.sendStatus(200)
})

app.get('/', (req, res) => res.send('helloji 🌚'))

app.listen(port, () => {
  console.log(`Emoji Collector listening on port ${port}!`)
})
