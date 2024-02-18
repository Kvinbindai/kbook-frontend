
const TableInTransaction = () => {

  return (
    <div className="mt-6 pb-8">
      <div className="overflow-x-auto mx-6 ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">No</th>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Job</th>
              <th className="border border-gray-400 px-4 py-2">Job</th>
              <th className="border border-gray-400 px-4 py-2">
                Favorite Color
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr  >
              <td className="border border-gray-400 px-4 py-2">1</td>
              <td className="border border-gray-400 px-4 py-2">Cy Ganderton</td>
              <td className="border border-gray-400 px-4 py-2">Cy Ganderton</td>
              <td className="border border-gray-400 px-4 py-2">
                Quality Control Specialist
              </td>
              <td className="border border-gray-400 px-4 py-2">Blue</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">1</td>
              <td className="border border-gray-400 px-4 py-2">Cy Ganderton</td>
              <td className="border border-gray-400 px-4 py-2">Cy Ganderton</td>
              <td className="border border-gray-400 px-4 py-2">
                Quality Control Specialist
              </td>
              <td className="border border-gray-400 px-4 py-2">Blue</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">1</td>
              <td className="border border-gray-400 px-4 py-2">Cy Ganderton</td>
              <td className="border border-gray-400 px-4 py-2">Cy Ganderton</td>
              <td className="border border-gray-400 px-4 py-2">
                Quality Control Specialist
              </td>
              <td className="border border-gray-400 px-4 py-2">Blue</td>
            </tr>
            <tr >
              <td className="border border-gray-400 px-4 py-2">1</td>
              <td className="border border-gray-400 px-4 py-2">Cy Ganderton</td>
              <td className="border border-gray-400 px-4 py-2">Cy Ganderton</td>
              <td className="border border-gray-400 px-4 py-2">
                Quality Control Specialist
              </td>
              <td className="border border-gray-400 px-4 py-2">Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableInTransaction;
