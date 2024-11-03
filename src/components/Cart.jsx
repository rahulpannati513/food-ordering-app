import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearItem } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };

  console.log(cartItems);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-700">
            Your cart is empty
          </h1>
          <p className="text-gray-500 mb-4">
            Add some items to your cart to get started!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        onClick={handleClearCart}
        className="text-center rounded-md bg-red-700 text-white p-2"
      >
        Clear Cart
      </button>
      <div>
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
