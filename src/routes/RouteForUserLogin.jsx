import useAuth from "../hooks/use-auth"
import { Navigate } from "react-router-dom"
const ProtectRouteForAdmin = ({children}) => {
    const { authUser } = useAuth()
    return (
        authUser?.role === 'USER' ? children : <Navigate to='/'/>
    )
}

export default ProtectRouteForAdmin