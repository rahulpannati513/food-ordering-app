import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestuarantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestInfo(json.data);
  };

  return restInfo;
};

export default useRestuarantMenu;
