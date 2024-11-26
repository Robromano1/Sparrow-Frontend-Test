import { ReactElement, SetStateAction, useContext } from "react";

import MenuItem from "./MenuItem";
import { SpecialtyPizza } from "../../types";
import { SpecialtyPizzaContext } from "./context";

interface MenuItemProps {
  handleOpenModal: () => void;
  setSelectedPizza: React.Dispatch<SetStateAction<null | SpecialtyPizza>>;
}

const MenuItems = ({
  handleOpenModal,
  setSelectedPizza,
}: MenuItemProps): ReactElement => {
  const specialtyPizzas = useContext(SpecialtyPizzaContext);

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
