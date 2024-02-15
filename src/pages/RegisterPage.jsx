import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";
import FileInput from "../components/FileInput";

const RegisterPage = () => {
    const submitForm = (e) => {
        try{
          e.preventDefault();
          toast.success('Register Success')
        }catch(err){
          console.log(err)
          toast.error('Register failed')
        }
      };
    return (
        <div className="min-h-screen pt-32 bg-gray-500">
      <Title className="text-center font-bold">REGISTER FORM</Title>
      <form onSubmit={submitForm}>
        <div className="w-full flex flex-col items-center mt-20 gap-10">
          <Input type="email"  placeholder="Enter Email..." required={true}>Email :</Input>
          <Input type="password" placeholder="Enter Password..." required={true}>Password :</Input>
          <Input type="password" placeholder="Enter ConfirmPassword..." required={true}>Confirm Password :</Input>
          <Input placeholder="Enter FirstName..." required={true}>First Name :</Input>
          <Input placeholder="Enter LastName..." required={true}>Last Name :</Input>
          <Input placeholder="Enter Phone Number..."required={true}>Phone Number :</Input>
          <FileInput disabled={true}/>
          <Button className="w-96 mt-8">REGISTER</Button>
        </div>
      </form>
      <div className="mt-12 text-2xl text-center pb-8">
        <span>ALREADY HAVE AN ACCOUNT ?</span>
        <Link to='/login'>
          <span className="text-blue-500 underline mx-6 ">
            SIGN IN
          </span>
        </Link>
      </div>
    </div>
    )
}

export default RegisterPage