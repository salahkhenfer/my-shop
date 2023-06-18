import React from "react";
export const initialstate = {
  basket: [],
  orders: [],
  user: null,
};
const AppRedeucer = (state = initialstate, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BESKAT":
      let oldArray = [...state.basket];
      const index = state.basket?.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      oldArray.splice(index, 1);
      return {
        ...state,
        basket: oldArray,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default AppRedeucer;
