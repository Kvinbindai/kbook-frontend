import { Link , useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";
import { toast } from "react-toastify";
import useAuth from "../hooks/use-auth";
import { useState } from "react";
import { loginSchema } from "../validators/user-validator";
import validateInput from "../utils/validate";
const LoginPage = () => {
  const navigate = useNavigate()
  const { loginUser  } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const handleChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setError({
      email: "",
      password: "",
    });
  };
  const submitForm = async (e) => {
    try {
      e.preventDefault();
      const {value , errorObj } = validateInput(loginSchema,user)
      
      setError(errorObj)
     if(!value && errorObj){
      setError(errorObj)
      toast.error('Email and Password is required')
      return
     }
      await loginUser(value);
      toast.success("Login Success");
      navigate('/')
    } catch (err) {
      console.log(err);
      if(err.response){
        toast.error(err.response?.data.message);
      }
      toast.error('Internal Server Error')
    }
  };
  return (
    <div className="min-h-screen pt-5 bg-gray-500">
      <Title className="text-center font-bold">LOGIN FORM</Title>
      <form onSubmit={submitForm}>
        <div className="w-full flex flex-col items-center mt-20 gap-10">
          <Input
  
            type="email"
            placeholder="Enter Email..."
            name="email"
            value={user.email}
            onChange={handleChangeInput}
            errorMessage={error.email}
          >
            Email :
          </Input>
          <Input
            type="password"
            placeholder="Enter Password..."
            name="password"
            value={user.password}
            onChange={handleChangeInput}
            errorMessage={error.password}
          >
            Password :
          </Input>
          <Button className="w-96 mt-8">LOGIN</Button>
        </div>
      </form>
      <div className="mt-12 text-2xl text-center">
        <span>DONT HAVE ANY ACCOUNT ?</span>
        <Link to="/register">
          <span className="text-blue-500 underline mx-6">
            CREATE NEW ACCOUNT
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
