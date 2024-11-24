import { createContext } from "react";
import { SpecialtyPizza } from "../../types";

export const SpecialtyPizzaContext = createContext<
  SpecialtyPizza[] | undefined
>(undefined);
