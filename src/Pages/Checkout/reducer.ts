enum ActionType {
  CHECKOUT = "CHECKOUT",
}

interface CheckoutPayload {
  checkout: boolean;
}

interface CheckoutAction {
  type: ActionType;
  payload: CheckoutPayload;
}

export const cartReducer = (
  state = cartInitialState,
  action: CheckoutAction
): InitialCartState => {
  switch (action.type) {
    case "CHECKOUT":
      return {
        ...state,
        checkout: action.payload.checkout,
      };
    default:
      return state;
  }
};
