const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authRouter = require('./auth/auth-router')
const plantsRouter = require('./plants/plants-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('api/users', authRouter)
server.use('api/plants', plantsRouter)

module.exports = server
