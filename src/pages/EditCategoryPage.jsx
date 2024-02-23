import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useDashboard from "../hooks/use-dashboard";
import useAuth from "../hooks/use-auth";
const EditCategoryPage = () => {
  const {editOldCategory , categoryData } = useDashboard()
  const navigate = useNavigate();
  const { categoryId } = useParams()
  const { refresh , setRefresh } = useAuth()
  const [input, setInput] = useState({
    enTitle: "",
    thTitle: "",
    isActive : '',
  });

  useEffect(()=>{
    const categoryDetails = categoryData.find((e)=>e.id === +categoryId)
    setInput({
      ...categoryDetails
    })
  },[refresh])

  const handleChangeInput = (e) => {
    setInput((prev)=>({
      ...input,
      [e.target.name] : e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    try{
      e.preventDefault()
      // console.log(input)
      const dataObj = {
        enTitle: input.enTitle,
    thTitle: input.thTitle,
    isActive : input.isActive,
      }
      await editOldCategory(dataObj,+categoryId)
      toast.success('Update Category Success')
      navigate('/dashboard/category')
     setRefresh(!refresh)
    }catch(err){
      console.log(err)
      toast.error('Update Category Failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen">
      <div className="flex justify-end gap-10">
        <Button className="bg-blue-500 w-36">Confirm</Button>
        <Button
          className="bg-gray-500 w-24"
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
          // disabled={true}
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
export default EditCategoryPage;
