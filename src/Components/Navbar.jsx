import React from "react";
import { Link } from "react-router-dom";
import Home from "../Pages/Home";

function Navbar() {
  return (
    <nav
      className="w-full  bg-transparent absolute z-30 "
      
    >
      <div className="flex justify-between items-center   px-10 py-4 ">
        
        <h1 className="text-2xl font-mono text-white">
        
          MY GALLERY 🔎
        </h1>

        <div className="flex items-center gap-10 text-white font-mono text-xl">
          <Link to="/">HOME</Link>
          
        </div>

      </div>
    </nav>
  );
}

export default Navbar;