import { cartInitialState, InitialCartState } from "./cartContext";

enum ActionType {
  ADD_TO_CART = "ADD_TO_CART",
  CHECKOUT = "CHECKOUT",
}

interface ActionPayload {
  pizzaName: string;
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
        extraToppings: action.payload.extraToppings,
        excludedToppings: action.payload.excludedToppings,
        size: action.payload.size,
        checkout: true,
      };
    // case "CHECKOUT":
    //   return {
    //     ...state,
    //     checkout: action.payload.checkout,
    //   };
    default:
      return state;
  }
};
