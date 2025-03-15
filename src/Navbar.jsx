import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { state: { scrollToNotes: true } }); // Navigate to Home
  };

  return (
    <nav className="bg-neutral-950 text-white py-4 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold">SyncNotes.</h1>
          <p className="text-xs font-light leading-6 ml-7">Save. Sync. Access</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg items-center">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `cursor-pointer hover:text-gray-300 ${
                  isActive ? "border-b-2 border-white pb-1" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/pastes"}
              className={({ isActive }) =>
                `cursor-pointer hover:text-gray-300 ${
                  isActive ? "border-b-2 border-white pb-1" : ""
                }`
              }
            >
              All Notes
            </NavLink>
          </li>
          <li>
            <button onClick={handleClick} className="hover:text-gray-300">
              Create New Note
            </button>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-white py-4 px-6">
          <ul className="flex flex-col gap-6 text-lg">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/pastes"}>All Notes</NavLink>
            </li>
            <li>
              <button onClick={handleClick}>Create New Note</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
