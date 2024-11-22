import { FC, ReactElement } from "react";

interface Item {
  name: string;
  description: string;
}

interface MenuItemsProps {
  item: Item;
}

const MenuItem: FC<MenuItemsProps> = ({ item }): ReactElement => {
  const { name, description } = item;
  return (
    <>
      <div className="shadow-md rounded-lg hover:cursor-pointer hover:shadow-2xl">
        <div className="px-4 pt-4 font-bold">{name}</div>
        <div className="px-4 pb-4 text-sm text-gray-500">{description}</div>
        <div className="pt-8 pl-4 pb-4 text-sm">$9.95</div>
      </div>
    </>
  );
};

export default MenuItem;
