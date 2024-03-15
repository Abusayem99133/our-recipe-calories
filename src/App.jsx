import { CgProfile } from "react-icons/cg";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

import "./App.css";
import Carts from "./Component/Carts/Carts";
import { useEffect, useState } from "react";

function App() {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  const handleAddCook = (cook) => {
    console.log("cock in the cook", cook);
  };
  return (
    <div>
      <div className="flex justify-around m-16">
        <div className="flex space-x-80 justify-between items-center ">
          <div>
            <h1 className="text-3xl font-bold">Recipe Calories</h1>
          </div>
          <div className="flex space-x-4">
            <p>Home</p>
            <p>Recipes</p>
            <p>About</p>
            <p>Search</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center bg-slate-300 p-2 rounded-full">
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
          <div className="space-x-5">
            <h3 className="bg-green-300 p-2 text-3xl rounded-full">
              <CgProfile />
            </h3>
          </div>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-2">Our Recipes</h1>
          <p>
            Located in the heart of Baltimore’s Arbutus neighborhood, Our
            Recipes Cafe is a nostalgic blend of coffee house vibes
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="grid grid-cols-2 space-x-4">
          {carts.map((cart) => (
            <Carts
              key={carts.id}
              cart={cart}
              handleAddCook={handleAddCook}
            ></Carts>
          ))}
        </div>
        <div className="mt-24 ">
          <div className="border-2 rounded-xl">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
