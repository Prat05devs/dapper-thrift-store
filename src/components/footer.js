import { Facebook, X, Instagram, Mail, Youtube, Phone, MailIcon } from "lucide-react";

const locations = [
  { name: "Dehradun", country: "India" },
  { name: "Delhi", country: "India" },
  { name: "Bangalore", country: "India" }
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 mt-20">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 to-purple-500"></div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left - Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">Dapper</h2>
          <p className="mt-4 text-gray-400">
            Dapper is an e-commerce thrift store where you can buy and sell clothes, footwear, and accessories. 
            Our website combines modern design with a cool old-school vibe.
          </p>
          {/* Contact Info */}
          <div className="mt-4 space-y-2 text-gray-300">
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-400" /> +1 23 456 789
            </p>
            <p className="flex items-center gap-2">
              <MailIcon className="w-5 h-5 text-gray-400" /> support@dapper.com
            </p>
          </div>
        </div>

        {/* Center - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white transition"><a href="#">Home</a></li>
            <li className="hover:text-white transition"><a href="#">Shop</a></li>
            <li className="hover:text-white transition"><a href="#">Sell</a></li>
            <li className="hover:text-white transition"><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Right - Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-500 transition">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-500 transition">
              <X className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-500 transition">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-red-500 transition">
              <Mail className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-red-600 transition">
              <Youtube className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Locations Section */}
          <div className="mt-6 space-y-2">
            {locations.map((location, index) => (
              <Location key={index} name={location.name} country={location.country} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-800 pt-6">
        © 2025 Dapper. All rights reserved.
      </div>
    </footer>
  );
}

/* ✅ Reusable Location Component */
function Location({ name, country }) {
  return (
    <div className="relative group">
      <p className="text-lg font-semibold text-gray-400">
        Location{" "}
        <span className="italic text-green-400 hover:cursor-pointer relative">
          {name}
          {/* Hover Card */}
          <div className="absolute top-[-90px] left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out bg-white rounded-xl shadow-lg w-40 h-24 border-2 border-green-300 opacity-0 group-hover:opacity-100">
            <div className="absolute inset-0 bg-green-100 rounded-xl"></div>
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              
              {/* ✅ Adjusted Pulse Animation to Avoid Overlap */}
              <div className="absolute top-[6px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-700 border-4 border-white rounded-full shadow-lg animate-pulse"></div>
              
              <span className="text-green-800 font-bold text-lg mt-4">{name}</span>
              <span className="text-gray-600 text-sm">{country}</span>
            </div>
          </div>
        </span>
        , {country}
      </p>
    </div>
  );
}
