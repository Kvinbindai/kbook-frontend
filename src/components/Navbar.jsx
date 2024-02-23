import { Link } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import useAuth from "../hooks/use-auth";
import useCart from "../hooks/use-cart";
import { useNavigate } from "react-router-dom";
import Toggle from "./Toggle";

const Navbar = () => {
  const { authUser, setRefresh, refresh } = useAuth();
  const navigate = useNavigate();
  const { bookData, setQueryBookList, inputSearch, setInputSearch } = useCart();

  const handleSearchInput = (e) => {
    setInputSearch(e.target.value);
  };

  const searchResult = (query) => {
    console.log(query);
    console.log(bookData);
    const queryData = bookData.filter((e) => {
      const str = e.enTitle.toLowerCase();
      return str.includes(query.toLowerCase());
    });
    console.log(queryData);
    setQueryBookList(queryData);
    setRefresh(!refresh);
    navigate("/search");
  };

  return (
    <div className="flex fixed right-0 left-0 p-3   px-5 justify-between items-center z-50 border-b-1 border-black min-h-[72px] bg-secondary">
      <div className="text-4xl font-bold  text-black">
        <Logo />
      </div>
      <div className="w-[500px]">
        <SearchBar
          value={inputSearch}
          onChange={handleSearchInput}
          onClick={() => searchResult(inputSearch)}
          placeholder="Search Book Name...."
        />
      </div>

      {authUser ? (
        <>
          
          <Dropdown />
        </>
      ) : (
        <div className="flex gap-6">
          <Toggle/>
          <Link to="/login">
            <Button>LOG IN</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
