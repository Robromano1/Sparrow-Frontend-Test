import MenuItems from "./MenuItems";
import MenuHeader from "./MenuHeader";

const Menu = () => {
  return (
    <>
      <div className="my-32 px-36 container mx-auto">
        <MenuHeader />
        <div className="flex flex-col">
          <MenuItems />
        </div>
      </div>
    </>
  );
};

export default Menu;
