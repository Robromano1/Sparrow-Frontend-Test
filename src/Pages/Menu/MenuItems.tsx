import { ReactElement } from "react";

import MenuItem from "./MenuItem";

// interface MenuItemsProps {
//   items: [];
// }

const items = [
  { name: "Cheese Pizza", description: "This is a short description" },
  { name: "Pepperoni Pizza", description: "This is a short description" },
  { name: "Chicken Pizza", description: "This is a short description" },
  { name: "Sausage Pizza", description: "This is a short description" },
  { name: "Pineapple Pizza", description: "This is a short description" },
  { name: "Grandma Pizza", description: "This is a short description" },
];

const MenuItems = (): ReactElement => {
  return (
    <>
      <div className="grid grid-cols-2 mt-12 gap-6">
        {items.map((item) => (
          <MenuItem item={item} />
        ))}
      </div>
    </>
  );
};

export default MenuItems;
