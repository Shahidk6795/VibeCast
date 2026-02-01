import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { User, Home, Disc, Flame, Search } from "lucide-react"; 
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path
      ? "text-white after:w-full font-bold drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]" 
      : "text-gray-400 after:w-0 hover:text-white";

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        
        <div
          className="flex items-center cursor-pointer gap-3 group"
          onClick={() => navigate("/")}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-pink-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
            <img
              src={logo}
              alt="VibeCast"
              className="relative h-10 w-auto transform group-hover:rotate-12 transition-transform duration-500"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-pink-500 group-hover:to-purple-500 transition-all duration-500">
              VIBECAST
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
           {[
             { name: "Home", path: "/", icon: Home },
             { name: "Search", path: "/search", icon: Search },
             { name: "Artists", path: "/artists", icon: Disc }, 
             { name: "Trending", path: "/trending", icon: Flame }, 
           ].map((item) => (
             <button
               key={item.name}
               onClick={() => navigate(item.path)}
               className={`relative flex items-center gap-2 text-sm uppercase tracking-wide transition-all duration-300 group ${isActive(item.path)}`}
             >
               <item.icon className={`w-4 h-4 transition-colors duration-300 ${location.pathname === item.path ? "text-pink-500" : "text-gray-500 group-hover:text-pink-400"}`} />
               {item.name}
               <span className="absolute -bottom-1 left-0 h-[2px] bg-pink-500 transition-all duration-300 w-0 group-hover:w-full"></span>
             </button>
           ))}
        </nav>

        <div className="flex items-center gap-4 flex-1 justify-end md:flex-none">
          
          <button 
             onClick={() => navigate("/search")}
             className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="relative group focus:outline-none"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full opacity-70 group-hover:opacity-100 blur transition duration-300"></div>
            
            <div className="relative w-9 h-9 bg-[#121212] rounded-full flex items-center justify-center border border-white/10 overflow-hidden">
               <User className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            </div>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;