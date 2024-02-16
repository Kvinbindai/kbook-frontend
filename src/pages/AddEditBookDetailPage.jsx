import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import { useState } from "react";

const AddEditBookDetailPage = () => {
  const [isEdit,setIsEdit] = useState(false)
  const image =
    "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg";
  return (
    <div className="py-12 px-24 flex flex-col gap-7 w-full bg-white text-black">
      <div className="flex justify-between items-center ">
        <div className="text-xl flex gap-10 items-center">
          <span>AMOUNT :</span>

          <Input placeholder="Enter Amount..." width="40" />
        </div>
        <div className="flex justify-between gap-10 ">
          <Button className="bg-green-500 text-white">
            ADD BOOK
          </Button>
          <Button>CANCEL</Button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="bg-gray-500 w-2/4 flex flex-col items-center justify-center text-xl relative">
          <input type="file" className="opacity-0 top-0 bottom-0 left-0 right-0" />
          Add Image Book
        </div>
        <div className="flex flex-col gap-5">
          <Input placeholder="Enter Book Title (EN)...">
            Book Title (EN) :
          </Input>

          <Input placeholder="Enter Book Title (TH)...">
            Book Title (TH) :
          </Input>

          <Select placeholder="Select Book Category...">Category :</Select>
          <Select placeholder="Select Status....">Status :</Select>

          <div className="flex flex-col gap-5">

            <Input placeholder="Enter Price...">
              Price :
            </Input>
            
            <Input placeholder="Enter New Price...">
              New Price :
            </Input>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Input placeholder="Enter Description (EN) :..." width="full">
          Description (EN) :
        </Input>
        <Input placeholder="Enter Description (TH) :..." width="full">
          Description (TH) :
        </Input>
      </div>
    </div>
  );
};

export default AddEditBookDetailPage;
