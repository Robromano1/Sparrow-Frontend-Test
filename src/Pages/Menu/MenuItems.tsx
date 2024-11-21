import { ReactElement } from "react";

import MenuItem from "./MenuItem";

// interface MenuItemsProps {
//   items: [];
// }

const items = [{ name: "Cheese Pizza" }, { name: "Pepperoni Pizza" }];

const MenuItems = (): ReactElement => {
  return (
    <>
      <div className="grid grid-cols-2 mt-12">
        {items.map((item) => (
          <MenuItem item={item} />
        ))}
      </div>
    </>
  );
};

export default MenuItems;
