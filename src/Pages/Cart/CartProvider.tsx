import { useReducer, ReactNode } from "react";

import { cartInitialState } from "./cartContext";
import { cartReducer } from "./reducers";
import { CartContext } from "./cartContext";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
