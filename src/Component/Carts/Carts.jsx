import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import PropTypes from "prop-types";
const Carts = ({ cart, handleAddCook }) => {
  const {
    calories,
    ingredients,
    recipe_image,
    short_description,
    recipe_name,
    preparing_time,
  } = cart;

  return (
    <div className="flex">
      <div className="bg-slate-100 mt-16 p-6 rounded-lg cart">
        <div className="">
          <img className="w-64 rounded-lg mx-auto" src={recipe_image} alt="" />
          <h3 className="text-[20px] font-semibold">{recipe_name}</h3>
          <p>{short_description.slice(0, 40)}</p>
          <hr className="p-4" />
          <h2 className="text-[18px] font-medium">Ingredients: 6</h2>
          <ol className="list-disc">
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
          </ol>
          <hr className="p-4" />
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <span>
                <CiClock2 />
              </span>
              <p>{preparing_time}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <FaFire />
              </span>
              <p>{calories}</p>
            </div>
          </div>
          <button
            onClick={() => handleAddCook(cart)}
            className="bg-green-400 rounded-full py-4 px-4 mt-6 text-[18px] font-medium"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};
Carts.propTypes = {
  Carts: PropTypes.func,
  cart: PropTypes.object,
  handleAddCook: PropTypes.func,
};
export default Carts;
