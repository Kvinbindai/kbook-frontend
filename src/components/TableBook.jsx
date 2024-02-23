import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
const TableBook = (props) => {
  const { data, header } = props;
  const navigate = useNavigate();

  return (
    <>
      {data ? (
        <div className="mt-6 pb-8">
          <div className="overflow-x-auto mx-6 ">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  {header.map((e) => {
                    return (
                      <th className="border border-secondary-400 px-4 py-2 text-2xl bg-primary text-secondary" key={e.id}>
                        {e.title}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                  data?.map((e)=>{
                    return  <tr key={e.id} className="hover cursor-pointer border-secondary-400 px-4 py-2 text-xl " onClick={() => navigate(`/dashboard/books/${e.id}`)}>
                    <td className="border border-gray-400 px-4 py-2">{e?.id}</td>
                    <td className="border border-gray-400 px-4 py-2">
                      {e?.enTitle || e?.thTitle}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {e?.category?.enTitle || e?.category?.thTitle}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {e?.price}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">{e?.amount}</td>
                  </tr>
                  })
                }
               
              
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default TableBook;
