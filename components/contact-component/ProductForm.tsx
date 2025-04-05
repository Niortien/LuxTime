import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/input';

const ProductForm = () => {
    return (
        <div>
               <div className=" sm:w-[60%] w-[100%] shadow-md">
        <form action="" className="flex sm:flex-col sm:gap-3 sm:px-10 px-5   flex-col gap-3">
          <div>
            <label className="text-2xl text-indigo-950 font-bold text-center">Contact</label>
            <Input type="text" placeholder="Contact" className="border  border-black  p-2" />
          </div>

          <div className="flex gap-2">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Email me with news and offers</label>
          </div>
          <div>
            <label htmlFor="" className="text-xl text-indigo-950 font-bold pt-10">Delivery</label>
            <select className="border w-[100%] border-black text-gray-400  p-2">
              <option value="Country/ Region" key="Country/ Region">
                Country/ Region
              </option>
            </select>
          </div>

          <div className=" flex justify-between">
            <Input
              type="text"
              placeholder=""
              className="w-[45%] border border-black"
            />
            <Input
              type="text"
              placeholder=""
              className="w-[45%] border border-black"
            />
          </div>

          <div>
            <Input type="text" placeholder="Adress"  className="border border-black" />
          </div>

          <div>
            <Input type="text" placeholder="Appartement,suite,etc" className="border border-black"/>
          </div>

          <div className=" flex gap-20">
            <Input
              type="text"
              placeholder="City"
              className="w-[45%] border border-black"
            />
            <Input
              type="text"
              placeholder="Province"
              className="w-[45%] border border-black "
            />
            <Input
              type="text"
              placeholder="Postal code"
              className="w-[45%] border border-black"
            />
          </div>

          <div>
            <Input type="tel" placeholder="Phone" className="border border-black" />
          </div>
          <div>
            <label className="text-xl font-body text-indigo-950">Shipping method</label>
            <Input
              type="text"
              placeholder="Enter  your shipping adress to view available shipping  methods"
              className="border border-black"
              
            />
          </div>

          <div>
            <label className="text-xl font-body text-indigo-950">Payment</label>
            <p  className="text-gray-400">All transactions are sécure and encrypted.</p>
            <form action="" className=" flex sm:flex-col sm:gap-2 bg-gray-200 flex-col gap-2">
              <div>
                <div  className="text-indigo-950 text-end border border-green-300 w-[100%] sm:px-4 text-xl">
                Visa
                </div>
              <Input
                type="text"
                placeholder="Credit Card"
                className="border border-black bg-white"
              />
              </div>
              <Input type="tel" placeholder="Card number"   className="border border-black bg-white" />
              <div className=" flex justify-between">
                <Input
                  type="text"
                  placeholder="Expiation data (MM/YY)"
                  className="w-[45%] border border-black  bg-white"
                />
                <Input
                  type="text"
                  placeholder="sécure code "
                  className="w-[45%] border border-black  bg-white"
                />
              </div>
              <Input type="text" placeholder="Name on card "  className="border border-black  bg-white" />

              <div className="flex sm:gap-2">
                <input type="checkbox" name="" id="" className=" bg-white border border-black" />
                <label htmlFor="" className="font-bold">
                  Use shipping adress as billing adress
                </label>
              </div>
            </form>
          </div>
          <h2 className="text-xl font-bold">Remember me</h2>

          <div className="flex sm:gap-2">
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className="text-gray-400">Save my information for a faster checkout </label>
          </div>
          <span className="text-gray-400">logo sécure and ancrypted</span>

          <Button> Pay Now</Button>
        </form>
      </div>
        </div>
    );
}

export default ProductForm;
