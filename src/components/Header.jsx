import React, { useContext, useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import resData from "../Utils/resData";
import { userContext2 } from "../Utils/useContext2";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlined = useOnlineStatus();
  const data = useContext(UserContext);
  const data2 = useContext(userContext2);
  console.log(data2);

  const cartItems = useSelector((store) => store.cart.items.length);
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <img className="h-12" src={LOGO_URL} alt="food-delivery-logo" />
        </Link>
        <Link to="/">
          <h1 className="text-xl font-bold text-orange-600 ml-2">
            Foodie Hub!
          </h1>{" "}
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-6 list-none text-gray-800">
          <li className="text-xl">Online Status :{onlined ? " 🟢" : " 💤"}</li>
          <li>
            <button
              onClick={() => {
                setLogin((prev) => (prev === "Login" ? "Logout" : "Login"));
              }}
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
            >
              {login}
            </button>
          </li>
          <Link to="/">Home</Link>
          <Link to="/about"> About Us</Link>
          <Link to="/cart">
            <li>🛒 ({cartItems} items)</li>
          </Link>
          <li className="font-bold">{data.loggedInUser}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
