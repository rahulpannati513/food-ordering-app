import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Rahul Pannati",
}); //we will give information that it will hold

export default UserContext;
