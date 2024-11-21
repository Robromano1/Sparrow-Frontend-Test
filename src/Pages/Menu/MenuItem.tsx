import { FC, ReactElement } from "react";

interface MenuItemsProps {
  item: { name: string };
}

const MenuItem: FC<MenuItemsProps> = ({ item }): ReactElement => {
  const { name } = item;
  return (
    <>
      <div>{name}</div>
    </>
  );
};

export default MenuItem;
