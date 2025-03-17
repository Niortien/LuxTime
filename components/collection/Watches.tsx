import React from "react";

export default function Watches() {
  return (
    <div>
      <h1 className="text-xl font-bold mt-15 ml-30">Collection Watches</h1>
      <div className="flex justify-end gap-20   ">
        <label htmlFor="">
          sort by
          <select
            name=""
            id=""
            className="border-1 border-gray-300 w-38 h-9 rounded-sm  mr-18"
          >
            <option value="">best selling</option>
          </select>
        </label>
      </div>
      <div className="">

      </div>
    </div>
  );
}
