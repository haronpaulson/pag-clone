import React from "react";
import {ImWindows} from "react-icons/im";
import {FaXbox} from "react-icons/fa";
import {TbDeviceNintendo} from "react-icons/tb";

const text= document.querySelector(".type-write");

const delWrite = ()=>{
  setTimeout(() => {

    text.textContent = "Let the journey beginn";}, 5000);
  setTimeout(() => {
    text.textContent = "Let the ride start"
    }, 9000);}

delWrite();
setInterval(delWrite, 13000);

function Heading() {
  return (
    <div className=" w-1/2 h-96 absolute top-1/4 left-0 text-white ">
        <div className=" ">
            <div className=" w-8/12 items-start mt-5 ml-8 mb-12 relative">
                <h1 className=" text-5xl text-white font-serif font-bold"><span className=" type-write "><em>Let the Game Start</em></span></h1>    
            </div>

            
            <p1 className=" mb-6 text-xl">The little stranger ori is no stranger to peril, but when a fateful fight puts the<br/>
            owlet Ku in harm's way, it will take more than bravery to bring a family back<br/>
            together, heal a broken land, and discover Ori's true destiny.</p1>
            <div className=" mt-6 mr-56 mb-32">
                <button type="text" className=" border-2 border-white bg-orange-200 font-semibold rounded-lg text-black w-36 h-10 mr-4 hover:bg-red-200 hover:text-black">Buy Now</button>
                <button type="text" className=" border-2 border-white rounded-lg bg-orange-200 text-black  font-semibold w-36 h-10 hover:bg-red-200 hover:text-black">Play</button>

            </div>
        </div>
      <div>
        <p1 className=" mr-80  ">Available On:</p1>
        <div className=" ml-28 flex items-center mt-5">
            <div>
                <p1 className=" flex mr-5"><ImWindows className=" h-6 w-6 mr-1"/>Windows 10</p1>
            </div>
            <div>
                <p1 className=" flex mr-5"><FaXbox className=" h-6 w-6 mr-1"/>XBOX</p1>
            </div>
            <div>
                <a className=" flex mr-5" href="#"><TbDeviceNintendo className=" h-7 w-7 mr-1 mt-3"/>NINTENDO<br/>SWITCH</a>
            </div>
           


            

        </div>
        
      </div>
    </div>
  )
}

export default Heading;
