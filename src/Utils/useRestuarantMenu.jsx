import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestuarantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    const data = await fetch(
      "https://backend-genai-1.azurewebsites.net/api/swiggy/swiggy-proxy/restaurantsMenu?resId=" +
        resId
    );
    const json = await data.json();
    setRestInfo(json.data);
  };

  return restInfo;
};

export default useRestuarantMenu;
