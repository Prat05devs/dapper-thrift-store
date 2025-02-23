import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-8 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-primary">Dapper.</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-14 text-gray-700">
        <li className="hover:text-primary transition duration-300 cursor-pointer">Shop</li>
        <li className="hover:text-primary transition duration-300 cursor-pointer">Sell</li>
        <li className="hover:text-primary transition duration-300 cursor-pointer">Donate</li>
      </ul>

      <div className="hidden md:flex items-center space-x-4">
  {/* Search Bar */}
  <div className="flex items-center border border-gray-300 w-80 focus-within:border-indigo-500 transition duration-300 pr-3 gap-2 bg-white h-12 rounded-md overflow-hidden">
    <input
      type="text"
      placeholder="Search for products"
      className="w-full h-full pl-4 outline-none placeholder-gray-500 text-sm"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 30 30"
      fill="#6B7280"
      className="flex-shrink-0"
    >
      <path d="M 13 3 C 7.48 3 3 7.48 3 13 C 3 18.51 7.48 23 13 23 C 15.39 23 17.59 22.15 19.32 20.73 L 25.29 26.71 A 1 1 0 1 0 26.71 25.29 L 20.73 19.32 C 22.15 17.59 23 15.39 23 13 C 23 7.48 18.51 3 13 3 z M 13 5 C 17.43 5 21 8.57 21 13 C 21 17.43 17.43 21 13 21 C 8.57 21 5 17.43 5 13 C 5 8.57 8.57 5 13 5 z"></path>
    </svg>
  </div>

  {/* Cart Button */}
  <button className="relative flex items-center justify-center w-12 h-12 bg-transparent group">
    <svg
      className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
      viewBox="0 0 24.38 30.52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>icon-cart</title>
      <path
        transform="translate(-3.62 -0.85)"
        d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"
        className="fill-primary transition-colors duration-200 group-hover:fill-red-600"
      ></path>
    </svg>
  </button>

  {/* User Icon (Now Matches Cart Button) */}
  <button className="relative flex items-center justify-center w-12 h-12 bg-transparent group">
    <svg
      viewBox="0 0 24 24"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      className="text-gray-500 transition-transform duration-200 group-hover:scale-110"
    >
      <path
        d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
      ></path>
    </svg>
  </button>
</div>


      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <Menu onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer text-gray-700" />
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 space-y-3 w-40 transform transition-all duration-300 ${
          menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <li className="hover:text-primary transition duration-300 cursor-pointer">Shop</li>
        <li className="hover:text-primary transition duration-300 cursor-pointer">Sell</li>
        <li className="hover:text-primary transition duration-300 cursor-pointer">Donate</li>
      </div>
    </nav>
  );
}
