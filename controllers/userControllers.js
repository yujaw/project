const bcrypt = require('bcrypt')
const client = require('../config/db')

const getAllUsers = async (req, res) => {
    await client.query(`SELECT * FROM users ORDER BY id ASC`)
        .then((data) => res.send(data.rows))
        .catch((err) => console.error(err))
}

const getUserById = async (req, res) => {
    const { id } = req.params

    if (!id) return res.status(404).send({ err: "ID Not Found" })

    const user = await client.query(`SELECT * FROM users WHERE id = '${id}'`)

    if (user.rows.length <= 0) return res.status(404).send({ error: "User Not Found" })

    return res.send(user.rows)
}

const addNewUser = async (req, res) => {
    const { fname, lname, email, pass } = req.body

    if (!fname || !lname || !email || !pass) return res.status(403).send({ error: "Input Fields Cannot Be Empty" })

    const foundUser = await client.query(`SELECT * FROM USERS WHERE email = '${email}'`)

    if (foundUser.rows.length > 0) return res.send({ error: 'User With This Email Already Exists' })

    const hash = await bcrypt.hash(pass, 10)

    await client.query(`INSERT INTO users (fname, lname, email, pass) VALUES ('${fname}', '${lname}', '${email}', '${hash}')`)
        .then((data) => res.send(data))
        .catch((err) => console.error(err))
}

const removeUser = async (req, res) => {
    const { id } = req.params

    if (!id) return res.status(403).send({ error: "Input Fields Cannot Be Empty" })

    await client.query(`DELETE FROM users WHERE id = '${id}'`)
        .then((data) => res.send(data))
        .catch((err) => console.error(err))
}

module.exports = { getAllUsers, addNewUser, removeUser, getUserById }