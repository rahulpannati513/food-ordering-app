import { useState, useEffect } from "react";

const useRestuarantInfo = () => {
  const [listofRestuarants, setListOfRestuarants] = useState([]);
  const [filteredRestuarant, setFilteredRestuarant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://backend-genai-1.azurewebsites.net/api/swiggy/swiggy-proxy/restaurants"
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
