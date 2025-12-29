import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Hyperspeed from "@/components/Hyperspeed";
import ArtistModal from "@/components/ArtistModal";
import { PlayerContext } from "../context/PlayerContext"

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
import brunoImg from "../assets/images/bruno_mars.jpeg";

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
  { name: "Bruno Mars", image: brunoImg, path: "/artist/bruno" },
];

const categories = [
  { title: "Jump Back In", artists: artists.slice(0, 6), type: "artist" },
  { title: "Your Top Artists", artists: artists.slice(6, 12), type: "artist" },
  {
    title: "Recommended Playlists",
    artists: artists.slice(12, 20).concat(artists.slice(0, 2)),
    type: "artist",
  },
];

const Home = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const navigate = useNavigate();
  const spotifyGreen = "#1db954";

  const { playPause, playlist } = useContext(PlayerContext);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        if (playlist && playlist.length > 0) {
          playPause();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playPause, playlist]);

  const handleArtistClick = (artist) => {
    setSelectedArtist(null);
    navigate(artist.path);
  };

  return (
    <div className="relative w-full min-h-screen text-white overflow-x-hidden bg-black">
      <div className="fixed inset-0 z-0 bg-black">
        <Hyperspeed
          intensity={1.0}
          colorShift={true}
          trailLength={80}
          speed={1.0}
        />
      </div>

      <div className="relative z-10 p-6 md:p-8 pt-4 min-h-screen pb-32">
        <header className="mb-8 pt-4 bg-black/30 p-4 -mx-6 md:-mx-8 border-b border-white/10 backdrop-blur-md">
          <h1
            className="text-4xl md:text-5xl font-extrabold px-2 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-green-400 drop-shadow-[0_0_8px_#1db954]"
          >
            Welcome to VibeCast
          </h1>
          <p className="text-gray-400 mt-2 ml-2 italic">
            Where every beat finds its rhythm 🎶
          </p>
        </header>

        {categories.map((category, index) => (
          <section key={index} className="mb-10 overflow-hidden relative">
            <h2
              className="text-2xl font-bold mb-4 hover:underline text-[#1db954] transition-colors duration-300"
            >
              {category.title}
            </h2>

            <div className="ticker-wrapper relative overflow-hidden group mask-gradient">
              <div className="ticker-content flex space-x-6 animate-ticker group-hover:pause-animation">
                {category.artists.concat(category.artists).map((artist, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleArtistClick(artist)}
                    className="flex flex-col p-3 sm:p-4 w-32 sm:w-44 rounded-xl shadow-2xl border-2 border-[#1db954] bg-[rgba(18,18,18,0.6)] flex-shrink-0 cursor-pointer transform hover:scale-110 transition-all duration-300 hover:shadow-[0_0_25px_rgba(29,185,84,0.9)] hover:-translate-y-1"
                  >
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full aspect-square object-cover rounded-full shadow-xl"
                    />
                    <div className="mt-3 text-center">
                      <p className="text-sm sm:text-base font-semibold text-white truncate">
                        {artist.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 truncate capitalize">
                        {category.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <div className="h-20"></div>
      </div>

      {selectedArtist && (
        <ArtistModal
          artist={selectedArtist}
          onClose={() => setSelectedArtist(null)}
        />
      )}
    </div>
  );
};

export default Home;