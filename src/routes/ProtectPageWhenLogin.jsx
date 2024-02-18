import useAuth from "../hooks/use-auth"
import { Navigate } from "react-router-dom"
const ProtectPageWhenLogin = ({children}) => {
    const { authUser } = useAuth()
    return (
        authUser ? <Navigate to='/'/> : children
    )
}

export default ProtectPageWhenLogin