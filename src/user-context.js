import React, { createContext, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = (props) => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const login = () => {
    setIsLoggedin(true);
  };

  const logout = () => {
    setIsLoggedin(false);
  };

  return (
    <userContext.Provider value={{ isLoggedin, login, logout }}>
      {props.children}
    </userContext.Provider>
  );
};
