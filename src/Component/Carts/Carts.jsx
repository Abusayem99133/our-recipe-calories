import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import PropTypes from "prop-types";
const Carts = ({ cart, handleAddCook }) => {
  //   console.log(handleAddCook);
  const { calories, ingredients, recipe_image, short_description } = cart;
  //   console.log(cart);
  return (
    <div className="flex">
      <div className="bg-slate-100 mt-16 p-6 rounded-lg">
        {/* cart */}
        <div className="">
          <img className="w-64 rounded-lg mx-auto" src={recipe_image} alt="" />
          <h3 className="text-[20px] font-semibold">{calories}</h3>
          <p>{short_description}</p>
          <hr className="p-4" />
          <h2 className="text-[18px] font-medium">Ingredients: 6</h2>
          <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
          </ul>
          <hr className="p-4" />
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <span>
                <CiClock2 />
              </span>
              <p>30 minutes</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>
                <FaFire />
              </span>
              <p>600 calories</p>
            </div>
          </div>
          <button
            onClick={() => handleAddCook(cart)}
            className="bg-green-400 rounded-full py-4 px-4 mt-6 text-[18px] font-medium"
          >
            Want to Cook
          </button>
        </div>
        {/* site */}
        <div className=""></div>
      </div>
    </div>
  );
};
Carts.propTypes = {
  cart: PropTypes.array,
  handleAddCook: PropTypes.func,
};
export default Carts;
