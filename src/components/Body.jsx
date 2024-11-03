import React, { useEffect, useState } from "react";
import RestuarantCard from "/src/components/RestuarantCard";
import Shimmer from "./Shimmer";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [listofRestuarants, setListOfRestuarants] = useState([]);
  const [filteredRestuarant, setFilteredRestuarant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3684658&lng=78.53159409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    );
    setFilteredRestuarant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    );
  };

  if (onlineStatus === false)
    return (
      <h1 className="text-2xl text-red-700 ">
        Loooks like you are offline please check you'r internet connection
      </h1>
    );

  if (listofRestuarants?.length === 0) return <Shimmer />;

  return (
    <div>
      {" "}
      <div className="body p-4">
        <div className="flex items-center mb-4">
          <div className="search flex items-center">
            <input
              id="search"
              type="text"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              className="bg-gray-100 border border-gray-300 rounded-l-md p-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Search..."
            />
            <button
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
            className="bg-blue-500 text-white rounded-md py-2 px-4 ml-4 hover:bg-blue-600 transition-colors"
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
