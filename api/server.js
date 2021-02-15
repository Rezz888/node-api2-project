// implement your server here
// require your posts router and connect it here

const express = require("express")
const welcomeRouter = require("./posts/welcome-router")
const postsRouter = require("./posts/posts-router")
const server = express()
server.use(express.json())

server.use(welcomeRouter)
server.use(postsRouter)


module.exports = server

