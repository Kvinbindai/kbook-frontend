import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TableProductDetail from "../components/TableProductDetail";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/use-auth";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../components/Loading";
const HistoryDetailPage = () => {
  const navigate = useNavigate()
  const { transactionId} = useParams()
  // console.log(transactionId)
  const { authUser : { transactions } } = useAuth()
  console.log(transactions)
  const [list ,setList] = useState(null)
  useEffect(()=>{
    const foundTransaction = transactions.find((e)=>{
      return e.id === +transactionId
    })
    setList(foundTransaction)
  },[])
  return (
    <>
    {
      list ? <div className="min-h-screen"> 
      <div className="flex justify-end gap-10 pt-16 pr-16">
        <Button className="bg-gray-500 w-24" onClick={()=>navigate(-1)} >Back</Button>
      </div>
      <div className="flex justify-between p-12">
        {
          list.slipImage ? (<img src={list.slipImage} className="w-96" />) : (<div className="artboard phone-1 bg-black"></div>)
        }
        <div className="flex flex-col gap-5 w-96  text-xl">
          <div className="flex flex-col gap-5">
            <h1>Transaction Number :</h1>
            <h1 className="mx-5">{list.id}</h1>
          </div>
          <div className="flex flex-col gap-5">
            <h1>Total Price :</h1>
            <h1 className="mx-5">{list.totalPrice}</h1>
          </div>
          <div className="flex flex-col gap-5">
            <h1>Status :</h1>
            <h1 className="mx-5">{list.status}</h1>
          </div>
          <div className="flex flex-col gap-5">
            <h1>Note :</h1>
            <div>{list.note}</div>
          </div>
        </div>
      </div>
      <div className="p-12">
        <h1 className="text-xl">รายละเอียดสินค้า</h1>
        <TableProductDetail data={list.basket.BasketItem} />
      </div>
    </div> : <Loading/>
    }
    </>
    
  );
};
export default HistoryDetailPage;
