import { useState } from "react";
import SubNav from "../components/SubNav";
import TableBook from "../components/TableBook";
import useDashboard from "../hooks/use-dashboard";
import Loading from "../components/Loading";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/use-auth";

const DashboardTableBookPage = () => {
  const {  currentPath, tableHeader, bookData , getData } = useDashboard();
  const { refresh } = useAuth()

  useEffect(()=>{
    getData()
  },[refresh])

  return (
    <>
      {bookData ? (
        <div>
          <SubNav />
          <div className="mx-8 min-h-screen">
            <TableBook data={bookData} currentPath={currentPath} header={tableHeader} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default DashboardTableBookPage;
