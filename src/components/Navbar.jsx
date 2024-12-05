import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full navbar flex justify-between fixed top-0 z-[99999]">
      <div className="text-[#FEFEFE] lowercase font-light navText1">
        41Pine Studios
      </div>
      <div className="text-[#FEFEFE] uppercase font-semibold navText2">
        Get In Touch
      </div>
    </nav>
  );
};

export default Navbar;
