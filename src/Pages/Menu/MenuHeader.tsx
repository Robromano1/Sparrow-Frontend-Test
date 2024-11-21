import { MENU } from "../../Constants";

const MenuHeader = () => {
  return (
    <>
      <div className="flex flex-1 justify-between ">
        <h2 className="text-3xl font-bold">{MENU.MENU_TITLE}</h2>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-black-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {MENU.PICKUP}
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-r border-b border-black-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {MENU.DELIVERY}
          </button>
        </div>
      </div>
      <div className="flex mt-12">
        <h3 className="text-2xl font-bold">Food</h3>
      </div>
    </>
  );
};

export default MenuHeader;
