import React from 'react'

export default function Sort2() {
  return (
    <div>
      <div>
      <h1 className="font-bold ">Gender</h1>
        <div className=" sm:w-60  flex gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor=" " className=" w-[90%] flex justify-between  ">
            <span>Mens Watch</span>
            <span>(118)</span>
          </label>
        </div>

        <div className=" sm:w-60  flex gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor=" " className=" w-[90%] flex justify-between  ">
            <span>Womens Watch</span>
            <span>(102)</span>
          </label>
        </div>

       
        <div className=" sm:w-60  flex gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor=" " className=" w-[90%] flex justify-between  ">
            <span>Unisex Watch</span>
            <span>(58)</span>
          </label>
        </div>

        <div className="border bg-gray-400 mt-3">

        </div>
     
      </div>
    </div>
  )
}
