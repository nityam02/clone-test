import React from 'react'

const DiningOptions = () => {
  return (
    <div className="flex mt-10 food-options-container" >
        <div className="flex selected-option-border">
          <button className="bg-pink-100 hover:bg-pink-200 mx-5 py-3 px-3 rounded-full">
            <img className="w-10 h-10 bg-pink-100 hover:bg-pink-200"
            src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" alt="delivery" />
          </button>
          <h1 className="mt-3.5 font-okra text-xl text-pink-600">Delivery</h1>
        </div>

        <div className="flex">
          <button className="bg-gray-50 hover:bg-pink-100 mx-5 py-3 px-3 rounded-full">
            <img
              className="w-10 h-10 bg-gray-100 hover:bg-pink-100 max-w-xs"
              src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
              alt="dining out"
            />
          </button>
          <h1 className="mt-3.5 font-okra text-xl text-gray-500">Dining Out</h1>
        </div>

        <div className="flex">
          <button className="bg-gray-50 hover:bg-pink-100 mx-5 py-3 px-3 rounded-full">
            <img className="w-10 h-10 bg-gray-100 hover:bg-pink-100"
            src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
            alt="delivery" />
          </button>
          <h1 className="mt-3.5 font-okra text-xl text-gray-500">Nightlife</h1>
        </div>

      </div>
  );
};

export default DiningOptions;