import React, { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, isOpen, setShowIndex }) => {
  const toggleAcordion = () => {
    setShowIndex();
  };
  return (
    <div className="my-8">
      <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-2 md:mx-auto p-4 bg-white rounded-lg shadow-lg">
        <div
          className="flex justify-between items-center"
          onClick={toggleAcordion}
        >
          <span className="font-bold text-lg text-gray-800">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <button>{isOpen ? "⬇️" : "⬆️"}</button>
        </div>
        {/* Accordion Body */}
        <h1>{isOpen && <ItemsList items={data?.itemCards} />}</h1>
      </div>
    </div>
  );
};

export default RestaurantCategory;
