import { FC, ChangeEventHandler } from "react";

interface SelectedToppings {
  [toppingName: string]: string | undefined;
}

interface PizzaProps {
  checked: boolean;
  className: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  selected?: SelectedToppings;
  name?: string;
  type?: string;
  id?: number;
  quantity?: string;
  additionalText?: string;
}

const Radio: FC<PizzaProps> = ({
  name,
  id,
  type,
  quantity,
  checked,
  className,
  additionalText,
  onChangeHandler,
}) => {
  return (
    <>
      <input
        type="radio"
        id={`${name}-${id}-${type}`}
        name={`${name}-${type}`}
        role="radio"
        className={`peer/${type} hidden`}
        value={name}
        onChange={onChangeHandler}
        checked={checked}
      />
      <label htmlFor={`${name}-${id}-${type}`} className={className}>
        <span>{quantity}</span>
        {additionalText && <p className="text-xs">{additionalText}</p>}
      </label>
    </>
  );
};

export default Radio;
