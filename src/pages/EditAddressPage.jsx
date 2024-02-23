import Select from "../components/Select";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const EditAddressPage = () => {
  const submitData = (e) => {
    e.preventDefault();
  };
  return (
    <div className=" min-h-screen p-8">
      <div className="text-xl flex justify-between items-center">
        <h1>เพิ่มที่อยู่เพื่อจัดส่ง</h1>
        <div className="flex gap-5">
          <div className="form-control">
            <label className="label cursor-pointer gap-5">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-primary-500"
                checked
              />
              <span className="label-text text-xl">รับที่ร้าน</span>
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer gap-5">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-primary-500"
              />
              <span className="label-text text-xl">จัดส่งถึงบ้าน</span>
            </label>
          </div>
        </div>
      </div>
      <form onSubmit={submitData}>
        <div className="mt-8 flex flex-col mx-auto w-96 gap-5">
          <Select placeholder="Select Province....">Province :</Select>
          <Select placeholder="Select District....">District :</Select>
          <Select placeholder="Select Sub District....">Sub District :</Select>
          <Select placeholder="Select Post Code...." disabled={true}>
            PostCode :
          </Select>
          <Input placeholder="Enter Contact Name....">Contact Name :</Input>
          <Input placeholder="Enter Contact Number....">Contact Number :</Input>
          <div className="flex justify-between mt-5">
            <Button className="w-40 bg-blue-500">Confirm</Button>
            <Link to="/cart">
              <Button className="w-40 bg-gray-500">Back</Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditAddressPage;
