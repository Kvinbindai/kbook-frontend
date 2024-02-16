import SubNav from "../components/SubNav";
import Table from "../components/Table";

const DashboardTablePage = () => {
  return (
    <div className="bg-white">
      <SubNav />
      <div className="mx-8 min-h-screen">
        <Table />
      </div>
    </div>
  );
};

export default DashboardTablePage;
