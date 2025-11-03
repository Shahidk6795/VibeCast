import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Moon, Sun, Search, User, Music, Home } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = ({ darkMode, toggleTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  const isActive = (path) =>
    location.pathname === path ? "text-pink-400 after:w-full" : "text-gray-300 after:w-0";

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="relative overflow-hidden backdrop-blur-xl shadow-lg border-b border-white/10 bg-gradient-to-r from-black/40 via-purple-900/30 to-black/40">
        <div
          className="absolute inset-0 opacity-40 animate-rgbFlow"
          style={{
            background:
              "linear-gradient(270deg, #ff00cc, #3333ff, #00ffff, #ff66cc)",
            backgroundSize: "600% 600%",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div
            className="flex items-center cursor-pointer gap-2 group"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="VibeCast Logo"
              className="h-10 sm:h-12 w-auto drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500 group-hover:from-violet-400 group-hover:to-pink-400 transition-all duration-300">
              VibeCast
            </span>
            <Music className="w-5 h-5 text-pink-400 animate-pulse hidden sm:block" />
          </div>

          <nav className="hidden md:flex gap-6 font-medium">
            <button
              onClick={() => navigate("/")}
              className={`relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-pink-500 after:transition-all after:duration-300 hover:text-pink-400 transition-colors ${isActive("/")}`}
            >
              <Home className="w-4 h-4 inline-block mr-1" /> Home
            </button>

            <button
              onClick={() => navigate("/artists")}
              className={`relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-pink-500 after:transition-all after:duration-300 hover:text-pink-400 transition-colors ${isActive("/artists")}`}
            >
              Artists
            </button>

            <button
              onClick={() => navigate("/trending")}
              className={`relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-pink-500 after:transition-all after:duration-300 hover:text-pink-400 transition-colors ${isActive("/trending")}`}
            >
              Trending
            </button>
          </nav>

          <div className="relative flex-1 mx-6 min-w-0">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search artists, or podcasts..."
              className="w-full pl-11 pr-4 h-10 sm:h-11 rounded-full bg-black/40 backdrop-blur-md text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:outline-none text-sm sm:text-base shadow-inner hover:shadow-pink-500/20 transition-all"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400 hover:text-pink-400 transition-colors duration-300" />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className="p-2 rounded-full bg-black/40 hover:bg-pink-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400 animate-pulse" />
              ) : (
                <Moon className="w-5 h-5 text-pink-400 animate-bounce" />
              )}
            </button>

            <button
              onClick={() => navigate("/profile")}
              aria-label="Profile"
              className={`relative p-2 rounded-full bg-black/40 hover:bg-purple-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 ${
                isActive("/profile") ? "ring-2 ring-pink-500/60" : ""
              }`}
            >
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes rgbFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-rgbFlow {
            animation: rgbFlow 15s ease infinite;
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;
