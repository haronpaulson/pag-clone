import React from "react";
import {BiSearch} from "react-icons/bi";

import {FaRegHeart} from "react-icons/fa";
function Navigation() {
  return (
    <div className=" flex justify-between mt-4 ">
        <div className=" flex font-semibold text-lg items-center ">
            <div className=" ml-32 shadow-xl shadow-red-300">
                <h1 className=" text-red-600 font-serif border-1">ORI</h1>
            </div>
            <div className=" ml-20">
                <ul className=" flex text-white">
                    <li className=" mr-5 bac"><a href="#">Store</a></li>
                    <li className=" mr-5"><a href="#">News</a></li>
                    <li className=" mr-5"><a href="#">Media</a></li>
                    <li className=" mr-5"><a href="#">Studio</a></li>
                </ul>
            </div>
        </div>
        <div className=" flex mr-28 text-white">
            <BiSearch className=" mr-4 h-8 w-6 "/>
         
            <FaRegHeart  className=" h-8 w-6 mr-12 hover:bg-red-600 hover:cursor-pointer rounded-lg" />
            <h3 className=" border-2 border-yellow-50 p-1 rounded-lg hover:bg-yellow-200 hover:text-black hover:cursor-pointer font-bold">Contact Us</h3>
        </div>
    </div>
  )
}

export default Navigation;
