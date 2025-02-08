const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 8080,
    password: "Mandem-postg@123",
    database: "yujaw"
})

module.exports = client