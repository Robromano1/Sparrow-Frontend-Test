import { CHECKOUT } from "../../Constants";
import { useCartContext } from "../Cart/cartContext";
import CheckoutForm from "./CheckoutForm";

const CheckoutMain = () => {
  const { state } = useCartContext();
  const { pizzaName, extraToppings, excludedToppings, size, description } =
    state;

  return (
    <>
      <div className="flex flex-col">
        <h1 className="flex justify-center my-8 text-2xl font-bold">
          {CHECKOUT.CHECKOUT}
        </h1>
        <div className="flex flex-col items-left mx-10 my-12">
          <h2 className="text-lg font-bold mb-4">Order Info: </h2>
          <span>{pizzaName}</span>
          <span className="text-sm text-gray-600 mb-4">{description}</span>
          <span className="text-md font-bold">Size:</span>
          <span>{size}</span>
          {extraToppings.length > 0 && (
            <h3 className="text-md font-bold mt-4">Extra Toppings: </h3>
          )}
          {extraToppings.length > 0 &&
            extraToppings.map((topping, index) => (
              <ul key={`${topping}-${index}`}>
                <li>{`Extra ${topping}`}</li>
              </ul>
            ))}
          {excludedToppings.length > 0 && (
            <h3 className="text-md font-bold mt-4">Exluded Toppings: </h3>
          )}
          {excludedToppings.length > 0 &&
            excludedToppings.map((topping, index) => (
              <ul key={`${topping}-${index}`}>
                <li>{`No ${topping}`}</li>
              </ul>
            ))}
        </div>
        <CheckoutForm />
      </div>
    </>
  );
};

export default CheckoutMain;
