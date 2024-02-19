import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";

const BookContainer = (props) => {
  const { title , footer } = props;
  return (
    <div className="w-full p-10 bg-white">
      <h1 className="text-xl underline">{title}</h1>
      <div className="py-5">
        <CardContainer />
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
