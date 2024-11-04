import React, { useState } from "react";
import RestuarantCard from "/src/components/RestuarantCard";
import Shimmer from "./Shimmer";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import useRestuarantInfo from "../Utils/useRestuarantInfo";

const Body = () => {
  const { listofRestuarants, filteredRestuarant, setFilteredRestuarant } =
    useRestuarantInfo();
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-2xl text-red-700 ">
        Loooks like you are offline please check you'r internet connection
      </h1>
    );

  if (listofRestuarants?.length === 0) return <Shimmer />;

  return (
    <div>
      <div className="body p-4">
        <div className="flex items-center mb-4">
          <div className="search flex items-center space-x-2">
            <input
              id="search"
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const filteredRestaurants =
                    listofRestuarants?.restaurants?.filter((res) =>
                      res?.info?.name
                        ?.toLowerCase()
                        .includes(searchText.toLowerCase())
                    );
                  setFilteredRestuarant({ restaurants: filteredRestaurants });
                }
              }}
              className="bg-gray-100 border border-gray-300 rounded-md p-2 w-64 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Search..."
            />
            <button
              className="bg-orange-500 text-white rounded-md py-2 px-4 hover:bg-orange-600 transition-colors"
              onClick={() => {
                const filteredRestaurants =
                  listofRestuarants?.restaurants?.filter((res) =>
                    res?.info?.name
                      ?.toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                setFilteredRestuarant({ restaurants: filteredRestaurants });
              }}
            >
              Search
            </button>
          </div>
          <button
            className="bg-orange-500 text-white rounded-md py-2 px-4 ml-4 hover:bg-orange-600 transition-colors"
            onClick={() => {
              const filteredList = listofRestuarants?.restaurants?.filter(
                (res) => res?.info?.avgRating > 4
              );
              setFilteredRestuarant({ restaurants: filteredList });
            }}
          >
            Top Rated
          </button>
        </div>

        <div className="flex flex-wrap justify-center">
          {filteredRestuarant?.restaurants?.map((restaurant) => {
            const { info } = restaurant;
            return (
              <div key={info?.id} className="w-full sm:w-1/2 md:w-1/4 p-2">
                <Link key={info?.id} to={"/restuarants/" + info?.id}>
                  <RestuarantCard resData={info} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Body;
