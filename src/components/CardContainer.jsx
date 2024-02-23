import CardList from "./CardList";
import useAuth from "../hooks/use-auth";
import useCart from "../hooks/use-cart";
import Loading from "./Loading";
import { useEffect } from "react";

const CardContainer = (props) => {
  const { refresh  } = useAuth();
  const { bookData , queryBookList } = useCart();
  const { limit } = props;

  useEffect(()=>{
    queryBookList
  },[refresh])

  return (
    <div className="grid grid-cols-4 p-5 gap-8">
     {
      bookData ? (
        limit ? (
          bookData.map((e) => {
            if (e.id <= limit) {
              return <CardList key={e.id} data={e} />;
            }
          })
        ) : (
          bookData?.map((e) => {
            return <CardList key={e.id} data={e} />;
          })
        )
      ) : (
        <Loading />
      )
     }
    </div>
  );
};

export default CardContainer;
