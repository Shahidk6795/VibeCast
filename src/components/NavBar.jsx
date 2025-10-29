import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, Search, User } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = ({ darkMode, toggleTheme }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="relative bg-black/30 backdrop-blur-md overflow-hidden shadow-md">
        <div
          className="absolute inset-0 z-0 opacity-50 rounded-md"
          style={{
            background: `linear-gradient(270deg, #ff6ec7, #8e44ad, #7b2ff7)`,
            backgroundSize: "600% 600%",
            animation: "rgbFlow 15s ease infinite",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div
            className="flex items-center cursor-pointer gap-2 flex-shrink-0"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="VibeCast Logo"
              className="h-10 sm:h-12 w-auto"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500">
              VibeCast
            </span>
          </div>

          <div className="relative flex-1 mx-6 min-w-0">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search music, artists, podcasts..."
              className="w-full pl-10 pr-4 h-10 sm:h-11 rounded-full bg-black/40 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:outline-none text-sm sm:text-base"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className="p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-pink-500/20 transition-transform duration-300 hover:scale-110"
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
              className="p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-purple-500/20 transition-transform duration-300 hover:scale-110"
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
        `}
      </style>
    </header>
  );
};

export default Navbar;
