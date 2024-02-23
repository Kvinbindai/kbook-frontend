import Select from "./Select";
import Button from "./Button";
import useDashboard from "../hooks/use-dashboard";
import { Link } from "react-router-dom";
const SubNav = () => {
  const { navButton, currentPath = 'books' } = useDashboard();
  return (
    <div className="flex justify-end p-8">
      <Button>
        <Link to={`/dashboard/${currentPath}/add`}>{navButton}</Link>
      </Button>
    </div>
  );
};

export default SubNav;
