// src/components/Navbar.jsx
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          AA/NA
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <a href="#hero" className="text-gray-800 hover:text-blue-600">Home</a>
          <a href="#about" className="text-gray-800 hover:text-blue-600">About</a>
          <a href="#steps" className="text-gray-800 hover:text-blue-600">The Steps</a>
          <a href="#resources" className="text-gray-800 hover:text-blue-600">Resources</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-4 mt-8">
          <a href="#hero" className="text-gray-800 hover:text-blue-600 text-lg" onClick={toggleMenu}>Home</a>
          <a href="#about" className="text-gray-800 hover:text-blue-600 text-lg" onClick={toggleMenu}>About</a>
          <a href="#steps" className="text-gray-800 hover:text-blue-600 text-lg" onClick={toggleMenu}>The Steps</a>
          <a href="#resources" className="text-gray-800 hover:text-blue-600 text-lg" onClick={toggleMenu}>Resources</a>
        </nav>
      </div>
    </nav>
  );
}
