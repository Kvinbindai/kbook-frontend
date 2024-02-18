import { useState } from "react";
import SubNav from "../components/SubNav";
import Table from "../components/Table";
import useDashboard from "../hooks/use-dashboard";
import Loading from "../components/Loading";
import { Outlet } from "react-router-dom";

const DashboardTablePage = () => {
  const { data, currentPath, tableHeader } = useDashboard();

  return (
    <>
      {data ? (
        <div className="bg-white">
          <SubNav />
          <div className="mx-8 min-h-screen">
            <Table data={data} currentPath={currentPath} header={tableHeader} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
      
    </>
  );
};

export default DashboardTablePage;
