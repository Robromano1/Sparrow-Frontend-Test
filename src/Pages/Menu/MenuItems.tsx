import { ReactElement, SetStateAction, useContext } from "react";

//import { useEffect } from "react";

import MenuItem from "./MenuItem";
import { SpecialtyPizza } from "../../types";
import { SpecialtyPizzaContext } from "./context";

// interface MenuItemsProps {
//   items: [];
// }

interface MenuItemProps {
  handleOpenModal: () => void;
  setSelectedPizza: React.Dispatch<SetStateAction<null | SpecialtyPizza>>;
}

// const items = [
//   { name: "Cheese Pizza", description: "This is a short description" },
//   { name: "Pepperoni Pizza", description: "This is a short description" },
//   { name: "Chicken Pizza", description: "This is a short description" },
//   { name: "Sausage Pizza", description: "This is a short description" },
//   { name: "Pineapple Pizza", description: "This is a short description" },
//   { name: "Grandma Pizza", description: "This is a short description" },
// ];

const MenuItems = ({
  //pizzas,
  handleOpenModal,
  setSelectedPizza,
}: MenuItemProps): ReactElement => {
  const specialtyPizzas = useContext(SpecialtyPizzaContext);
  // useEffect(() => {
  //   console.log(pizzas);
  // }, [pizzas]);
  return (
    <>
      <div className="grid grid-cols-2 mt-12 gap-6">
        {specialtyPizzas?.map((item: SpecialtyPizza) => (
          <MenuItem
            item={item}
            key={item.id}
            handleOpenModal={handleOpenModal}
            setSelectedPizza={setSelectedPizza}
          />
        ))}
      </div>
    </>
  );
};

export default MenuItems;
