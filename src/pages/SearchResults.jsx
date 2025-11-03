import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import arijitImg from "../assets/images/arijit.jpeg";
import yoYoImg from "../assets/images/yo_yo_honey.jpg";
import shreyaImg from "../assets/images/shreya.jpeg";
import pritamImg from "../assets/images/pritam.jpeg";
import karanImg from "../assets/images/karan_aujla.jpg";
import anuvImg from "../assets/images/anuv.jpeg";
import guruImg from "../assets/images/guru.jpeg";
import himeshImg from "../assets/images/himesh.jpeg";
import edImg from "../assets/images/ed.jpeg";
import billieImg from "../assets/images/billie.jpeg";
import weekndImg from "../assets/images/weeknd.jpeg";
import drakeImg from "../assets/images/drake.jpeg";
import arianaImg from "../assets/images/ariana.jpeg";
import eminemImg from "../assets/images/eminem.jpeg";
import badbunnyImg from "../assets/images/badbunny.jpeg";
import travisImg from "../assets/images/travis.jpeg";
import krsnaImg from "../assets/images/krsna.jpg";
import emiwayImg from "../assets/images/emiway.jpg";
import atifImg from "../assets/images/atif.jpg";

const artists = [
  { name: "Arijit Singh", image: arijitImg, path: "/artist/arijit" },
  { name: "Yo Yo Honey Singh", image: yoYoImg, path: "/artist/yo-yo-honey" },
  { name: "Shreya Ghoshal", image: shreyaImg, path: "/artist/shreya" },
  { name: "Pritam", image: pritamImg, path: "/artist/pritam" },
  { name: "Karan Aujla", image: karanImg, path: "/artist/karan" },
  { name: "Anuv Jain", image: anuvImg, path: "/artist/anuv" },
  { name: "Guru Randhawa", image: guruImg, path: "/artist/guru" },
  { name: "Himesh Reshammiya", image: himeshImg, path: "/artist/himesh" },
  { name: "Ed Sheeran", image: edImg, path: "/artist/ed" },
  { name: "Billie Eilish", image: billieImg, path: "/artist/billie" },
  { name: "The Weeknd", image: weekndImg, path: "/artist/weeknd" },
  { name: "Drake", image: drakeImg, path: "/artist/drake" },
  { name: "Ariana Grande", image: arianaImg, path: "/artist/ariana" },
  { name: "Eminem", image: eminemImg, path: "/artist/eminem" },
  { name: "Bad Bunny", image: badbunnyImg, path: "/artist/badbunny" },
  { name: "Travis Scott", image: travisImg, path: "/artist/travis" },
  { name: "Krsna", image: krsnaImg, path: "/artist/krsna" },
  { name: "Emiway Bantai", image: emiwayImg, path: "/artist/emiway" },
  { name: "Atif Aslam", image: atifImg, path: "/artist/atif" },
];

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { query } = queryString.parse(location.search);
  const [searchTerm, setSearchTerm] = useState(query || "");
  const [filtered, setFiltered] = useState(artists);

  useEffect(() => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) {
      setFiltered(artists);
    } else {
      setFiltered(
        artists.filter((a) =>
          a.name.toLowerCase().replace(/[^a-z0-9]/g, "").includes(q.replace(/[^a-z0-9]/g, ""))
        )
      );
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen relative overflow-hidden text-white flex flex-col items-center px-6 py-10 bg-gradient-to-br from-black via-[#120016] to-black animate-gradient-slow">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1a001f] via-[#2b004f] to-[#0a0a0a] opacity-70 blur-3xl animate-[gradientShift_15s_ease_infinite]" />

      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500 drop-shadow-lg">
        Explore Artists
      </h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search artists..."
        className="w-full max-w-md mb-10 px-5 py-3 rounded-full bg-black/50 border border-pink-500/20 text-white placeholder-gray-400 text-center shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
      />

      {filtered.length === 0 ? (
        <p className="text-gray-400 text-lg mt-20 animate-pulse">
          No results found 😔
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full max-w-7xl">
          {filtered.map((artist, idx) => (
            <div
              key={idx}
              onClick={() => navigate(artist.path)}
              className="group relative bg-black/60 border border-pink-500/20 rounded-2xl p-5 flex flex-col items-center backdrop-blur-xl hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] hover:scale-110 transition-all duration-500 cursor-pointer"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-32 h-32 object-cover rounded-full mb-3 shadow-[0_0_20px_rgba(236,72,153,0.3)] group-hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all duration-500"
              />
              <p className="font-semibold text-center text-white mt-2 group-hover:text-pink-400 transition-colors">
                {artist.name}
              </p>
              <p className="text-sm text-gray-400">Artist</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
