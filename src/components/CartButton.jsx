import Button from "./Button";
import { Link } from "react-router-dom";
const CartButton = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-58 bg-base-100 shadow"
      >
        <div className="card-body">
          <div className="flex flex-col gap-3">
            <span className="font-bold text-xl">8 Items</span>
            <span className="text-xl">Subtotal: $999</span>
          </div>
          <div className="card-actions">
            <Link to="/cart">
              <Button className="w-48 bg-green-500 hover:bg-green-700">
                View cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
