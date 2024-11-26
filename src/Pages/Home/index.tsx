import { useNavigate } from "react-router-dom";

import Button from "../../Components/Button";
import { BUTTON_TEXT } from "../../Constants";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex pl-28 pt-28 w-100 flex-1">
        <h1 className="text-6xl w-4/12 leading-tight">
          The <b>tastiest</b> pizza on the planet!
        </h1>
      </div>
      <div className="flex flex-1 pl-28 pt-4">
        <p className="w-5/12">
          At Galaxy Pizza we strive to make the best pizza in the universe.
          Voted number 1 pizza for 10 years in a row. We use authentic
          ingredients that your taste buds will thank you for.
        </p>
      </div>
      <div className="pl-28 pt-6">
        <Button
          onClick={() => navigate("/menu")}
          className="bg-black text-white pt-2 pb-2 pl-6 pr-6 rounded-full hover:bg-sky-700"
        >
          {BUTTON_TEXT.ORDER_NOW}
        </Button>
      </div>
      {/* Add image of a pizza here */}
    </>
  );
};

export default Home;
