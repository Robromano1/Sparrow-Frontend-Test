import { Link } from "react-router-dom";

import { NAVBAR } from "../../Constants";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-1 justify-between mt-4">
        <ul className="flex align-middle ml-14">
          <li className="p-4">
            <Link to="/">{NAVBAR.LOGO}</Link>
          </li>
        </ul>
        <ul className="flex">
          <li className="p-4">
            <Link to="/menu">{NAVBAR.MENU}</Link>
          </li>
          <li className="p-4">
            <Link to="/about">{NAVBAR.ABOUT}</Link>
          </li>
          <li className="p-4">{NAVBAR.LOCATION}</li>
        </ul>
        <ul className="align-middle flex mr-14">
          <li className="p-4">{NAVBAR.LOGIN}</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
