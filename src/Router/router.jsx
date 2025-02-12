import { useRoutes } from 'react-router-dom'
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import Error from '../components/Error'
import Home from '../components/Home'

const Router = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/signin',
            element: <Signin />
        },
        {
            path: '/signup',
            element: <Signup />
        },
        {
            path: '*',
            element: <Error />
        }
    ])

    return routes
}

export default Router