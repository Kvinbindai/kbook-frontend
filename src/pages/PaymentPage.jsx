import { useNavigate } from "react-router-dom";
import qrCode from "../assets/qr-sample.gif";
import Button from "../components/Button";
import { useRef } from "react";
import { useState } from "react";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import useAuth from "../hooks/use-auth";
import { createTransaction } from "../api/transaction";

const PaymentPage = () => {
  const navigate = useNavigate();
  const {
    authUser: { basketId, allItem, totalPrice },
    updateNewBasketToAuthUser,
    refresh , setRefresh
  } = useAuth();
  const fileEl = useRef(null);
  const [loading, setLoading] = useState(false);
  const [slip, setSlip] = useState(null);
  const uploadSlip = async (e) => {
    try {
      e.preventDefault();
      if (!slip) {
        toast.error("Please upload your slip");
        return;
      }
      setLoading(true);
      const formData = new FormData();
      formData.append("basketId", basketId);
      formData.append("totalPrice", totalPrice);
      formData.append("allItem", JSON.stringify(allItem));
      formData.append("slipImage", slip);
      const result = await createTransaction(formData);
      // console.log(result.data)
      await updateNewBasketToAuthUser(result.data);
      toast.success("Create Transaction Complete");
      setRefresh(!refresh)
      navigate("/");
    } catch (err) {
      console.log(err);
      if (err.response?.data.errorObj) {
        const errorList = err.response.data.errorObj;
        for (let i = 0; i < errorList.length; i++) {
          toast.error(`${errorList[i].message}`);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="min-h-screen flex flex-col justify-center items-center"> 
        <div >
          <h1 className="text-3xl mb-8 text-center text-secondary">Checkout Bill</h1>
          <div className="w-96">
            {slip ? (
              <div className="relative bg-gray-200">
                <img src={URL.createObjectURL(slip)} alt="post" />
                <button
                  className="absolute top-1 right-1 font-black"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSlip(null);
                    fileEl.current.value = "";
                  }}
                >
                  &#10005;
                </button>
              </div>
            ) : (
              <img src={qrCode} />
            )}
            <img />
          </div>
          <div className="mt-10 flex gap-5">
            {slip ? (
              <Button className="w-48 bg-green-500" onClick={uploadSlip}>
                Confirm
              </Button>
            ) : (
              <>
                <input
                  type="file"
                  className="hidden"
                  ref={fileEl}
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    if (e.target.files[0]) {
                      setSlip(e.target.files[0]);
                    }
                  }}
                ></input>
                <Button
                  className="w-48 bg-green-500"
                  onClick={() => fileEl.current.click()}
                >
                  Upload Slip
                </Button>
              </>
            )}
            <Button className="w-48 bg-gray-500" onClick={() => navigate("/")}>
              Back To HomePage
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
