// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          AA/NA
        </div>
        <div className="flex space-x-4">
          <a href="#hero" className="text-gray-800 hover:text-blue-600">Home</a>
          <a href="#about" className="text-gray-800 hover:text-blue-600">About</a>
          <a href="#steps" className="text-gray-800 hover:text-blue-600">The Steps</a>
          <a href="#resources" className="text-gray-800 hover:text-blue-600">Resources</a>
        </div>
      </div>
    </nav>
  );
}
