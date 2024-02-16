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
const EditProfile = () => {
  const navigate = useNavigate();
  const { registerUser, authUser } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    profileImage: "",
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
    <div className="min-h-screen pt-5 bg-white">
      <Title className="text-center font-bold">EDIT PROFILE</Title>
      <form onSubmit={submitForm}>
        <div className="w-full flex flex-col items-center mt-20 gap-10">
          <Input
            placeholder="Enter FirstName..."
            name="firstName"
            value={user.firstName}
            onChange={handleChangeInput}
            errorMessage={error.firstName}
          >
            First Name :
          </Input>
          <Input
            placeholder="Enter LastName..."
            name="lastName"
            value={user.lastName}
            onChange={handleChangeInput}
            errorMessage={error.lastName}
          >
            Last Name :
          </Input>
          <Input
            placeholder="Enter Phone Number..."
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChangeInput}
            errorMessage={error.phoneNumber}
          >
            Phone Number :
          </Input>
          <FileInput />
          <div className="flex gap-8 my-8 justify-between">
            <Button className="bg-blue-500 w-44">Confirm</Button>
            <Button className="bg-gray-500 w-44">Reset</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
