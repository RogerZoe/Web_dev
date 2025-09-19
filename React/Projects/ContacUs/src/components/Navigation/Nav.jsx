import React from 'react';
import Logo from "../../Images/Logo.png";

const Nav = () => {
  return (
    <nav className="w-full h-[72px] border-b">
      <div className="max-w-[1440px] mx-auto h-full px-6 flex justify-between items-center">
        {/* Logo */}
        <img className="h-[48px] w-[48px]" src={Logo} alt="Logo" />

        {/* Navigation Links */}
        <ul className="flex gap-8 list-none text-[18px] font-medium">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
