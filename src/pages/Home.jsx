import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Hyperspeed from "@/components/Hyperspeed";
import ArtistModal from "@/components/ArtistModal";
import { PlayerContext } from "../context/PlayerContext";
import { Play, Dumbbell, Coffee, Heart, Sparkles } from "lucide-react";
import { workoutPlaylist, relaxPlaylist, romanticPlaylist, partyPlaylist } from "../assets/playlist";

const arijitImg = "https://ik.imagekit.io/VibeCast/images/arijit.jpeg?updatedAt=1768896061413";
const yoYoImg = "https://ik.imagekit.io/VibeCast/images/yo_yo_honey.jpg";
const shreyaImg = "https://ik.imagekit.io/VibeCast/images/shreya.jpeg?updatedAt=1768896070881";
const pritamImg = "https://ik.imagekit.io/VibeCast/images/pritam.jpeg?updatedAt=1768896069609";
const karanImg = "https://ik.imagekit.io/VibeCast/images/karan_aujla.jpg?updatedAt=1768896068738";
const anuvImg = "https://ik.imagekit.io/VibeCast/images/anuv.jpeg?updatedAt=1768896060738";
const guruImg = "https://ik.imagekit.io/VibeCast/images/guru.jpeg?updatedAt=1768896061745";
const himeshImg = "https://ik.imagekit.io/VibeCast/images/himesh.jpeg?updatedAt=1768896061726";
const edImg = "https://ik.imagekit.io/VibeCast/images/ed.jpeg?updatedAt=1768896061392";
const billieImg = "https://ik.imagekit.io/VibeCast/images/billie.jpeg?updatedAt=1768896060772";
const weekndImg = "https://ik.imagekit.io/VibeCast/images/weeknd.jpeg?updatedAt=1768896075423";
const drakeImg = "https://ik.imagekit.io/VibeCast/images/drake.jpeg?updatedAt=1768896061506";
const arianaImg = "https://ik.imagekit.io/VibeCast/images/ariana.jpeg?updatedAt=1768896060923";
const eminemImg = "https://ik.imagekit.io/VibeCast/images/eminem.jpeg?updatedAt=1768896061344";
const badbunnyImg = "https://ik.imagekit.io/VibeCast/images/badbunny.jpeg?updatedAt=1768896060813";
const travisImg = "https://ik.imagekit.io/VibeCast/images/travis.jpeg?updatedAt=1768896075554";
const krsnaImg = "https://ik.imagekit.io/VibeCast/images/krsna.jpg?updatedAt=1768896068930";
const emiwayImg = "https://ik.imagekit.io/VibeCast/images/emiway.jpg?updatedAt=1768896061370";
const atifImg = "https://ik.imagekit.io/VibeCast/images/atif.jpg?updatedAt=1768896060776";
const brunoImg = "https://ik.imagekit.io/VibeCast/images/bruno_mars.jpeg";

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
  const { playPause, playlist, playPlaylist } = useContext(PlayerContext); 


  const handleArtistClick = (artist) => {
    setSelectedArtist(null);
    navigate(artist.path);
  };

  const moods = [
    {
      id: "workout",
      title: "Iron Paradise",
      desc: "Pure Adrenaline.",
      icon: Dumbbell,
      color: "from-red-600 to-black",
      textColor: "text-red-500",
      playlist: workoutPlaylist
    },
    {
      id: "relax",
      title: "Zen Mode",
      desc: "Lo-Fi & Chill.",
      icon: Coffee,
      color: "from-emerald-600 to-black",
      textColor: "text-emerald-400",
      playlist: relaxPlaylist
    },
    {
      id: "romantic",
      title: "Late Night",
      desc: "Slow & Deep.",
      icon: Heart,
      color: "from-pink-600 to-black",
      textColor: "text-pink-500",
      playlist: romanticPlaylist
    },
    {
      id: "party",
      title: "House Party",
      desc: "Bangers Only.",
      icon: Sparkles,
      color: "from-purple-600 to-black",
      textColor: "text-purple-400",
      playlist: partyPlaylist
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-extrabold px-2 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-green-400 drop-shadow-[0_0_8px_#1db954]">
            Welcome to VibeCast
          </h1>
          <p className="text-gray-400 mt-2 ml-2 italic">
            Where every beat finds its rhythm 🎶
          </p>
        </header>

        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white hover:text-[#1db954] transition-colors duration-300">
                Select Your Vibe
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {moods.map((mood) => (
                <div 
                key={mood.id}
                onClick={() => navigate(`/mood/${mood.id}`)}
                className="group relative h-40 rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 bg-black/40 backdrop-blur-sm"
                >
                <div className={`absolute inset-0 bg-gradient-to-br ${mood.color} opacity-40 group-hover:opacity-70 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 h-full flex flex-col justify-between p-5">
                    <div className="flex justify-between items-start">
                        <mood.icon className={`w-8 h-8 ${mood.textColor} drop-shadow-lg`} />
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg scale-50 group-hover:scale-100 duration-300">
                           <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-black border-b-[5px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                    
                    <div>
                    <h3 className="text-xl font-black italic uppercase tracking-tighter text-white">
                        {mood.title}
                    </h3>
                    <p className="text-white/60 text-xs font-medium tracking-wide">
                        {mood.desc}
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </section>

        {categories.map((category, index) => (
          <section key={index} className="mb-10 overflow-hidden relative">
            <h2 className="text-2xl font-bold mb-4 hover:underline text-[#1db954] transition-colors duration-300">
              {category.title}
            </h2>

            <div className="ticker-wrapper relative overflow-hidden group mask-gradient">
              <div className="ticker-content flex space-x-6 animate-ticker">
                {category.artists.concat(category.artists).map((artist, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleArtistClick(artist)}
                    className="group/card relative flex flex-col p-3 sm:p-4 w-32 sm:w-44 rounded-xl shadow-2xl border-2 border-transparent hover:border-[#1db954] bg-[#181818]/80 hover:bg-[#282828] flex-shrink-0 cursor-pointer transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                  >
                    <div className="relative w-full aspect-square mb-3 shadow-lg rounded-full overflow-hidden">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                      />
                      
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1db954] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform translate-y-2 group-hover/card:translate-y-0 duration-300">
                          <Play className="w-5 h-5 sm:w-6 sm:h-6 text-black fill-current ml-1" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center z-10">
                      <p className="text-sm sm:text-base font-bold text-white truncate group-hover/card:text-[#1db954] transition-colors">
                        {artist.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 truncate capitalize mt-1">
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