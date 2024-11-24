import { FC } from "react";

// import { PizzaTopping } from "../../types";

interface ToppingProps {
  topping: string;
}
const Toppings: FC<ToppingProps> = ({ topping }) => {
  return (
    // <ul>
    //   {toppings?.map((topping) => (
    //     <li>{topping}</li>
    //   ))}
    // </ul>
    <ul>
      <li>
        <input type="checkbox" />
        {`Extra ${topping}`}
      </li>
    </ul>
  );
};

export default Toppings;
