import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";
import useCart from "../hooks/use-cart";
import { useNavigate } from "react-router-dom";

const BookContainer = (props) => {
  const navigate = useNavigate()
  const { title , footer , limit } = props;





  return (
    <div className="w-full p-10 ">
      <h1 className="text-xl underline" onClick={()=>navigate('/')} >{title}</h1> 
      <div className="py-5">
        {limit ? <CardContainer limit={limit}/> : <CardContainer/>}
      </div>
      {footer ? (
        <Link to="/books">
          <h1 className="text-right text-xl text-blue-500 underline underline-offset-8">
            {footer}
          </h1>
        </Link>
      ) : null}
    </div>
  );
};

export default BookContainer;
