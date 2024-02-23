import React from "react";
import useDashboard from "../hooks/use-dashboard";
import Loading from "../components/Loading";
import TableTransaction from "../components/TableTransaction";
import SubNav from "../components/SubNav";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../hooks/use-auth";
import Button from "../components/Button";
export default function DashboardTableTransactionPage() {
  const { transactionData, currentPath, tableHeader, getData } = useDashboard();
  const [currentStatus, setCurrentStatus] = useState("");
  const [dataList, setDataList] = useState(transactionData);
  const { refresh } = useAuth();

  useEffect(() => {
    console.log(currentStatus);
    const filterData = transactionData.filter(
      (item) => item.status === currentStatus
    );
    setDataList(filterData);
  }, [currentStatus]);

  return (
    <>
      {currentStatus ? (
        <div className="">
          <div className="pt-8 flex px-16 justify-between">
            <select
              className="select select-bordered text-primary  w-96"
              name="status"
              onChange={(e) => {
                setCurrentStatus(e.target.value);
              }}
              value={currentStatus}
            >
              <option value="PENDING">PENDING</option>
              <option value="SUCCESS">SUCCESS</option>
              <option value="CANCELED">CANCELED</option>
            </select>
            <Button
              onClick={() => {
                setCurrentStatus("");
              }}
            >
              Reset
            </Button>
          </div>
          <div className="mx-8 min-h-screen">
            <TableTransaction
              data={dataList}
              currentPath={currentPath}
              header={tableHeader}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="pt-8 flex px-16 justify-between">
            <select
              className="select select-bordered text-primaryry  w-96"
              name="status"
              onChange={(e) => {
                setCurrentStatus(e.target.value);
              }}
              value={currentStatus}
            >
              <option value="PENDING">PENDING</option>
              <option value="SUCCESS">SUCCESS</option>
              <option value="CANCELED">CANCELED</option>
            </select>
            <Button
              onClick={() => {
                setCurrentStatus("");
              }}
            >
              Reset
            </Button>
          </div>
          <div className="mx-8 min-h-screen">
            <TableTransaction
              data={transactionData}
              currentPath={currentPath}
              header={tableHeader}
            />
          </div>
        </div>
      )}
    </>
  );
}
