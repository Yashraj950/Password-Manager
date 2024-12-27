import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-teal-500 text-white">
      <div className="myContainer flex justify-between items-center px-4 py-5  h-16 ">
      <div className="logo text-xl">
        <span className="text-blue-700 text-2xl hover:text-white ">&lt;Password</span>
        <span className="text-yellow-500 hover:text-white"> Manager&gt;</span>

        </div>
      
        <button className="text-white px-2 bg-black rounded-full flex gap-2 items-center ">
          <img className="p-1 invert w-10" src="https://cdn-icons-png.flaticon.com/256/25/25231.png" alt="" />
          <span className="font-bold ">GitHub</span>

        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
