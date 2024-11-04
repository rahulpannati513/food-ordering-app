import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestuarantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    const data = await fetch(
      `/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${resId}`
    );
    const json = await data.json();
    setRestInfo(json.data);
  };

  return restInfo;
};

export default useRestuarantMenu;
