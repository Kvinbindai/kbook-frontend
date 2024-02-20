import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Title from "../components/Title";
import FileInput from "../components/FileInput";
import { useState , useRef } from "react";
import { toast } from "react-toastify";
import { registerSchema, updateSchema } from "../validators/user-validator";
import validateInput from "../utils/validate";
import useAuth from "../hooks/use-auth";
import Loading from "../components/Loading";
import { editUser } from "../api/user";
const EditProfile = () => {
  const navigate = useNavigate();
  const { authUser , updateUser } = useAuth();
  const [user, setUser] = useState({
    firstName: authUser?.firstName,
    lastName: authUser?.lastName,
    phoneNumber: authUser?.phoneNumber,
    profileImage: authUser?.profileImage,
  });
  const [image , setImage ] = useState(null)
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [loading , setLoading] = useState(false)
  const handleChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      const { value, errorObj } = validateInput(updateSchema, user);
      // if(errorObj){
      //   setError(errorObj);
      //   throw Error 
      // }
      const formData = new FormData() 
      formData.append('firstName' , user.firstName)
      formData.append('lastName' , user.firstName)
      formData.append('phoneNumber' , user.phoneNumber)
      formData.append('profileImage' , image)
      setLoading(true)
      await updateUser(formData);
      navigate("/");
      toast.success("Update Success");
    } catch (err) {
      console.log(err);
      toast.error("Update failed");
    } finally{
      setLoading(false)
    }
  };
  return (
    <>
    {loading && <Loading/>}
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
          <FileInput onChange={(e)=>{
            e.stopPropagation()
            if(e.target.files[0]){
              setImage(e.target.files[0])
              setUser({
                ...user,
                profileImage : URL.createObjectURL(e.target.files[0])
              })
            }
          }}/>
          {
            user.profileImage && <div className="w-96 h-96 flex flex-col justify-center items-center">
              <img src={user.profileImage} className="w-96 h-96 rounded-full" />
            </div>
          }
          <div className="flex gap-8 my-8 justify-between">
            <Button className="bg-blue-500 w-44">Confirm</Button>
            <Button className="bg-gray-500 w-44" onClick={()=>{
              navigate('/')
            }}>Go Back</Button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default EditProfile;
