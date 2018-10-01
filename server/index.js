const express = require('express')
const multer = require('multer')

const app = express()
const port = 8080

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'emoji/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({
  storage,
})

app.post(
  '/uploadji',
  upload.single('emoji'),
  (req, res) => {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file)
    res.sendStatus(200)
  }
)

app.get(
  '/',
  (req, res) => res.send('helloji 🌚'),
)

app.listen(
  port,
  () => {
    console.log(`Emoji Collector listening on port ${port}!`)
  }
)