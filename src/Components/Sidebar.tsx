import { FC, ReactNode, useEffect } from "react";

import { useCartContext } from "../Pages/Cart/cartContext";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const { state, dispatch } = useCartContext();
  const { checkout } = state;

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <div
          className={`top-0 right-0 fixed h-screen overflow-y-auto w-5/12 bg-white border border-l-2 border-l-gray ${
            checkout ? "translate-x-0" : "translate-x-full"
          } ease-in-out duration-300`}
        >
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
