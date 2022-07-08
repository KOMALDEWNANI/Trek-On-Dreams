import React from "react";


function Navbar() {
  return (
    <div className="bg-slate-400">
        <ul className="flex">
            <li className="cursor-pointer  px-2 py-2 font-bold text-xl 
            hover:bg-slate-300 font-serif">
                Trek on Dreams
            </li>

          <li className="ml-auto mr-14 cursor-pointer  px-2 py-2 text-lg hover:bg-slate-300 ">
            Home
          </li>
          <li className="mr-14 cursor-pointer  px-2 py-2 text-lg hover:bg-slate-300 ">
            About
          </li>
          <li className="mr-14 cursor-pointer  px-2 py-2 text-lg hover:bg-slate-300 ">
            Contact Us
          </li>
          <li className="mr-14 cursor-pointer  px-2 py-2 text-lg hover:bg-slate-300 ">
            Login
          </li>
          <li className="mr-24 cursor-pointer  px-2 py-2 text-lg hover:bg-slate-300 ">
            Signup
          </li>
        </ul>
    </div>
  );
}

export default Navbar;
