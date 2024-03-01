import Title from "../components/Title";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartComponent from "../components/CartComponent";
import useAuth from "../hooks/use-auth";
import { updateAllAmountOnBasket, clearAllBasketItem } from "../api/cart";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CartPage = () => {
  const navigate = useNavigate();
  const {
    authUser: { allItem, totalPrice, basketId },
    updateBasketWhenSuccess,
    refresh,
    setRefresh,
    fetchUser
  } = useAuth();

  const [total, setTotal] = useState(totalPrice);
  const [allList, setAllList] = useState(allItem);

  useEffect(()=>{
    fetchUser()
  },[refresh])


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
    try {
      e.preventDefault();
      const result = await updateAllAmountOnBasket(basketId, allList);
      await updateBasketWhenSuccess(result.data.data);
      toast.success("Update Cart Complete");
      setRefresh(!refresh)
      navigate("/cart/address");
    } catch (err) {
      console.log(err);
      toast.error("Update Cart Failed");
    }
  };

  const clearMyCart = async (e) => {
    try {
      e.preventDefault();
      await clearAllBasketItem(basketId)
      toast.success('Clear All Items Success')
      document.getElementById('my_modal_2').close()
      setRefresh(!refresh)
      navigate('/')
    } catch (err) {
      console.log(err);
      toast.error("Error To Clear My Cart");
    }
  };

  return (
    <div className="w-full min-h-[700px] p-10 relative bg-secondary">
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
              <Link to="/cart/address">
                <Button
                  className="bg-green-500 hover:bg-green-600 text-secondary"
                  onClick={handleSubmit}
                >
                  Confirm Payment
                </Button>
              </Link>
              <Link to="/">
                <Button>Continue Shopping</Button>
              </Link>
              <Button
                className="bg-red-500"
                type="button"
                onClick={()=>document.getElementById('my_modal_2').showModal()}
              >
                Clear My Cart
              </Button>
            </div>
          </div>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box flex flex-col gap-5 items-center">
              <h3 className="font-bold text-lg">Are you Sure To Clear Your Cart ?</h3>
              <div className="w-60 flex justify-between">
              <Button className="bg-red-500 hover:bg-red-600" onClick={clearMyCart}>CLEAR</Button>
              <Button onClick={()=>document.getElementById('my_modal_2').close()} >CANCEL</Button>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </>
      ) : (
        <>
          <h1 className="text-xl underline">ตะกร้าของฉัน</h1>
          <div className="flex flex-col justify-center items-center h-screen gap-10">
            <Title className="bg-transparent" >ยังไม่มีสินค้าในตะกร้าของคุณ</Title>
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
