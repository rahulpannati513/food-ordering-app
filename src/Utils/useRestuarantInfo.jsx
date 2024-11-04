import { useState, useEffect } from "react";

const useRestuarantInfo = () => {
  const [listofRestuarants, setListOfRestuarants] = useState([]);
  const [filteredRestuarant, setFilteredRestuarant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "/dapi/restaurants/list/v5?lat=17.3684658&lng=78.53159409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    );
    setFilteredRestuarant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    );
  };

  return { listofRestuarants, filteredRestuarant, setFilteredRestuarant };
};

export default useRestuarantInfo;
