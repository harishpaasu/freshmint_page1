import {AiOutlineClose} from"react-icons/ai";
import { useState } from 'react';
import {HiMenuAlt1} from "react-icons/hi";
const nav = () => {

    const [toggle, setToggle] =useState(false);
    
    function openmenu(){
        setToggle(true);
    }

    function closemenu(){
        setToggle(false);
    }
  return (
   <> 
   <div className="flex items-center justify-between p-10 lg:flex-row" >
        <div className="text-red-500 text-xl font-bold hover:text-red-400"><a href="#">Ahoy</a></div>
        <div className=" lg:block ssm:hidden space-x-2">
    <div className="text-lg space-x-6 font-primary font-medium" ><a href= "" className="text-black hover:bg-red-300 rounded-full px-4 py-2" >Events</a>
    <a href= "?" className="text-black hover:bg-red-300 rounded-full px-4 py-2">Community</a>
    <a href= "?" className="text-black hover:bg-red-300 rounded-full px-4 py-2" >Profile</a>
    <button type= 'button'  className=" font-primary bg-red-500 hover:bg-red-700 text-white font-medium  px-4 py-2 tracking-widest rounded-full"> connect</button></div>
</div>

<div className="ssm:block lg:hidden"> {toggle ? (<AiOutlineClose onClick={closemenu} size={30} className="'text-black" />):
(<HiMenuAlt1 onClick={openmenu} size={30} className="text-black"/>)} </div>
    
    </div>
<div className="ssm:block lg:hidden">

    {toggle ?(<div className=" justify-between ml-10">
            <ul>
            <li className="text-black font-primary font-semibold tracking-wide mb-2 hover:bg-red-300 rounded-full px-4 py-2">Community</li>
             <li className="text-black font-primary font-semibold tracking-wide mb-2 hover:bg-red-300 rounded-full px-4 py-2">profile</li>
                <li className="text-black font-primary font-semibold tracking-wide mb-2 hover:bg-red-300 rounded-full px-4 py-2 cursor-pointer"> Events</li>
             </ul>
            <div className="flex justify-between">
            <div>
            <button type= 'button'  className=" font-primary bg-red-500 hover:bg-red-700 text-white font-medium  px-4 py-2 tracking-widest rounded-full"> connect</button>
            </div>
            <div className= "px-5"> <button type="button" className="text-white font-primary tracking-widest bg-black hover:bg-slate-800 rounded-full px-4 py-2"> create event</button>
            </div>
            </div>

            

        </div>

    ):(<div> </div>

    )}
</div>
    
        
    
    </>
  )
}

export default nav