import { useState } from "react";
import Loading from "./Loading";

const CartComponent = (props) => {
  const { data, amount, pricePerUnit, bookId, handleAmount, setTotal } = props;
  const [currentAmount, setCurrentAmount] = useState(amount);
  console.log(data)
  const onAdd = () => {
    const updatedAmount = currentAmount + 1;
    setCurrentAmount(updatedAmount);
    handleAmount(bookId, updatedAmount);
    setTotal((prevTotal) => prevTotal + pricePerUnit);
  };

  const onDecrease = () => {
    const updatedAmount = currentAmount > 0 ? currentAmount - 1 : 0;
    setCurrentAmount(updatedAmount);
    handleAmount(bookId, updatedAmount);
    setTotal((prevTotal) => prevTotal - pricePerUnit);
  };

  return (
    <>
      {amount > 0 ? (
        <div className="flex justify-between gap-5 min-h-60 p-5 border-blue-500">
          {data?.bookImage ? (
            <img className="w-96" src={data?.bookImage} />
          ) : (
            <div className="bg-primary min-w-60 flex justify-center items-center">
              NO Photo
            </div>
          )}
          <div className="flex flex-col  gap-6">
            <h1 className="text-xl">
              {data?.enTitle ? data?.enTitle : data?.thTitle}
            </h1>
            <div className="flex gap-5 min-w-96">
              <span>Description :</span>
              <span>
                {data?.enDescription ? data?.enDescription : data?.thDescription}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-8 items-center  w-40">
            <div className="flex justify-between text-primary items-center bg-secondary text-xl px-2 h-10 w-28">
              <span
                role="button"
                className="material-symbols-outlined"
                onClick={onDecrease}
              >
                do_not_disturb_on
              </span>
              <span>{currentAmount}</span>
              <span
                role="button"
                className="material-symbols-outlined"
                onClick={onAdd}
              >
                add_circle
              </span>
            </div>
            <div className="flex gap-5 min-w-32 justify-between">
              <span>Price:</span>
              <span>{pricePerUnit * currentAmount}</span>
              <span>Baht</span>
            </div>
          </div>
        </div>
      ) : (
        null
      )}
    </>
  );
};

export default CartComponent;
