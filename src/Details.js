import React from "react";
import {BsInstagram, BsFacebook} from "react-icons/bs";
import {AiFillCaretRight} from "react-icons/ai";

function Details() {
  return (
    <div className=" w-2/6  h-4/6 absolute right-0 top-36 justify-start text-white shadow-yellow-200 shadow-2xl" >
        <h3 className=" mr-10 text-2xl text-red-300 font-semibold">Lots of free content created for you.</h3>
        <button type="text" className=" flex items-center bg-white border-2 border-white rounded-md p-1 ml-64 mt-2 mb-7 text-black font-semibold" >See More  <AiFillCaretRight className=" h-6 w-6 ml-2 "/></button>
        <div className=" mt-64">
            <h4 className=" text-xl font-serif mb-1">You are one step away from becoming a part of our family</h4>
            <h2 className="mb-2 text-amber-500 font-serif">Register Now !!!!</h2>
            <label></label>
            <input type="e-mail" className=" w-56 h-7 mb-2 border-2 border-white text-black" placeholder="E-mail"></input><br/>
            <button type="text" className="border-2 mb-10 bg-white text-black rounded-sm p-1 font-semibold shadow-2xl shadow-white">Register</button><br/>
            <p1>Follow us for more details on:</p1>
            <div className=" ml-36 mt-4">
                <div className=" flex">
                   <p1 className=" flex mr-3"><BsInstagram className=" text-white mr-1 h-7 w-7"/>INSTAGRAM</p1>
                   <p1 className=" flex"><BsFacebook className=" text-white mr-1 h-7 w-7"/>FACEBOOK</p1>
                   
                   
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Details;
