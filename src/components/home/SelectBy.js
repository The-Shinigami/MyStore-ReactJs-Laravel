import React, { Component } from "react";

export class SelectBy extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="inline-block font-andalus text-center pl-1 mt-2 ml-3 bg-white w-40  h-6 border-2 border-gray-500 rounded-xl">
            New Products
          </div>
          <input
            className="ml-10 relative top-0.5 border-2 border-gray-500 rounded  w-5 h-5 cursor-pointer"
            type="checkbox"
          ></input>
        </div>

        <div>
          <div>
            <div className="inline-block font-andalus text-center pl-1  ml-3 bg-white w-40  h-6 border-2 border-gray-500 rounded-xl">
              Favourit Product
            </div>
            <input
              className="ml-10 relative top-0.5 border-2 border-gray-500 rounded  w-5 h-5 cursor-pointer"
              type="checkbox"
            ></input>
          </div>
        </div>
        <div>
          <div className="inline-block font-andalus text-center pl-1  ml-3 bg-white w-40  h-6 border-2 border-gray-500 rounded-xl">
            Best Selling
          </div>
          <input
            className="ml-10 relative top-0.5 border-2 border-gray-500 rounded  w-5 h-5 cursor-pointer"
            type="checkbox"
          ></input>
        </div>
      </div>
    );
  }
}

export default SelectBy;
