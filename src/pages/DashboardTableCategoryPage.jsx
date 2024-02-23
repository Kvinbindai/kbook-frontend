import {useEffect} from "react";
import useDashboard from "../hooks/use-dashboard";
import Loading from "../components/Loading";
import TableCategory from '../components/TableCategory'
import SubNav from "../components/SubNav";
import useAuth from "../hooks/use-auth";

export default function DashboardTableCategoryPage() {
  const { categoryData, currentPath, tableHeader, getData } = useDashboard();
  const { refresh } = useAuth()

  useEffect(()=>{
    getData()
  },[refresh])

  return (
    <>
      {categoryData ? (
        <div>
          <SubNav />
          <div className="mx-8 min-h-screen">
            <TableCategory
              data={categoryData}
              currentPath={currentPath}
              header={tableHeader}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
