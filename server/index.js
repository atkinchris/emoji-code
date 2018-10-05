const path = require('path')
const chalk = require('chalk')
const express = require('express')
const multer = require('multer')
const uniquefilename = require('uniquefilename')
const sanitizefilename = require('sanitize-filename')

const app = express()
const LISTEN_PORT = 8080

const EMOJI_DIRECTORY = path.join(__dirname, '..', 'emoji')
const ASSETS_PATH = path.join(__dirname, '..', 'dist')

const log = message => console.log(`[${chalk.green('Emoji Collector')}] ${message}`)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, EMOJI_DIRECTORY)
  },
  filename: (req, file, cb) => {
    const safeName = sanitizefilename(file.originalname)
    const fullUploadPath = path.resolve(EMOJI_DIRECTORY, safeName)

    uniquefilename.get(fullUploadPath, {}, uniqueFileName => {
      cb(null, path.basename(uniqueFileName))
    })
  },
})

const upload = multer({
  storage,
})

app.use(express.static(ASSETS_PATH))

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: ASSETS_PATH })
})

app.post('/uploadji', upload.single('emoji'), (req, res) => {
  const { file } = req
  log(`Thanks for ${chalk.bold.magenta(file.filename)}! I saved it!!`)

  res.header('Access-Control-Allow-Origin', '*')
  res.sendStatus(200)
})

app.listen(LISTEN_PORT, () => {
  log(`Ready for emojis! Send some pls`)
})
