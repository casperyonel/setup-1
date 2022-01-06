require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { SERVER_PORT } = process.env || 4000
const { seed } = require("./seed")

app.use(express.json())
app.use(cors())

app.post('/seed', seed)

app.listen(SERVER_PORT, () => console.log(`Server up on ${SERVER_PORT}`))