import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { initialstate } from "./AppRedeucer";
import AppRedeucer from "./AppRedeucer";

const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppRedeucer, initialstate);
  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        basket: state.basket,
        dispatch: dispatch,
        orders: state.orders,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
export const useAuth = () => {
  return useContext(GlobalContext);
};
