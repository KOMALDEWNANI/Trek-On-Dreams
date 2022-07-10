import React from "react";


function Navbar() {
  return (
    <div className="bg-slate-400 rounded-2xl">
        <ul className="flex ">
            <li className="cursor-pointer  px-2 py-2 font-bold text-xl 
            bg-slate-300 font-serif rounded-full">
                Trek on Dreams
            </li>

          <li className="ml-auto mr-14 cursor-pointer  px-2 py-2 font-bold text-lg hover:bg-slate-300 hover:rounded-2xl">
            Home
          </li>

          <li className="mr-14 cursor-pointer  px-2 py-2 font-bold text-lg hover:bg-slate-300 hover:rounded-2xl">
            About
          </li>
          <li className="mr-14 cursor-pointer  px-2 py-2 font-bold text-lg hover:bg-slate-300 hover:rounded-2xl">
            Contact Us
          </li>
          <li className="mr-14 cursor-pointer  px-2 py-2 font-bold text-lg hover:bg-slate-300 hover:rounded-2xl">
            Login
          </li>
          <li className="mr-24 cursor-pointer  px-2 py-2 font-bold text-lg hover:bg-slate-300 hover:rounded-2xl">
            Signup
          </li>
        </ul>
    </div>
  );
}

export default Navbar;
