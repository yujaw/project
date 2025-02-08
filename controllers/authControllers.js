const client = require('../config/db')
const bcrypt = require('bcrypt')

const login = async (req, res) => {
    const { email, pass } = req.body

    if (!email || !pass) return res.send({ error: "Input Fields Cannot Be Empty" })

    const foundUser = await client.query(`SELECT * FROM users WHERE email = '${email}'`)

    if (foundUser.rows.length <= 0) return res.status(403).send({ error: "Email or Password Doesn't Match" })

    const verify = await bcrypt.compare(pass, foundUser.rows[0].pass)

    if (!verify) return res.status(403).send({ error: "Email or Password Doesn't Match" })

    res.send(foundUser.rows)
}

module.exports = { login }