import { useState, useEffect, useCallback } from "react";

import MenuItems from "./MenuItems";
import MenuHeader from "./MenuHeader";
import Modal from "../../Components/Modal";
import Toppings from "./Toppings";
import Button from "../../Components/Button";
import { useCustomFetch } from "../../Hooks/CustomFetch";
import { MENU_OPTIONS, SIZE_OPTIONS } from "../../Constants";
import { SpecialtyPizza } from "../../types";
import { SpecialtyPizzaContext } from "./context";
import { useCartContext } from "../Cart/cartContext";
import { ActionType } from "../Cart/cartContext";

interface SelectedToppings {
  [toppingName: string]: string | undefined;
}

const Menu = () => {
  //const [body, setBody] = useState(undefined);
  //const [menuItems, setMenuItems] = useState();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const url = `${baseUrl}/specialty-pizzas`;
  //const { data, isLoading, error, pizzaFetch } = useCustomFetch(body);
  const [menuItems, setMenuItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState<SpecialtyPizza | null>(
    null
  );
  const [extraToppings, setExtraToppings] = useState<string[]>([]);
  const [excludedToppings, setExcludedToppings] = useState<string[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<SelectedToppings>(
    {}
  );
  // const [pizzaSize, setPizzaSize] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState<unknown | null>(null);

  const { data, error, isLoading } = useCustomFetch(url);
  const { specialtyPizzas } = data;
  const { state, dispatch } = useCartContext();

  // if (!isLoading) {
  //   console.log(data);
  //   setMenuItems(data.specialtyPizzas);
  // }

  // useEffect(() => {
  //   const url = `${baseUrl}/specialty-pizzas`;
  //   pizzaFetch(url, "GET");
  // }, [baseUrl, pizzaFetch]);

  // const fetchData = useCallback(async () => {
  //   setIsLoading(true);
  //   const url = `${baseUrl}/specialty-pizzas`;
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setData(data.specialtyPizzas);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, [baseUrl]);

  // useEffect(() => {

  // }, []);

  const handleOpenModal = () => {
    console.log("OPENING MODAL");
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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

  // const handleSelectedToppings = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   quantity: string
  // ) => {
  //   const topping = e.target.value;
  //   setSelectedToppings({ ...selectedToppings, [topping]: quantity });

  //   switch (quantity) {
  //     case "none":
  //       setExcludedToppings([...excludedToppings, topping]);
  //       break;
  //     case "extra":
  //       setExtraToppings([...extraToppings, topping]);
  //       break;
  //   }
  // };

  useEffect(() => {
    //console.log(state);
    console.log(extraToppings);
    console.log(excludedToppings);
    console.log(selectedToppings);
  }, [extraToppings, selectedToppings]);

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
      {/* {modalOpen && (
        <dialog
          data-modal
          id="pizza-modal"
          tabIndex={-1}
          aria-hidden={true}
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full"
        >
          <div className="relative p-4 w-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3>This is a modal for... {selectedPizza?.name}</h3>
              </div>
            </div>
          </div>
        </dialog>
      )} */}
      {selectedPizza && (
        <Modal isOpen={modalOpen} onClose={handleCloseModal}>
          <div className="flex flex-col flex-1 pl-4">
            <h2 className="text-xl font-bold">{selectedPizza.name}</h2>
            <p className="text-md text-gray-500">{selectedPizza.description}</p>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div>
              <h3 className="font-bold mb-4">{MENU_OPTIONS.SIZE}</h3>
              <div className="flex">
                <h4 className="shadow-md rounded-lg hover:cursor-pointer hover:border hover:border-black p-2 w-40 mr-4 hover:shadow-xl flex items-center justify-between px-4">
                  {SIZE_OPTIONS.SMALL}
                  <p className="text-xs">{`$${selectedPizza.price.small}`}</p>
                </h4>
                <h4 className="shadow-md rounded-lg hover:cursor-pointer hover:border hover:border-black p-2 w-40 mr-4 flex items-center justify-between px-4">
                  {SIZE_OPTIONS.MEDIUM}
                  <p className="text-xs">{`$${selectedPizza.price.medium}`}</p>
                </h4>
                <h4 className="shadow-md rounded-lg hover:cursor-pointer hover:border hover:border-black p-2 w-40 mr-4 flex items-center justify-between px-4">
                  {SIZE_OPTIONS.LARGE}
                  <p className="text-xs">{`$${selectedPizza.price.large}`}</p>
                </h4>
              </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div>
              <h3 className="font-bold mb-4">{MENU_OPTIONS.TOPPINGS}</h3>
              {/* <Toppings toppings={selectedPizza.toppings} /> */}
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
            {/* <div>
              <h3 className="font-bold mb-4">
                {MENU_OPTIONS.EXCLUDE_TOPPINGS}
              </h3> */}
            {/* <Toppings toppings={selectedPizza?.toppings} /> */}
            {/* <div className="flex flex-1">
                <ul className="grid grid-cols-4 mt-4 gap-2">
                  {selectedPizza.toppings.map((topping, index) => (
                    <Toppings topping={topping} index={index} type={"Remove"} />
                  ))}
                </ul>
              </div>
            </div> */}
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="flex justify-between">
              <div className="bg-black text-white p-2 rounded-full mt-12 w-1/12 flex justify-center">
                1
              </div>
              <Button
                onClick={() =>
                  dispatch({
                    type: ActionType.ADD_TO_CART,
                    payload: {
                      pizzaName: selectedPizza.name,
                      extraToppings: ["Sauage", "Pepperoni"],
                    },
                  })
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
    </>
  );
};

export default Menu;
