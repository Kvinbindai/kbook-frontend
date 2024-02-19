import Select from "./Select";
import Button from "./Button";
import useDashboard from "../hooks/use-dashboard";
import { Link } from "react-router-dom";
const SubNav = () => {
  const { navButton, currentPath } = useDashboard();
  return (
    <div className="flex justify-between p-8">
      <Select placeholder="Status" />

      <Button>
        <Link to={`/dashboard/${currentPath}/add`}>{navButton}</Link>
      </Button>
    </div>
  );
};

export default SubNav;
