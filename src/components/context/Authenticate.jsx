import React, { createContext, useState, useContext } from "react";

export const authenticateContext = createContext();

const Authenticate = (props) => {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <authenticateContext.Provider value={{ authenticate, setAuthenticate }}>
      {props.children}
    </authenticateContext.Provider>
  );
};

// Custom Hook
export const useAuthenticateContext = () => {
  const context = useContext(authenticateContext);
  if (!context) {
    throw new Error(
      "useAuthenticateContext must be used within an AuthenticateProvider"
    );
  }
  return context;
};

export default Authenticate;
