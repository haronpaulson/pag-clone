import React from "react";
import {BsInstagram, BsFacebook} from "react-icons/bs";
import {AiFillCaretRight} from "react-icons/ai";

function Details() {
  return (
    <div className=" xl: w-2/6  h-4/6 absolute right-0 top-36  text-white shadow-yellow-200 shadow-2xl sm: top-[15%] right-0 h-6/6  md:top-28 md:shadow-yellow-200 " >
        <h3 className=" mr-10 text-xl text-red-300 font-semibold sm:text-lg xl:mr-1 ">Lots of free content created for you.</h3>
        <button type="text" className=" flex items-center bg-white border-2 border-white rounded-md p-1 ml-64 mt-2 mb-7 text-black font-semibold sm:ml-24 lg:ml-56 xl:ml-72" >See More  <AiFillCaretRight className=" h-6 w-6 ml-2 "/></button>
        <div className=" mt-64 sm:mt-32 lg:mt-44 md: absolute -bottom-12   lg:mt-56 ml-9 ">
            <h4 className=" text-xl font-serif mb-1 sm:text-md lg:text-">You are one step away from becoming a part of our family</h4>
            <h2 className="mb-2 text-amber-500 font-serif">Register Now !!!!</h2>
            <label></label>
            <input type="e-mail" className=" w-56 h-7 mb-2 border-2 border-white text-black sm:w-40 rounded-md" placeholder="E-mail"></input><br/>
            <button type="text" className="border-2 mb-10 bg-white text-black rounded-sm p-1 font-semibold shadow-2xl shadow-white xl:mb-16 sm:mb-12">Register</button><br/>
            <p1>Follow us for more details on:</p1>
            <div className="  mt-4 ">
                <div className=" lg:flex-row ml-36 sm: mr-12 absolute left-16 xl:flex left-1 mr-1 ml-20 ">
                   <p1 className=" flex mr-3 sm:mr-16"><BsInstagram className=" text-white mr-1 h-7 w-7 "/>INSTAGRAM</p1>
                   <p1 className=" flex"><BsFacebook className=" text-white mr-1 h-7 w-7"/>FACEBOOK</p1>
                   
                   
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Details;
