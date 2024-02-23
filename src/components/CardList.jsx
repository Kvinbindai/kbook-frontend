import { Link } from "react-router-dom";
import Button from "./Button";
import { useParams } from "react-router-dom";

const CardList = (props) => {
  const { data } = props
  return (
    <Link to={`/book/${data.id}`}>
      <div className="card min-w-64 bg-primary shadow-xl p-5 hover:scale-110">
        <figure>
          <img
            className="h-80"
            src={data.bookImage || "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{data.enTitle || data.thTitle}</h2>
          <div className="flex justify-between items-center pt-5">
            <div>{data.price} Baht</div>
            <span className="material-symbols-outlined text-2xl">
              add_circle
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardList;
