import Button from "../components/Button";
import Select from "../components/Select";
import Input from "../components/Input";
import TableProductDetail from "../components/TableProductDetail";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useState } from "react";
import { useEffect } from "react";
import useDashboard from "../hooks/use-dashboard";
import { toast } from "react-toastify";
const EditTransactionPage = () => {
  const { transactionId } = useParams();
  const { editUserTransaction , transactionData } = useDashboard();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  const getDataFromTransaction = async () => {
    const transaction = transactionData.find((e) => e.id === +transactionId);
    // console.log(transaction);
    setDetails(transaction);
  };

  useEffect(() => {
    getDataFromTransaction();
  }, []);

  const handleChangeInput = (e) => {
    setDetails((prev)=>({
      ...details,
      [e.target.name] : e.target.value
    }))
  }


  const handleSubmit = async (e) => {
    try{
      e.preventDefault()
      await editUserTransaction(transactionId,details)
      toast.success('Update Transaction Complete')
      navigate('/dashboard/transactions')
    }catch(err){
      console.log(err)
      toast.error('Update Transaction Error')
    }
  }
  return (
    <>
      {details ? (
        <form onSubmit={handleSubmit}>
          <div className="min-h-screen">
            <div className="flex justify-end gap-10 pt-16 pr-16">
              <Button className="bg-green-500 w-36">Update</Button>
              <Button className="bg-gray-500 w-36" type="button" onClick={() => navigate(-1)}>
                Back
              </Button>
            </div>
            <div className="flex justify-between p-12">
              <div className="artboard phone-2 bg-black flex flex-col justify-center">
                <img src={details.slipImage} />
              </div>
              <div className="flex flex-col gap-5 w-96  text-xl">
                <div className="flex flex-col gap-5">
                  <h1>Transaction Number:</h1>
                  <h1 className="mx-5">{details.id}</h1>
                </div>
                <div className="flex flex-col gap-5">
                  <h1>Total Price :</h1>
                  <h1 className="mx-5">{details.totalPrice}</h1>
                </div>
                <div className="flex flex-col gap-5">
                <h1>Status :</h1>
                  <select
                    // disabled={true}
                    className="select select-bordered text-primary  w-96"
                    value={details.status}
                    name="status"
                    onChange={(e) => {
                      setDetails((prev)=>({
                        ...details,
                        status : e.target.value
                      }))
                    }}
                  >
                    <option value="PENDING">PENDING</option>
                    <option value="SUCCESS">SUCCESS</option>
                    <option value="CANCELED">CANCELED</option>
                  </select>
                </div>
                <div className="flex flex-col gap-5">
                  <Input placeholder="Enter Note..." value={details?.note} onChange={handleChangeInput} name="note">
                    Note
                  </Input>
                </div>
              </div>
            </div>
            <div className="p-12">
              <h1 className="text-xl">รายละเอียดสินค้า</h1>
              <TableProductDetail data={details.basketItem} />
            </div>
          </div>
        </form>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default EditTransactionPage;
