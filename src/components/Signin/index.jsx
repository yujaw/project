import { Fragment, useState } from 'react'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const AUTH_URL = '/auth'

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        // e.preventDefault()

        await axios.post(AUTH_URL, {
            email,
            pass
        })
            .then(() => {
                navigate('/')
            })
            .catch(err => console.error(err.response.data))
    }

    return (
        <Fragment>
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

export default Signin