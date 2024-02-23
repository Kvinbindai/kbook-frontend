import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";
import FileInput from "../components/FileInput";
import { useState } from "react";
import { toast } from "react-toastify";
import { registerSchema } from "../validators/user-validator";
import validateInput from "../utils/validate";
import useAuth from "../hooks/use-auth";
const RegisterPage = () => {
  const navigate = useNavigate();
  const { registerUser, authUser } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const handleChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      const { value, errorObj } = validateInput(registerSchema, user);
      setError(errorObj);
      await registerUser(value);
      navigate("/");
      toast.success("Register Success");
    } catch (err) {
      console.log(err);
      toast.error("Register failed");
    }
  };
  return (
    <div className="min-h-screen pt-5 bg-gray-500 flex flex-col justify-center items-center">
      <div>
      <Title className="text-center font-bold bg-transparent">REGISTER FORM</Title>
      <form onSubmit={submitForm}>
        <div className="w-full flex flex-col items-center mt-20 gap-10">
          <Input
            type="email"
            placeholder="Enter Email..."
            required={true}
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
            required={true}
            name="password"
            value={user.password}
            onChange={handleChangeInput}
            errorMessage={error.password}
          >
            Password :
          </Input>
          <Input
            type="password"
            placeholder="Enter ConfirmPassword..."
            required={true}
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChangeInput}
            errorMessage={error.confirmPassword}
          >
            Confirm Password :
          </Input>
          <Input
            placeholder="Enter FirstName..."
            name="firstName"
            value={user.firstName}
            onChange={handleChangeInput}
            errorMessage={error.firstName}
            required={true}
          >
            First Name :
          </Input>
          <Input
            placeholder="Enter LastName..."
            name="lastName"
            value={user.lastName}
            onChange={handleChangeInput}
            errorMessage={error.lastName}
            required={true}
          >
            Last Name :
          </Input>
          <Input
            placeholder="Enter Phone Number..."
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChangeInput}
            errorMessage={error.phoneNumber}
            required={true}
          >
            Phone Number :
          </Input>
          <Button className="w-96 mt-8">REGISTER</Button>
        </div>
        <div className="mt-12 text-2xl text-center pb-8">
          <span>ALREADY HAVE AN ACCOUNT ?</span>
          <Link to="/login">
            <span className="text-blue-500 underline mx-6 ">SIGN IN</span>
          </Link>
        </div>
      </form>
      </div>
    </div>
  );
};

export default RegisterPage;
