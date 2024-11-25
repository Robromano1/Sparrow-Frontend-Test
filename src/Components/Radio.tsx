import { FC, ChangeEventHandler } from "react";

interface SelectedToppings {
  [toppingName: string]: string | undefined;
}

interface PizzaProps {
  topping: string;
  type: string;
  id: number;
  selected: SelectedToppings;
  quantity: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const Radio: FC<PizzaProps> = ({
  topping,
  id,
  type,
  selected,
  quantity,
  onChangeHandler,
}) => {
  return (
    <>
      <input
        type="radio"
        id={`${topping}-${id}-${type}`}
        name={`${topping}-${type}`}
        role="radio"
        className="peer hidden"
        value={topping}
        onChange={onChangeHandler}
        checked={selected && selected[topping] === type}
      />
      <label
        htmlFor={`${topping}-${id}-${type}`}
        className="inline-flex items-center border border-gray-300 rounded-l-lg hover:cursor-pointer hover:border hover:border-black p-2 w-20 hover:shadow-xl px-4 peer-checked:border peer-checked:border-black"
      >
        <div>{quantity}</div>
      </label>
    </>
  );
};

export default Radio;
