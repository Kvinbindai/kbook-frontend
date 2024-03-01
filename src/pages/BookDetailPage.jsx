import { useState } from "react";
import Button from "../components/Button";
import useCart from "../hooks/use-cart";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/use-auth";


const BookDetailPage = () => {
  const navigate = useNavigate()
  const { bookId } = useParams();
  const [bookData, setBookData] = useState(null);
  const [currentAmount ,setCurrentAmount] = useState(1)
  const { getOneBookToDetail , addBasketItemToCart } = useCart();
  const { authUser} = useAuth()
  const getData = async () => {
    const result = await getOneBookToDetail(+bookId);
    setBookData(result);
  };

  const addCount = () => {
    setCurrentAmount(currentAmount+1)
  }
  const decreaseCount = () => {
    if(currentAmount <= 1){
      setCurrentAmount(1)
    }else{
      setCurrentAmount(currentAmount-1)
    }
  }

  const addToCart = async (e) => {
    try{
      e.preventDefault()
      if(currentAmount > bookData?.amount){
        toast.error('Cant Add more than Stock')
        return
      }
      const data = { basketId : authUser.basketId , bookId : bookData.id , amount : currentAmount }
     await addBasketItemToCart(data)
     toast.success('Add to Cart Success')
     navigate('/books')
     window.location.reload();
    }catch(err){
      console.log(err)
      toast.error('Failed To Add In Cart')
    }
  }


  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="py-12 px-24 flex flex-col gap-7 w-full bg-secondary">
      <div className="flex justify-between items-center ">
        <div className="text-xl flex gap-10 items-center">
          <span>BOOK LEFT :</span>
          <span className="p-2 bg-primary-500 text-black rounded-lg w-16 h-10 flex justify-center items-center bg-primary">
            {bookData?.amount}
          </span>
        </div>
        <div className="flex justify-between gap-10 mr-24">
          <Button onClick={addToCart} >ADD TO CART</Button>
          <Button onClick={()=>navigate('/')}>BACK</Button>
        </div>
      </div>
      <div className="flex justify-between ">
        <div>
          <img
            src={
              bookData?.bookImage ||
              "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            }
            className="h-96 w-80"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-xl flex flex-col gap-5">
            <div>Book Title (EN) :</div>
            <div className="px-5 bg-primary rounded-lg py-2">{bookData?.enTitle || "-"}</div>
          </div>
          <div className="text-xl flex flex-col gap-5">
            <div>Book Title (TH) :</div>
            <div className="px-5 bg-primary rounded-lg py-2">{bookData?.thTitle || "-"}</div>
          </div>
          <div className="text-xl flex flex-col gap-5">
            <div>Category :</div>
            <div className="px-5 bg-primary rounded-lg py-2">
              {bookData?.categoryEn || bookData?.categoryTh}
            </div>
          </div>
          <div className="text-xl grid grid-cols-3 gap-10 ">
            <div >
              <div>Amount :</div>
              <div className="flex justify-between text-center items-center bg-primary rounded-lg mt-5">
                <span className="material-symbols-outlined active:scale-110 cursor-pointer"  onClick={decreaseCount}>
                  do_not_disturb_on
                </span>
                <span className="text-primaryryry" >{currentAmount}</span>
                <span className="material-symbols-outlined active:scale-110 cursor-pointer" onClick={addCount}>add_circle</span>
              </div>
            </div>
            <div>
              <div>Price :</div>
              <div className="text-center bg-primary  rounded-lg mt-5">
                {bookData?.price}
              </div>
            </div>
            <div className="flex items-end">
              <div>Baht</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xl flex flex-col gap-5 ">
        <div className="flex flex-col gap-5">
          <div>Description (EN) :</div>
          <div className="px-5 bg-primary rounded-lg py-2">{bookData?.enDescription || "-"}</div>
        </div>
        <div className="flex flex-col gap-5">
          <div>Description (TH) :</div>
          <div className="px-5 bg-primary rounded-lg py-2">{bookData?.thDescription || "-"}</div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
