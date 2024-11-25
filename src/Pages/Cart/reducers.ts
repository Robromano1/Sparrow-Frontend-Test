import { cartInitialState, InitialCartState } from "./cartContext";

enum ActionType {
  ADD_TO_CART = "ADD_TO_CART",
}

interface ActionPayload {
  pizzaName: string;
  extraToppings: string[];
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
      console.log(action.payload);
      return {
        ...state,
        pizzaName: action.payload.pizzaName,
        extraToppings: action.payload.extraToppings,
      };
    default:
      return state;
  }
};
