import { useState } from "react";
import SubNav from "../components/SubNav";
import Table from "../components/TableBook";
import useAuth from "../hooks/use-auth";
import Loading from "../components/Loading";
// import { Outlet } from "react-router-dom";
import { transactionsHeader} from '../constant/table'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const HistoryPage = () => {
  const navigate = useNavigate()
  const {
    authUser: { transactions },
    refresh , setRefresh , fetchUser
  } = useAuth();
  console.log(transactions)

  const changeDateForm = (date) => {
    const d = new Date(date)
    return d.toISOString()
  }
  
  useEffect(()=>{
    fetchUser()
  },[refresh])

  return (
    <>
      {transactions ? (
        <div>
          {/* <SubNav /> */}
          <div className="mx-8 min-h-screen">
            <div className="pt-16">
              <div className="overflow-x-auto mx-6 ">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      {transactionsHeader.map((e) => {
                        return (
                          <th
                            className="border bg-primary px-4 py-2 text-2xl text-secondary"
                            key={e.id}
                          >
                            {e.title}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {
                      transactions.map((e)=>{
                        return (
                          <tr key={e.id} className="hover cursor-pointer text-xl" onClick={() => navigate(`/profile/history/${e.id}`)}>
                      <td className="border border-gray-400 px-4 py-2">{e.id}</td>
                      <td className="border border-gray-400 px-4 py-2">
                        {e.id}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {e.totalPrice}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {e.status}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">{changeDateForm(e.createdAt)}</td>
                    </tr>
                        )
                      })
                    }
                    
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-xl underline">รายการซื้อสินค้าของฉัน</h1>
          <div className="flex flex-col justify-center items-center h-screen gap-10">
            <Title>ยังไม่มีรายการซื้อสินค้าของคุณ</Title>
            <Link to="/">
              <Button className="text-xl" width="60">
                กลับไปหน้าแรก
              </Button>
            </Link>
          </div>
        </>
      )}
    </>



  );
};

export default HistoryPage;
