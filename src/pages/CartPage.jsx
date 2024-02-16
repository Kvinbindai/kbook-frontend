import Title from "../components/Title";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartComponent from "../components/CartComponent";

const CartPage = () => {
  const [isData, setIsData] = useState(true);
  return (
    <div className="w-full  p-10 bg-white">
      {isData ? (
        <>
          <div className="flex flex-col gap-5">
            <h1 className="text-xl underline">ตะกร้าของฉัน</h1>
            <CartComponent />
            <CartComponent />
            <CartComponent />
            <CartComponent />
          </div>
          <h1 className="text-center text-xl">Total Price : 510 Baht</h1>
          <div className="flex justify-center gap-10 mt-10">
            <Button className="bg-green-500">Confirm Payment</Button>
            <Link to='/'>
              <Button>Continue Shopping</Button>
            </Link>
            <Button className="bg-red-500">Clear My Cart</Button>
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
