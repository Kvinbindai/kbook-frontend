import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import { useNavigate } from "react-router-dom";
const AddEditCategoryPage = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white p-8 ">
      <div className="flex justify-end gap-10">
        <Button className="bg-blue-500 w-36">Add Category</Button>
        <Button className="bg-gray-500 w-24" onClick={()=> navigate(-1)}>Back</Button>
      </div>
      <div className="flex flex-col p-12">
       <Input placeholder="Enter Category Name EN....." >CATEGORY NAME (EN)</Input>
       <Input placeholder="Enter Category Name TH....." >CATEGORY NAME (TH)</Input>
       <Select extendedClass="w-96" placeholder="IsActive....">IsActive</Select>
      </div>
    </div>
  );
};
export default AddEditCategoryPage;
