import { Navigate } from "react-router-dom"
import useAuth from "../hooks/use-auth"

const RedirectWhenAdminLogin = ({children}) => {
    const {authUser} = useAuth()
    return authUser.role === 'ADMIN' ? <Navigate to='/dashboard/books'/> : children
}

export default RedirectWhenAdminLogin