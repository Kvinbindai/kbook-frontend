import Button from "./Button";

const CardList = () => {
  return (
    <div className="card min-w-64 bg-base-100 shadow-xl p-5">
      <figure>
        <img
        className="h-80"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">GOOD VIBE , GOOD LIFE</h2>
        <div className="flex justify-between items-center">
          <div>255.00 Baht</div>
          <Button>+</Button>
        </div>
      </div>
    </div>
  );
};

export default CardList;
