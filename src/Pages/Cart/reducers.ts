import { cartInitialState, InitialCartState } from "./cartContext";

enum ActionType {
  ADD_TO_CART = "ADD_TO_CART",
  CHECKOUT = "CHECKOUT",
  CANCEL = "CANCEL",
}

interface ActionPayload {
  pizzaName: string;
  description: string;
  extraToppings: string[];
  excludedToppings: string[];
  size: string;
  checkout: boolean;
}

// interface CheckoutPayload {
//   checkout: boolean;
// }

interface Action {
  type: ActionType;
  payload: ActionPayload;
}

// interface CheckoutAction {
//   type: ActionType;
//   payload: CheckoutPayload;
// }

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
        description: action.payload.description,
        extraToppings: action.payload.extraToppings,
        excludedToppings: action.payload.excludedToppings,
        size: action.payload.size,
        checkout: true,
      };
    case "CANCEL":
      return {
        ...state,
        checkout: false,
      };
    default:
      return state;
  }
};
