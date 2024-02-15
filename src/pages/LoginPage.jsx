import Input from "../components/Input"
import Title from "../components/Title"

const LoginPage = () => {
    return (
        <div className="min-h-screen pt-20">
            <Title className='text-center font-bold'>LOGIN FORM</Title>
            <form>
                <Input/>
            </form>
        </div>
    )
}

export default LoginPage