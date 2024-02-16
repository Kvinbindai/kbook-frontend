import Button from "../components/Button";

const BookDetailPage = () => {
  return (
    <div className="py-12 px-24 flex flex-col gap-7 w-full bg-white text-black">
      <div className="flex justify-between items-center ">
        <div className="text-xl flex gap-10 items-center">
          <span>BOOK LEFT :</span>
          <span className="p-2 bg-gray-500 rounded-lg w-10 h-10 flex justify-center items-center">
            {" "}
            1{" "}
          </span>
        </div>
        <div className="flex justify-between gap-10 mr-24">
          <Button>ADD TO CART</Button>
          <Button>BACK</Button>
        </div>
      </div>
      <div className="flex justify-between ">
        <div>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            className="h-96 w-80"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-xl flex flex-col gap-5">
            <div>Book Title (EN) :</div>
            <div className="px-5">Good Vibe , Good Life</div>
          </div>
          <div className="text-xl flex flex-col gap-5">
            <div>Book Title (TH) :</div>
            <div className="px-5">เทสดี , เทสไลฟ์</div>
          </div>
          <div className="text-xl flex flex-col gap-5">
            <div>Category :</div>
            <div className="px-5">SELF-IMPROVEMENT</div>
          </div>
          <div className="text-xl grid grid-cols-3 gap-10">
            <div>
              <div>Amount :</div>
              <div className="flex justify-between text-center items-center bg-gray-500 rounded-lg mt-5">
                <span className="material-symbols-outlined">
                  do_not_disturb_on
                </span>
                1<span className="material-symbols-outlined">add_circle</span>
              </div>
            </div>
            <div>
              <div>Price :</div>
              <div className="text-center  bg-gray-500 rounded-lg mt-5">
                255
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
          <div className="px-5">Good Vibe , Good Life</div>
        </div>
        <div className="flex flex-col gap-5">
          <div>Description (TH) :</div>
          <div className="px-5">Good Vibe , Good Life</div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
