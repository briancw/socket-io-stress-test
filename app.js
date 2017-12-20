const crypto = require('crypto')
const express = require('express')
const app = express()
const port = 3000
const io = require('socket.io')(3005)
const data = crypto.randomBytes(128)

app.use('/', express.static(__dirname))

setInterval(() => {
    console.log('emitting')
    io.emit('my-data-event', data)
}, 1000)

app.listen(port, err => {
    if (err) {
        console.log(err)
    }

    console.log(`Listening on port ${port}`)
})
