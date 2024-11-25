import { useEffect } from "react";

import { useCartContext } from "../Pages/Cart/cartContext";

const Sidebar = () => {
  const { state, dispatch } = useCartContext();
  const { checkout } = state;

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      (
      <div
        className={`top-0 right-0 fixed h-full w-5/12 bg-white border border-l-2 border-l-gray ${
          checkout ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <h1>This is a sidebar</h1>
      </div>
      )
    </>
  );
};

export default Sidebar;
