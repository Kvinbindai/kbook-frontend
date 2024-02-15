import Button from "./Button";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex fixed right-0 left-0 p-3 bg-white  px-5 justify-between items-center z-50">
      <div className="text-4xl font-bold  text-black">
      <Logo />
      </div>
      <div className="w-[500px]">
        <SearchBar />
      </div>
      <div>
        <Button className="btn-outline">LOG IN</Button>
      </div>
      {/* <Dropdown /> */}
    </div>
  );
};

export default Navbar;
