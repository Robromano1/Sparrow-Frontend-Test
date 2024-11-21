import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="border border-1 border-red-500 flex flex-1 justify-between">
        <ul className="flex align-middle ml-4">
          <li className="p-4">
            <Link to="/">Logo</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4">Menu</li>
        </ul>
        <ul className="align-middle flex mr-4">
          <li className="p-4">Login</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
