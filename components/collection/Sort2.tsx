import React from 'react'

export default function Sort2() {
  return (
    <div>
      <div>
      <h1 className="font-bold ">Gender</h1>
        <div className=" sm:w-60  flex gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor=" " className=" w-[90%] flex justify-between  ">
            <span>Tissot</span>
            <span>(129)</span>
          </label>
        </div>

        <div className=" sm:w-60  flex gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor=" " className=" w-[90%] flex justify-between  ">
            <span>Longine</span>
            <span>(51)</span>
          </label>
        </div>

       
        <div className=" sm:w-60  flex gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor=" " className=" w-[90%] flex justify-between  ">
            <span>Bulova</span>
            <span>(77)</span>
          </label>
        </div>

        <div className=" sm:w-60  flex gap-2">
          <input type="checkbox" name="" id="" />
          <label htmlFor=" " className=" w-[90%] flex justify-between  ">
            <span>Hamilton</span>
            <span>(98)</span>
          </label>
        </div>
     
      </div>
    </div>
  )
}
