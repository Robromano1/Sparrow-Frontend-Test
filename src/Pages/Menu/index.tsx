import { useState, useEffect, useCallback } from "react";

import MenuItems from "./MenuItems";
import MenuHeader from "./MenuHeader";
import Modal from "../../Components/Modal";
import Toppings from "./Toppings";
import Button from "../../Components/Button";
import Radio from "../../Components/Radio";
import { useCustomFetch } from "../../Hooks/CustomFetch";
import { MENU_OPTIONS, SIZE_OPTIONS } from "../../Constants";
import { SpecialtyPizza } from "../../types";
import { SpecialtyPizzaContext } from "./context";
import { useCartContext } from "../Cart/cartContext";
import { ActionType } from "../Cart/cartContext";
import Sidebar from "../../Components/Sidebar";
import CheckoutMain from "../Checkout/CheckoutMain";
import { HiringFrontendTakeHomePizzaType } from "../../types";

interface SelectedToppings {
  [toppingName: string]: string | undefined;
}

const Menu = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseUrl}/specialty-pizzas`;
  const { pizzaFetch, data, isLoading } = useCustomFetch();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState<SpecialtyPizza | null>(
    null
  );
  const [extraToppings, setExtraToppings] = useState<string[]>([]);
  const [excludedToppings, setExcludedToppings] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<SelectedToppings>(
    {}
  );
  const [pizzaSize, setPizzaSize] = useState("");

  const { specialtyPizzas } = data;
  const { state, dispatch } = useCartContext();

  useEffect(() => {
    pizzaFetch(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedToppings({});
    setExcludedToppings([]);
    setPizzaSize("");
  };

  const handleExtraToppings = (e: React.ChangeEvent<HTMLInputElement>) => {
    const topping = e.target.value;

    setSelectedToppings({ ...selectedToppings, [topping]: "extra" });
    setExtraToppings([...extraToppings, topping]);
  };

  const handleExcludedToppings = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("HANDLING EXCLUDED TOPPINGS");
    const topping = e.target.value;
    setSelectedToppings({ ...selectedToppings, [topping]: "none" });
    setExcludedToppings([...excludedToppings, topping]);
  };

  const handleNormalToppings = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("HANDLING NORMAL TOPPINGS");
    const topping = e.target.value;
    setSelectedToppings({ ...selectedToppings, [topping]: "normal" });
  };

  const handlePizzaSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    setPizzaSize(e.target.value);
  };

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    pizza: SpecialtyPizza
  ) => {
    console.log("ADDING TO CART");
    console.log(e.target);
    setModalOpen(false);
    dispatch({
      type: ActionType.ADD_TO_CART,
      payload: {
        id: pizza.id,
        pizzaName: pizza.name,
        description: pizza.description,
        extraToppings,
        excludedToppings,
        size: pizzaSize,
        checkout: true,
        quantity: 1,
        totalPrice: 20,
        type: HiringFrontendTakeHomePizzaType.Specialty,
      },
    });
  };

  useEffect(() => {
    if (state.checkout) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [state]);

  return (
    <>
      <div className="my-32 px-36 container mx-auto">
        <MenuHeader />
        <div className="flex flex-col">
          {!isLoading && (
            <SpecialtyPizzaContext.Provider value={specialtyPizzas}>
              <MenuItems
                handleOpenModal={handleOpenModal}
                setSelectedPizza={setSelectedPizza}
              />
            </SpecialtyPizzaContext.Provider>
          )}
        </div>
      </div>
      {selectedPizza && (
        <Modal isOpen={modalOpen} onClose={handleCloseModal}>
          <div className="flex flex-col flex-1 pl-4">
            <h2 className="text-xl font-bold">{selectedPizza.name}</h2>
            <p className="text-md text-gray-500">{selectedPizza.description}</p>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div>
              <h3 className="font-bold mb-4">{MENU_OPTIONS.SIZE}</h3>
              <div className="flex">
                <Radio
                  quantity={SIZE_OPTIONS.SMALL}
                  className="flex items-center justify-between hover:cursor-pointer hover:border hover:border-black p-2 w-40 peer-checked/small:border peer-checked/small:border-black peer-checked/small:bg-black peer-checked/small:text-white shadow-md rounded-lg px-4 mr-4"
                  additionalText={`$${selectedPizza.price.small}`}
                  onChangeHandler={handlePizzaSize}
                  checked={pizzaSize === "small"}
                  type="small"
                  name="small"
                />
                <Radio
                  quantity={SIZE_OPTIONS.MEDIUM}
                  className="flex items-center justify-between hover:cursor-pointer hover:border hover:border-black p-2 w-40 peer-checked/medium:border peer-checked/medium:border-black peer-checked/medium:bg-black peer-checked/medium:text-white shadow-md rounded-lg px-4 mr-4"
                  additionalText={`$${selectedPizza.price.medium}`}
                  onChangeHandler={handlePizzaSize}
                  checked={pizzaSize === "medium"}
                  type="medium"
                  name="medium"
                />
                <Radio
                  quantity={SIZE_OPTIONS.LARGE}
                  className="flex items-center justify-between hover:cursor-pointer hover:border hover:border-black p-2 w-40 peer-checked/large:border peer-checked/large:border-black peer-checked/large:bg-black peer-checked/large:text-white shadow-md rounded-lg px-4 mr-4"
                  additionalText={`$${selectedPizza.price.large}`}
                  onChangeHandler={handlePizzaSize}
                  checked={pizzaSize === "large"}
                  type="large"
                  name="large"
                />
              </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div>
              <h3 className="font-bold mb-4">{MENU_OPTIONS.TOPPINGS}</h3>
              <div className="flex flex-1">
                <ul className="grid grid-cols-2 mt-4 gap-2">
                  {selectedPizza.toppings.map((topping, index) => (
                    <Toppings
                      key={index}
                      topping={topping}
                      //id={selectedPizza.id}
                      type={"Extra"}
                      handleExtraToppings={handleExtraToppings}
                      handleExcludedToppings={handleExcludedToppings}
                      handleNormalToppings={handleNormalToppings}
                      index={index}
                      selected={selectedToppings}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="flex justify-between">
              <div className="bg-black text-white p-2 rounded-full mt-12 w-1/12 flex justify-center">
                1
              </div>
              <Button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleAddToCart(e, selectedPizza)
                }
                className="bg-black text-white  p-2 rounded-full mt-12 flex justify-center w-9/12"
                tabIndex={-1}
              >
                Add to cart - price
              </Button>
            </div>
          </div>
        </Modal>
      )}
      <Sidebar>
        <CheckoutMain />
      </Sidebar>
    </>
  );
};

export default Menu;
