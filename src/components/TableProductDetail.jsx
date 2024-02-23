import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { booksHeader } from "../constant/table";
const TableProductDetail = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <>
      <div className="mt-6 pb-8">
        <div className="overflow-x-auto mx-6 ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                {booksHeader.map((e) => {
                  return (
                    <th className="border border-gray-400 px-4 py-2 text-2xl bg-primary text-secondary" key={e.id}>
                      {e.title}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data?.map((e, i) => {
                console.log(e);
                return (
                  <tr key={i + 1} className="border cursor-pointer border-gray-400 px-4 py-2 text-xl" >
                    <td >
                      {i + 1}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {e.book?.enTitle || e.book?.thTitle}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {e.book?.category?.enTitle || e.book?.category?.thTitle}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {e.book?.price[0]["price"]}
                    </td>
                    <td className="border border-gray-400 px-4 py-2">
                      {e?.amount}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableProductDetail;
