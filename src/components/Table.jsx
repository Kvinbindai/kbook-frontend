import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
const Table = (props) => {
  const { data, header } = props;
  const navigate = useNavigate();
  const redirectToList = (id) => {
    navigate(`/profile/history/${id}`);
  };

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
                      <th className="border border-gray-400 px-4 py-2" key={e.id}>
                        {e.title}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="hover" onClick={() => redirectToList(1)}>
                  <td className="border border-gray-400 px-4 py-2">1</td>
                  <td className="border border-gray-400 px-4 py-2">
                    Cy Ganderton
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Cy Ganderton
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Quality Control Specialist
                  </td>
                  <td className="border border-gray-400 px-4 py-2">Blue</td>
                </tr>
                <tr className="hover">
                  <td className="border border-gray-400 px-4 py-2">1</td>
                  <td className="border border-gray-400 px-4 py-2">
                    Cy Ganderton
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Cy Ganderton
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Quality Control Specialist
                  </td>
                  <td className="border border-gray-400 px-4 py-2">Blue</td>
                </tr>
                <tr className="hover">
                  <td className="border border-gray-400 px-4 py-2">1</td>
                  <td className="border border-gray-400 px-4 py-2">
                    Cy Ganderton
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Cy Ganderton
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Quality Control Specialist
                  </td>
                  <td className="border border-gray-400 px-4 py-2">Blue</td>
                </tr>
                <tr className="hover">
                  <td className="border border-gray-400 px-4 py-2">1</td>
                  <td className="border border-gray-400 px-4 py-2">
                    Cy Ganderton
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Cy Ganderton
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    Quality Control Specialist
                  </td>
                  <td className="border border-gray-400 px-4 py-2">Blue</td>
                </tr>
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

export default Table;
