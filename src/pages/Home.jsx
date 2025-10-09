import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Hyperspeed from "@/components/Hyperspeed";
import ArtistModal from "@/components/ArtistModal";

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

const artists = [
  { name: "Arijit Singh", image: arijitImg, path:"/artist/arijit" },
  { name: "Yo Yo Honey Singh", image: yoYoImg, path:"/artist/yo-yo-honey" },
  { name: "Shreya Ghoshal", image: shreyaImg, path:"/artist/shreya" },
  { name: "Pritam", image: pritamImg, path:"/artist/pritam" },
  { name: "Karan Aujla", image: karanImg, path:"/artist/karan" },
  { name: "Anuv Jain", image: anuvImg, path:"/artist/anuv" },
  { name: "Guru Randhawa", image: guruImg, path:"/artist/guru" },
  { name: "Himesh Reshammiya", image: himeshImg, path:"/artist/himesh" },
  { name: "Ed Sheeran", image: edImg, path:"/artist/ed" },
  { name: "Billie Eilish", image: billieImg, path:"/artist/billie" },
  { name: "The Weeknd", image: weekndImg, path:"/artist/weeknd" },
  { name: "Drake", image: drakeImg, path:"/artist/drake" },
  { name: "Ariana Grande", image: arianaImg, path:"/artist/ariana" },
  { name: "Eminem", image: eminemImg, path:"/artist/eminem" },
  { name: "Bad Bunny", image: badbunnyImg, path:"/artist/badbunny" },
  { name: "Travis Scott", image: travisImg, path:"/artist/travis" },
];

const categories = [
  { title: "Jump Back In", artists: artists.slice(0, 6), type: 'album' },
  { title: "Your Top Artists", artists: artists.slice(6, 12), type: 'artist' },
  { title: "Recommended Playlists", artists: artists.slice(12, 16).concat(artists.slice(0, 2)), type: 'album' },
];

const Home = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const navigate = useNavigate();
  const spotifyGreen = "#1db954"; 
  
  const handleArtistClick = (artist) => {
    setSelectedArtist(null);
    navigate(artist.path);
  };

  return (
    <div className="relative w-full min-h-screen text-white overflow-x-hidden bg-black">
      <style jsx="true">{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Hyperspeed 
        className="fixed inset-0 z-0" 
        intensity={1.0} 
        colorShift={true} 
        trailLength={80} 
        speed={1.0} 
      />

      <div className="relative z-10 p-6 md:p-8 pt-4 min-h-screen pb-32">
        <header className="mb-8 pt-4 bg-black/30 p-4 -mx-6 md:-mx-8">
          <h1 className="text-4xl md:text-5xl font-extrabold px-2 bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, #ff00ff, ${spotifyGreen})`,
                filter: `drop-shadow(0 0 8px ${spotifyGreen})`,
              }}>
            Welcome to VibeCast
          </h1>
        </header>

        {categories.map((category, index) => (
          <section key={index} className="mb-10">
            <h2 className="text-2xl font-bold mb-4 hover:underline"
                style={{ color: spotifyGreen, transition: "color 0.3s ease" }}>
              {category.title}
            </h2>
            <div className="flex overflow-x-auto space-x-6 pb-2 scrollbar-hide">
              {category.artists.map((artist, idx) => (
                <div key={idx} onClick={() => handleArtistClick(artist)}
                     style={{ borderColor: spotifyGreen, backgroundColor: 'rgba(18, 18, 18, 0.5)' }}
                     className="flex flex-col p-4 w-44 flex-shrink-0 rounded-lg shadow-2xl border-2 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(29,185,84,0.7)]">
                  <img src={artist.image} alt={artist.name}
                       className={`w-full aspect-square object-cover rounded-md shadow-xl ${category.type === 'artist' ? 'rounded-full' : 'rounded-md'}`} />
                  <div className="mt-3">
                    <p className="text-base font-semibold text-white truncate">{artist.name}</p>
                    <p className="text-sm text-gray-400 truncate capitalize">{category.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="h-20"></div>
      </div>

      {selectedArtist && <ArtistModal artist={selectedArtist} onClose={() => setSelectedArtist(null)} />}
    </div>
  );
};

export default Home;
