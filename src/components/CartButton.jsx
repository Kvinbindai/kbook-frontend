import Button from "./Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../hooks/use-auth";
const CartButton = () => {
  const { authUser } = useAuth();


  return (
    <div className="flex-none ">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <span className="material-symbols-outlined">shopping_cart</span>
        </div>
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-58 bg-primary shadow"
        >
          <div className="card-body text-secondary">
            <div className="flex flex-col gap-3">
              <span className="font-bold text-xl">
                {authUser?.totalAmount} Items
              </span>
              <span className="text-xl">Subtotal: {authUser?.totalPrice}</span>
            </div>
            <div className="card-actions">
              <Link to="/cart">
                <Button className="w-48 bg-primary-500 hover:bg-primary-700">
                  View cart
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartButton;
