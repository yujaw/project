const client = require('../config/db')

const getAllUsers = async (req, res) => {
    client.query(`SELECT * FROM users ORDER BY fname ASC`, (err, data) => {
        if(!err) {
            res.send(data.rows)
        } else {
            res.send(err)
        }
    })
}

module.exports = { getAllUsers }