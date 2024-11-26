import { cartInitialState, InitialCartState } from "./cartContext";
import { HiringFrontendTakeHomePizzaType } from "../../types";

enum ActionType {
  ADD_TO_CART = "ADD_TO_CART",
  CHECKOUT = "CHECKOUT",
  CANCEL = "CANCEL",
  RESET_STATE = "RESET_STATE",
}

interface ActionPayload {
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

interface Action {
  type: ActionType;
  payload: ActionPayload;
}

export const cartReducer = (
  state = cartInitialState,
  action: Action
): InitialCartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        id: action.payload.id,
        pizzaName: action.payload.pizzaName,
        description: action.payload.description,
        extraToppings: action.payload.extraToppings,
        excludedToppings: action.payload.excludedToppings,
        size: action.payload.size,
        checkout: action.payload.checkout,
        quantity: action.payload.quantity,
        totalPrice: action.payload.totalPrice,
        type: action.payload.type,
      };
    case "CANCEL":
      return {
        ...state,
        checkout: false,
      };
    case "RESET_STATE":
      return cartInitialState;
    default:
      return state;
  }
};
