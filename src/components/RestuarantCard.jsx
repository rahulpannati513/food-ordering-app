import React from "react";
import { CDN_URL } from "../Utils/constants";

const RestuarantCard = (props) => {
  const { cloudinaryImageId, name, areaName, avgRating, costForTwo } =
    props?.resData;

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className="res_image">
        <img
          className="w-full h-48 object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className="res_details p-4 bg-white">
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <h4 className="text-sm text-gray-600">{areaName}</h4>
        <h4 className="text-sm text-gray-600">Rating: {avgRating}</h4>
        <h4 className="text-sm text-gray-600">Cost for Two: {costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestuarantCard;
