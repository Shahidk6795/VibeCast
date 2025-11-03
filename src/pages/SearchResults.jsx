import React from "react";
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

  const filtered = artists.filter((a) =>
    a.name.toLowerCase().includes((query || "").toLowerCase())
  );

  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      <div
        className="absolute inset-0 -z-10 opacity-60 animate-gradientFlow"
        style={{
          background:
            "linear-gradient(135deg, #1a1a1a, #2b004f, #3b0a45, #0a0a0a)",
          backgroundSize: "400% 400%",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500 drop-shadow-lg animate-fadeIn">
          Search Results for “{query}”
        </h1>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 text-lg animate-fadeIn">
            No results found 😔
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 animate-fadeInSlow">
            {filtered.map((artist, idx) => (
              <div
                key={idx}
                onClick={() => navigate(artist.path)}
                className="relative bg-black/60 border border-pink-500/20 rounded-2xl p-5 flex flex-col items-center backdrop-blur-lg shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] hover:scale-110 transition-all duration-500 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-32 h-32 object-cover rounded-full mb-3 shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-500"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <p className="font-semibold text-center text-white mt-2">
                  {artist.name}
                </p>
                <p className="text-sm text-gray-400">Artist</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradientFlow {
            animation: gradientFlow 12s ease infinite;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease forwards;
          }

          @keyframes fadeInSlow {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInSlow {
            animation: fadeInSlow 1.2s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default SearchResults;
