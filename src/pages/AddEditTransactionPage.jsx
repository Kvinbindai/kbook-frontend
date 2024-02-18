import Button from "../components/Button";
import Select from "../components/Select";
import Input from "../components/Input";
import TableInTransaction from "../components/TableInTransaction";
import { useNavigate } from "react-router-dom";
const AddEditTransactionPage = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white p-8 ">
      <div className="flex justify-end gap-10">
        <Button className="bg-green-500 w-36">Update</Button>
        <Button className="bg-gray-500 w-36" onClick={()=> navigate(-1)}>Back</Button>
      </div>
      <div className="flex justify-between p-12">
        <div className="artboard phone-2 bg-black">320×568</div>
        <div className="flex flex-col gap-5 w-96  text-xl">
          <div className="flex flex-col gap-5">
            <h1>Transaction :</h1>
            <h1 className="mx-5">K0101256600001</h1>
          </div>
          <div className="flex flex-col gap-5">
            <h1>Total Price :</h1>
            <h1 className="mx-5">500.00</h1>
          </div>
          <div className="flex flex-col gap-5">
            <Select placeholder="Update Status">Status</Select>
          </div>
          <div className="flex flex-col gap-5">
            <Input placeholder="Enter Note...">Note</Input>
          </div>
        </div>
      </div>
      <div className="p-12">
        <h1 className="text-xl">รายละเอียดสินค้า</h1>
        <TableInTransaction />
      </div>
    </div>
  );
};
export default AddEditTransactionPage;
