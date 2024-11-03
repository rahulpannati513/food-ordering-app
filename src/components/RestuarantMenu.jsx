import React, { useState } from "react";
import useRestuarantMenu from "../Utils/useRestuarantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestuarantCategory from "./RestuarantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestuarantMenu(resId);
  const [showindex, setShowIndex] = useState(null);

  if (restInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards?.[2]?.card?.card?.info;

  const categories =
    restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="">
      <div className="text-center my-10 text-2xl">
        <h1 className="font-bold">{name}</h1>
        <p className="font-bold text-base my-1">
          {cuisines.join(", ")}-{costForTwoMessage}
        </p>
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">Restaurant Menu</h1>
      {categories.map((category, index) => (
        <RestuarantCategory
          key={index}
          data={category.card?.card}
          isOpen={index === showindex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
