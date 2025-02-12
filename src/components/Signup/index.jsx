import { Fragment, useState } from 'react'
import axios from '../../api/axios'

const Signup = () => {
    const SIGNUP_URL = '/users'

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')

    const handleSubmit = async (e) => {
        // e.preventDefault()

        await axios.post(SIGNUP_URL, {
            email,
            pass,
            fname,
            lname
        })
            .then(res => console.log(res))
            .catch(err => console.error(err.response.data))
    }

    return (
        <Fragment>
            <p>
                Fname:
                <input type="text" name="fname" onChange={(e) => setFname(e.target.value)} id="input" />
            </p>
            <p>
                Lname:
                <input type="text" name="lname" onChange={(e) => setLname(e.target.value)} id="input" />
            </p>
            <p>
                Email:
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} id="input" />
            </p>
            <p>
                Pass:
                <input type="text" name="pass" onChange={(e) => setPass(e.target.value)} id="input" />
            </p>
            <p>
                <input type="submit" value="Submit" onClick={handleSubmit} />
            </p>
        </Fragment>
    )
}

export default Signup