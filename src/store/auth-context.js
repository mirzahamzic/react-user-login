import React, { useState, useEffect } from "react";

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const storedUser = localStorage.getItem("isLoggedIn");
    if (storedUser === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logoutHandler, loginHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
