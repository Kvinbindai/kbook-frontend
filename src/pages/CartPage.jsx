import Title from "../components/Title";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartComponent from "../components/CartComponent";
import useAuth from "../hooks/use-auth";
import { updateAllAmountOnBasket } from "../api/cart";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate()
  const {
    authUser: { allItem, totalPrice , basketId }, fetchUser
  } = useAuth();

  const [total, setTotal] = useState(totalPrice);
  const [allList, setAllList] = useState(allItem);



  const handleAmount = (bookId, currentAmount) => {
    setAllList((prev) => {
      const newAllList = prev.map((e) => {
        if (e.bookId === bookId) {
          return {
            ...e,
            amount: currentAmount,
          };
        }
        return e;
      });
      return newAllList;
    });
  };

  const handleSubmit = async (e) => {
    try{
      e.preventDefault()
      await updateAllAmountOnBasket(basketId,allList)
      toast.success('Update Cart Complete')
      navigate('/cart/address')
    }catch(err){
      console.log(err)
      toast.error('Update Cart Failed')
    }
  }

  return (
    <div className="w-full min-h-[700px] p-10 bg-white relative">
      {total ? (
        <>
          <div className="flex flex-col gap-5 pb-60">
            <h1 className="text-xl underline">ตะกร้าของฉัน</h1>

            {allList.map((e) => {
              return (
                <CartComponent
                  key={e.id}
                  data={e.book}
                  amount={e.amount}
                  pricePerUnit={e.price}
                  handleAmount={handleAmount}
                  bookId={e.bookId}
                  setTotal={setTotal}
                />
              );
            })}
          </div>
          <div className="absolute bottom-5 left-2/4 transform -translate-x-1/2">
            <h1 className="text-center text-xl">Total Price : {total} Baht</h1>
            <div className="flex justify-center gap-10 mt-10">
              <Link to='/cart/address'>
              <Button className="bg-green-500 hover:bg-green-600"  onClick={handleSubmit}>
                Confirm Payment
              </Button>
              </Link>
              <Link to="/">
                <Button>Continue Shopping</Button>
              </Link>
              <Button className="bg-red-500">Clear My Cart</Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-xl underline">ตะกร้าของฉัน</h1>
          <div className="flex flex-col justify-center items-center h-screen gap-10">
            <Title>ยังไม่มีสินค้าในตะกร้าของคุณ</Title>
            <Link to="/">
              <Button className="text-xl" width="60">
                กลับไปหน้าแรก
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
