import { createContext, useContext /*useReducer*/ } from "react";
//import { cartReducer } from "./reducers";

import {
  HiringFrontendTakeHomePizzaType,
  //HiringFrontendTakeHomePizzaSize,
} from "../../types";

export interface InitialCartState {
  id: string;
  pizzaName: string;
  description: string;
  extraToppings: string[];
  excludedToppings: string[];
  size: string;
  checkout: boolean;
  quantity: number;
  totalPrice: number;
  type: HiringFrontendTakeHomePizzaType;
  // price: number;
}

export const cartInitialState: InitialCartState = {
  id: "",
  pizzaName: "",
  description: "",
  extraToppings: [],
  excludedToppings: [],
  size: "",
  checkout: false,
  quantity: 1,
  totalPrice: 0,
  type: HiringFrontendTakeHomePizzaType.Specialty,
};

export enum ActionType {
  ADD_TO_CART = "ADD_TO_CART",
  CANCEL = "CANCEL",
  RESET_STATE = "RESET_STATE",
}

interface Action {
  type: ActionType;
  payload: InitialCartState;
}

export const CartContext = createContext<{
  state: InitialCartState;
  dispatch: React.Dispatch<Action>;
}>({ state: cartInitialState, dispatch: () => null });

// const mainReducer = ({ cart }, action) => ({
//   cart: cartReducer(cart, action);
// })

// export const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "addToCart":
//       console.log(action);
//       return { ...state };
//     default:
//       throw new Error();
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, cartInitialState);

//   return (
//     <CartContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

export const useCartContext = () => {
  return useContext(CartContext);
};
