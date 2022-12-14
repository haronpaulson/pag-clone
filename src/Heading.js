import React from "react";
import {ImWindows} from "react-icons/im";
import {FaXbox} from "react-icons/fa";
import {TbDeviceNintendo} from "react-icons/tb";

const text= document.querySelector(".type-write");

const delWrite = ()=>{
  setTimeout(() => {

    text.textContent = "Let the journey beginn";}, 7000);
  setTimeout(() => {
    text.textContent = "Let the ride start";
    }, 10000)}

delWrite();
setInterval(delWrite, 15000);

function Heading() {
  return (
    <div className=" w-1/2 h-96 absolute top-1/4 left-0 text-white md: top-28">
        <div className=" ">
            <div className=" w-8/12 items-start mt-5 ml-7 mb-12 relative sm:w-11/12">
                <h1 className=" text-white font-serif font-bold md:text-base sm: text-xl lg:text-2xl"><span className=" type-write "><em>Let the Game Start</em></span></h1>    
            </div>

            
            <p1 className=" xl:mb-6 text-2xl md:text-m sm:text-xs lg:text-lg">The little stranger ori is no stranger to peril, but when a fateful fight puts the<br/>
            owlet Ku in harm's way, it will take more than bravery to bring a family back<br/>
            together, heal a broken land, and discover Ori's true destiny.</p1>
            <div className=" mt-6 mr-56 mb-32 md:mb-32 flex mr-8 ml-40 sm: ml-10 mb-[70px] xl: mb-44">
                <button type="text" className=" xl: border-2 border-white bg-orange-200 font-semibold rounded-lg text-black w-36 h-10 mr-4 hover:bg-red-200 hover:text-black md: text-sm w-20 sm: w-16 ">Buy Now</button>
                <button type="text" className=" border-2 border-white rounded-lg bg-orange-200 text-black  font-semibold w-36 h-10 hover:bg-red-200 hover:text-black md:text-sm w-20 sm:w-16">Play</button>

            </div>
        </div>
      <div>
        <p1 className=" mr-80  text-white md:mr-64 text-orange-300 sm:mr-52 mt-10 ">Available On:</p1>
        <div className=" flex items-center mt-5 md:ml-12 flex-col mr-56 sm:text-xs ml-10 mt-10 mr-[250px] ">
            <div className="md: mb-3 ">
                <p1 className=" flex mr-5"><ImWindows className=" h-6 w-6 mr-1"/>Windows 10</p1>
            </div>
            <div className=" md:mr-10 mb-2">
                <p1 className=" flex mr-5"><FaXbox className=" h-6 w-6 mr-1"/>XBOX</p1>
            </div>
            <div className=" md: mr-4 mt-1">
                <a className=" flex mr-5" href="#"><TbDeviceNintendo className=" h-7 w-7 mr-1 mt-3 sm:ml-6"/>NINTENDO<br/>SWITCH</a>
            </div>
           


            

        </div>
        
      </div>
    </div>
  )
}

export default Heading;
