const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

const client = require('./config/db')

const PORT = 4000

app.use(express.json({}))
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use(express.static(path.join(__dirname, "public", "views")))
app.use('/', require('./routers/root'))

app.use('/users', require('./routers/userRoutes'))
app.use('/auth', require('./routers/authRoutes'))

app.use('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'public', 'views', 'error.html'))
    } else if (req.accepts('json')) {
        res.send({ msg: "404 - File Not Found" })
    } else {
        res.type('txt').send("404 - File Not Found")
    }
})

if (client.connect()) {
    app.listen(PORT, () => {
        console.log(`Server Started at PORT ${PORT}`)
    })
}
