import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";
import { toast } from "react-toastify";
import useAuth from "../hooks/use-auth";
import { useState } from "react";
const LoginPage = () => {
  const { loginUser } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
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
      await loginUser(user);
      toast.success("Login Success");
    } catch (err) {
      console.log(err);
      toast.error("Login Failed");
    }
  };
  return (
    <div className="min-h-screen pt-32 bg-gray-500">
      <Title className="text-center font-bold">LOGIN FORM</Title>
      <form onSubmit={submitForm}>
        <div className="w-full flex flex-col items-center mt-20 gap-10">
          <Input
            type="email"
            placeholder="Enter Email..."
            name="email"
            value={user.email}
            onChange={handleChangeInput}
          >
            Email :
          </Input>
          <Input
            type="password"
            placeholder="Enter Password..."
            name="password"
            value={user.password}
            onChange={handleChangeInput}
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
