import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../api/category"; 
import { toast } from "react-toastify";
import useAuth from "../hooks/use-auth";
import useDashboard from "../hooks/use-dashboard";
const AddCategoryPage = () => {
  const { refresh , setRefresh } = useAuth()
  const {  addNewCategory } = useDashboard()
  const navigate = useNavigate();
  const [input, setInput] = useState({
    enTitle: "",
    thTitle: "",

  });

  const handleChangeInput = (e) => {
    setInput((prev)=>({
      ...input,
      [e.target.name] : e.target.value
    }));
  };


  const handleSubmit = async (e) => {
    try{
      e.preventDefault()
      await addNewCategory(input)
      toast.success('Create Category Success')
      navigate('/dashboard/category')
      setRefresh(!refresh)
    }catch(err){
      console.log(err)
      toast.error('Create Category Failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen  p-8 ">
      <div className="flex justify-end gap-10">
        <Button className="bg-secondary w-36">Add Category</Button>
        <Button
          className="bg-primary text-secondary w-24"
          onClick={() => navigate(-1)}
          type="button"
        >
          Back
        </Button>
      </div>
      <div className="flex flex-col p-12">
        <Input placeholder="Enter Category Name EN....."
        value={input.enTitle}
        onChange={handleChangeInput}
        name="enTitle"
        >
          CATEGORY NAME (EN)
        </Input>
        <Input placeholder="Enter Category Name TH....."
        value={input.thTitle}
        onChange={handleChangeInput}
        name="thTitle"
        >
          CATEGORY NAME (TH)
        </Input>
        <label className="form-control w-full max-w-xs ">
          <div className="label">
            <span className="label-text text-xl">Status :</span>
          </div>
          <select
          disabled={true}
            className="select select-bordered text-primary  w-96"
            value={input.isActive}
            onChange={(e) => {
              console.log(e.target.value);
              setInput((prev) => ({
                ...input,
                isActive: e.target.value === "true",
              }));
            }}
          >
            <option value="true">Active</option>
            <option value="false">InActive</option>
          </select>
        </label>
      </div>
    </div>
    </form>
  );
};
export default AddCategoryPage;
