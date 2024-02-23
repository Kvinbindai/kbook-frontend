import { Link } from "react-router-dom";
import CardList from "../components/CardList";
import useCart from "../hooks/use-cart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../components/Button";
import useAuth from "../hooks/use-auth";
const SearchPage = () => {
  const navigate = useNavigate();
  const { refresh, setRefresh } = useAuth();
  const { queryBookList, inputSearch, setInputSearch } = useCart();
  const [currentQuery, setCurrentQuery] = useState("");
  useEffect(() => {
    setCurrentQuery(inputSearch);
  }, [refresh]);
  return (
    <>
      {queryBookList.length > 0 ? (
        <div className="w-full p-10 ">
          <div className=" gap-64">
            <div className="flex gap-96">
              <h1
                className="text-xl underline"
                onClick={() => {
                  navigate("/");
                  setRefresh(!refresh);
                  setInputSearch("");
                }}
              >
                ย้อนกลับ
              </h1>
              <h1 className="text-3xl text-black">{`"${currentQuery}"`}</h1>
            </div>
            <div className="grid grid-cols-4 p-5 gap-10">
              {queryBookList.map((e) => {
                return <CardList key={e.id} data={e} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full min-h-screen  flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-primary">Book Not Found</h1>
          <Link to="/">
            <Button className="mt-16 text-xl underline bg-gray-500 border-gray-500 text-blue-500" onClick={()=>setInputSearch('')}>
              Go Back To HomePage
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default SearchPage;
