import React from "react";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";

import arijitImg from "../assets/images/arijit.jpeg";
import weekndImg from "../assets/images/weeknd.jpeg";
import travisImg from "../assets/images/travis.jpeg";
import shreyaImg from "../assets/images/shreya.jpeg";
import drakeImg from "../assets/images/drake.jpeg";
import edImg from "../assets/images/ed.jpeg";
import billieImg from "../assets/images/billie.jpeg";
import eminemImg from "../assets/images/eminem.jpeg";
import guruImg from "../assets/images/guru.jpeg";
import yoYoImg from "../assets/images/yo_yo_honey.jpg";
import anuvImg from "../assets/images/anuv.jpeg";
import karanImg from "../assets/images/karan_aujla.jpg";
import pritamImg from "../assets/images/pritam.jpeg";
import himeshImg from "../assets/images/himesh.jpeg";
import arianaImg from "../assets/images/ariana.jpeg";
import badbunnyImg from "../assets/images/badbunny.jpeg";
import krsnaImg from "../assets/images/krsna.jpg";
import emiwayImg from "../assets/images/emiway.jpg";
import atifImg from "../assets/images/atif.jpg";
import brunoImg from "../assets/images/bruno_mars.jpeg";

const artists = [
  { name: "Arijit Singh", image: arijitImg, path: "/artist/arijit", genre: "Bollywood" },
  { name: "The Weeknd", image: weekndImg, path: "/artist/weeknd", genre: "R&B / Pop" },
  { name: "Travis Scott", image: travisImg, path: "/artist/travis", genre: "Hip Hop" },
  { name: "Shreya Ghoshal", image: shreyaImg, path: "/artist/shreya", genre: "Melody" },
  { name: "Drake", image: drakeImg, path: "/artist/drake", genre: "Hip Hop" },
  { name: "Ed Sheeran", image: edImg, path: "/artist/ed", genre: "Pop" },
  { name: "Billie Eilish", image: billieImg, path: "/artist/billie", genre: "Alternative" },
  { name: "Eminem", image: eminemImg, path: "/artist/eminem", genre: "Rap" },
  { name: "Guru Randhawa", image: guruImg, path: "/artist/guru", genre: "Punjabi Pop" },
  { name: "Yo Yo Honey Singh", image: yoYoImg, path: "/artist/yo-yo-honey", genre: "Hip Hop" },
  { name: "Anuv Jain", image: anuvImg, path: "/artist/anuv", genre: "Indie" },
  { name: "Karan Aujla", image: karanImg, path: "/artist/karan", genre: "Punjabi" },
  { name: "Pritam", image: pritamImg, path: "/artist/pritam", genre: "Composer" },
  { name: "Himesh Reshammiya", image: himeshImg, path: "/artist/himesh", genre: "Pop / Rock" },
  { name: "Ariana Grande", image: arianaImg, path: "/artist/ariana", genre: "Pop" },
  { name: "Bad Bunny", image: badbunnyImg, path: "/artist/badbunny", genre: "Reggaeton" },
  { name: "Krsna", image: krsnaImg, path: "/artist/krsna", genre: "Hip Hop" },
  { name: "Emiway Bantai", image: emiwayImg, path: "/artist/emiway", genre: "Rap" },
  { name: "Atif Aslam", image: atifImg, path: "/artist/atif", genre: "Sufi / Rock" },
  { name: "Bruno Mars", image: brunoImg, path: "/artist/bruno", genre: "Funk / Pop" },
];

const Artists = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen text-white pb-24 relative overflow-hidden bg-black">
      <div className="relative z-10 px-6 pt-24"> {/* Added padding-top so navbar doesn't cover it */}
        <h1 className="text-5xl font-extrabold mb-8 tracking-tight">
          All <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Artists</span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {artists.map((artist, idx) => (
            <div
              key={idx}
              onClick={() => navigate(artist.path)}
              className="group relative bg-[#181818] hover:bg-[#282828] p-4 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-500/10 cursor-pointer"
            >
              <div className="relative w-full aspect-square mb-4 rounded-full overflow-hidden shadow-lg group-hover:shadow-pink-500/40 transition-shadow duration-300">
                <img
                  src={artist.image}
                  alt={artist.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#1db954] rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Play className="w-6 h-6 text-black fill-current ml-1" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-white truncate group-hover:text-pink-400 transition-colors">
                  {artist.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{artist.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;