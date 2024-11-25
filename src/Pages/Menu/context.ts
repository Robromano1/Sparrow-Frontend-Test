import { createContext /*useContext*/ } from "react";
import { SpecialtyPizza } from "../../types";

export const SpecialtyPizzaContext = createContext<
  SpecialtyPizza[] | undefined
>(undefined);

// export const useSpecialtyPizzaContext = () => {
//   const specialtyPizza = useContext(SpecialtyPizzaContext);

//   if (!specialtyPizza) {
//     throw new Error("Specialty Pizza is undefined");
//   }

//   return specialtyPizza;
// };
