import React from "react";
import { CDN_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch(); //we have useDispatch this is a function

  const handleAddItem = (c) => {
    dispatch(addItem(c));
  };

  return (
    <div>
      {items?.map((c) => (
        <div
          key={c?.card?.info?.id}
          className="flex p-2 m-2 border-gray-200 border-b-2"
        >
          <div className="w-9/12">
            <div>
              <span className="font-bold">{c?.card?.info?.name}</span>
              <span>
                {" "}
                ₹
                {c?.card?.info?.price / 100
                  ? c?.card?.info?.price / 100
                  : c?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{c?.card?.info?.description}</p>
          </div>
          <div className="3/12 p-4">
            <div className="absolute">
              <button
                onClick={() => handleAddItem(c)} // Pass the specific item
                className="p-2 bg-black text-white shadow-lg rounded-lg mx-8 m-auto"
              >
                Add+
              </button>
            </div>
            <img
              className="h-32 w-32 object-cover"
              src={CDN_URL + c?.card?.info?.imageId}
              alt={c?.card?.info?.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
