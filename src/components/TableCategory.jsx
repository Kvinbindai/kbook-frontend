import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
const TableCategory = (props) => {
  const { data, header } = props;
  const navigate = useNavigate();
  console.log(data)
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
                  data.map((e)=>{
                    return  <tr key={e.id} className="hover cursor-pointer border-secondary-400 px-4 py-2 text-xl" onClick={() => navigate(`/dashboard/category/${e.id}`)}>
                    <td className="border border-gray-400 px-4 py-2">{e.id}</td>
                    <td className="border border-gray-400 px-4 py-2">
                      {e?.enTitle}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {e?.thTitle || '-'}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {e.isActive === true ? 'true' : 'false'}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">{e.createdAt}</td>
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

export default TableCategory;
