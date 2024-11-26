import { createContext, useContext /*useReducer*/ } from "react";

import { HiringFrontendTakeHomePizzaType } from "../../types";

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

export const useCartContext = () => {
  return useContext(CartContext);
};
