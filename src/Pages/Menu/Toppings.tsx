import { ChangeEventHandler, FC } from "react";

import Radio from "../../Components/Radio";
// import { PizzaTopping } from "../../types";

interface SelectedToppings {
  [toppingName: string]: string | undefined;
}

interface PizzaProps {
  topping: string;
  type: string;
  id: string;
  index: number;
  selected: SelectedToppings;
  handleExtraToppings: ChangeEventHandler<HTMLInputElement>;
  handleExcludedToppings: ChangeEventHandler<HTMLInputElement>;
  handleNormalToppings: ChangeEventHandler<HTMLInputElement>;
}
const Toppings: FC<PizzaProps> = ({
  topping,
  type,
  id,
  index,
  selected,
  handleExcludedToppings,
  handleExtraToppings,
  handleNormalToppings,
}) => {
  return (
    // <ul>
    //   {toppings?.map((topping) => (
    //     <li>{topping}</li>
    //   ))}
    // </ul>
    // <ul>
    //   <li>
    //     <input type="checkbox" />
    //     {`Extra ${topping}`}
    //   </li>
    // </ul>

    // <h4 className="shadow-md rounded-lg hover:cursor-pointer hover:border hover:border-black p-2 w-40 mr-4 hover:shadow-xl  px-4">
    //   {`${type} ${topping}`}
    // </h4>
    <li key={index}>
      {topping}
      <div className="flex mr-4 my-4">
        {/* <input
          type="radio"
          id={`${topping}-${index}-none`}
          name={`${topping}-none`}
          role="radio"
          className="peer/none hidden"
          value={topping}
          onChange={handleExcludedToppings}
          checked={selected && selected[topping] === "none"}
        />
        <label
          htmlFor={`${topping}-${index}-none`}
          className="inline-flex items-center border border-gray-300 rounded-l-lg hover:cursor-pointer hover:border hover:border-black p-2 w-20 hover:shadow-xl px-4 peer-checked/none:border peer-checked/none:border-black peer-checked/none:bg-black peer-checked/none:text-white"
        >
          <div>None</div>
        </label>
        <input
          type="radio"
          id={`${topping}-${index}-normal`}
          name={`${topping}-normal`}
          role="radio"
          className="peer/normal hidden"
          value={topping}
          onChange={handleNormalToppings}
          checked={
            selected && (selected[topping] === "normal" || !selected[topping])
          }
        />
        <label
          htmlFor={`${topping}-${index}-normal`}
          className="inline-flex items-center border border-gray-300 hover:cursor-pointer hover:border hover:border-black p-2 w-20 hover:shadow-xl px-4 peer-checked/normal:border peer-checked/normal:border-black default:checked:border-black peer-checked/normal:bg-black peer-checked/normal:text-white"
        >
          <div>Normal</div>
        </label>
        <input
          type="radio"
          id={`${topping}-${index}-extra`}
          name={`${topping}-extra`}
          role="radio"
          className="peer/extra hidden"
          value={topping}
          onChange={handleExtraToppings}
          checked={selected && selected[topping] === "extra"}
        />
        <label
          htmlFor={`${topping}-${index}-extra`}
          className="inline-flex items-center border border-gray-300 rounded-r-lg hover:cursor-pointer hover:border hover:border-black p-2 w-20 hover:shadow-xl px-4 peer-checked/extra:border peer-checked/extra:border-black peer-checked/extra:bg-black peer-checked/extra:text-white"
        >
          <div>Extra</div>
        </label> */}
        <Radio
          name={topping}
          id={index}
          selected={selected}
          quantity="None"
          type="none"
          onChangeHandler={handleExcludedToppings}
          checked={selected && selected[topping] === "none"}
          className="inline-flex items-center border border-gray-300 rounded-l-lg hover:cursor-pointer hover:border hover:border-black p-2 w-20 hover:shadow-xl px-4 peer-checked/none:border peer-checked/none:border-black peer-checked/none:bg-black peer-checked/none:text-white"
        />
        <Radio
          name={topping}
          id={index}
          selected={selected}
          quantity="Normal"
          type="normal"
          checked={
            selected && (selected[topping] === "normal" || !selected[topping])
          }
          onChangeHandler={handleNormalToppings}
          className="inline-flex items-center border border-gray-300 hover:cursor-pointer hover:border hover:border-black p-2 w-20 hover:shadow-xl px-4 peer-checked/normal:border peer-checked/normal:border-black default:checked:border-black peer-checked/normal:bg-black peer-checked/normal:text-white"
        />
        <Radio
          name={topping}
          id={index}
          selected={selected}
          quantity="Extra"
          type="extra"
          checked={selected && selected[topping] === "extra"}
          onChangeHandler={handleExtraToppings}
          className="inline-flex items-center border border-gray-300 rounded-r-lg hover:cursor-pointer hover:border hover:border-black p-2 w-20 hover:shadow-xl px-4 peer-checked/extra:border peer-checked/extra:border-black peer-checked/extra:bg-black peer-checked/extra:text-white"
        />
      </div>
    </li>
  );
};

export default Toppings;
