import { Link } from "react-router-dom"
import Button from "../components/Button"

const NotFound = () => {
    return (
        <div className="w-full min-h-screen  flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white" >Page Not Found</h1>
            <Link to='/'>
                <Button className="mt-16 text-xl underline bg-gray-500 border-gray-500 text-blue-500">Go Back To HomePage</Button>
            </Link>
        </div>
    )
}

export default NotFound