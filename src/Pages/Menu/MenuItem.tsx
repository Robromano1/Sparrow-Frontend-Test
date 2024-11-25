import { FC, ReactElement, SetStateAction } from "react";
import { SpecialtyPizza } from "../../types";

// interface Item {
//   name: string;
//   description: string;
//   id: string;
// }

interface MenuItemsProps {
  item: SpecialtyPizza;
  handleOpenModal: () => void;
  setSelectedPizza: React.Dispatch<SetStateAction<null | SpecialtyPizza>>;
}

const MenuItem: FC<MenuItemsProps> = ({
  item,
  handleOpenModal,
  setSelectedPizza,
}): ReactElement => {
  const { name, description } = item;
  const handlePizzaClick = () => {
    setSelectedPizza(item);
    handleOpenModal();
  };
  return (
    <>
      <div
        className="shadow-md rounded-lg hover:cursor-pointer hover:shadow-2xl"
        onClick={handlePizzaClick}
      >
        <div className="px-8 pt-8 font-bold">{name}</div>
        <div className="px-8 pb-8 text-sm text-gray-500">{description}</div>
      </div>
    </>
  );
};

export default MenuItem;
