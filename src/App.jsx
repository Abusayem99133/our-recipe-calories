import { CgProfile } from "react-icons/cg";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import Carts from "./Component/Carts/Carts";
import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [carts, setCarts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cCooking, setcCooking] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  const handleAddCook = (cook) => {
    const isExist = cart.find((c) => c.recipe_id == cook.recipe_id);
    if (!isExist) {
      toast.success("Recipe Added...!");

      setCart([...cart, cook]);
    } else {
      toast.warn("Already exist...!");
    }
  };
  // console.log(carts);
  const handlePreparing = (preparing) => {
    const newCooking = cart.find((item) => item.recipe_id === preparing);

    setcCooking([...cCooking, newCooking]);
    const newCart = cart.filter((item) => item.recipe_id !== preparing);
    setCart(newCart);
  };
  // console.log(cCooking);

  return (
    <div>
      <div className="  flex justify-around m-16">
        <div className="flex space-x-80 justify-between items-center ">
          <div>
            <h1 className=" text-3xl font-bold">Recipe Calories</h1>
          </div>
          <div className="flex space-x-4">
            <p>Home</p>
            <p>Recipes</p>
            <p>About</p>
            <p>Search</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className=" flex items-center bg-slate-300 p-2 rounded-full">
            <div className="">
              <h3>
                <HiOutlineMagnifyingGlass />
              </h3>
            </div>
            <div>
              <input
                className="bg-slate-300"
                type="text"
                name=""
                id=""
                placeholder=" Search"
              />
            </div>
          </div>
          <div className="">
            <h3 className="bg-green-300 p-2 text-3xl rounded-full">
              <CgProfile />
            </h3>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://iili.io/JWpJiej.jpg)",
          borderRadius: "24px",
          width: "90%",
          marginLeft: "110px",
        }}
      >
        <div className=" "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold  ">personalized recipes</h1>
            <p className="mb-5">
              We use AI to automatically tag all of your recipes according to
              nutrients, ingredients, food styles
            </p>
            <div className="space-x-4">
              <button className="bg-green-300 p-4 rounded-full text-black ">
                Explore Now
              </button>
              <button className="border-2 rounded-full p-4">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-2">Our Recipes</h1>
          <p>
            Located in the heart of Baltimore Arbutus neighborhood, Our Recipes
            Cafe is a nostalgic blend of coffee house vibes
          </p>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="grid grid-cols-2 space-x-4">
          {carts.map((c, idx) => (
            <Carts key={idx} cart={c} handleAddCook={handleAddCook}></Carts>
          ))}
        </div>
        <div className="mt-24 ">
          <div className="border-2 p-8 rounded-xl">
            <div className="overflow-x-auto">
              <h1 className="p-4 text-center text-3xl">
                Want to Cook: {cart.length}
              </h1>
              <hr />
              <div className="flex justify-around">
                <h3>Name</h3>
                <h3>Time</h3>
                <h3>Calories</h3>
              </div>
              <table className="table space-y-2 ">
                {/* head */}

                {cart.map((item, index) => (
                  <tr className=" box" key={item.recipe_id}>
                    <p>{index + 1}</p>
                    <td>{item.recipe_name}</td>
                    <td>{item.preparing_time}</td>
                    <td>{item.calories}</td>
                    <hr />
                    <button
                      onClick={() => handlePreparing(item.recipe_id)}
                      className="bg-green-400 px-4 py-2 rounded-full"
                    >
                      Preparing
                    </button>
                  </tr>
                ))}
              </table>
              <div className="overflow-x-auto mt-16">
                <h1 className="text-center text-3xl">
                  Currently cooking:{cCooking.length}
                </h1>
                <hr className="mt-6" />
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Time</th>
                      <th>Calories</th>
                    </tr>
                  </thead>
                  {cCooking.map((items, index) => (
                    <tr className="box" key={cart.recipe_id}>
                      <p>{index + 1}</p>
                      <td>{items.recipe_name}</td>
                      <td>{items.preparing_time}</td>
                      <td>{items.calories}</td>
                    </tr>
                  ))}
                </table>
                <div className="mt-8">
                  {cCooking.reduce(
                    (c, t) => c + parseInt(t.preparing_time.split(" ")[0]),
                    0
                  )}
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
