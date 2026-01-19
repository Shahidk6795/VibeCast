import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Moon, Sun, Search, User, Music, Home, Disc, Flame } from "lucide-react"; 
import logo from "../assets/logo.png";

const Navbar = ({ darkMode, toggleTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false); // Track scroll for dynamic styling

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlQuery = params.get("query");
    const currentPath = location.pathname;

    if (currentPath === "/search" && urlQuery) {
      setQuery(urlQuery);
    } else if (currentPath !== "/search") {
      setQuery("");
    }
  }, [location]);

  const submitSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      submitSearch();
    }
  };

  const isActive = (path) =>
    location.pathname === path
      ? "text-white after:w-full font-bold drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]" // Neon glow on active
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
          
          <div className="relative group w-full max-w-[240px] hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 transition-all group-focus-within:bg-black/80 group-focus-within:border-pink-500/50">
              <Search className="w-4 h-4 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                placeholder="Search..."
                className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 ml-2"
              />
            </div>
          </div>

          <button 
             onClick={submitSearch}
             className="sm:hidden p-2 text-gray-300 hover:text-white"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all border border-transparent hover:border-white/10"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="relative p-[2px] rounded-full group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative p-2 bg-black rounded-full border border-white/10 group-hover:border-transparent transition-colors">
               <User className="w-5 h-5 text-gray-300 group-hover:text-white" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;