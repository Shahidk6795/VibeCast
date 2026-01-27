import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Play, Search, X, Sparkles, Music2 } from "lucide-react";

const anuvImg = "https://ik.imagekit.io/VibeCast/images/anuv.jpeg?updatedAt=1768896060738";
const arijitImg = "https://ik.imagekit.io/VibeCast/images/arijit.jpeg?updatedAt=1768896061413";
const atifImg = "https://ik.imagekit.io/VibeCast/images/atif.jpg?updatedAt=1768896060776";
const billieImg = "https://ik.imagekit.io/VibeCast/images/billie.jpeg?updatedAt=1768896060772";
const brunoImg = "https://ik.imagekit.io/VibeCast/images/bruno_mars.jpeg";
const badBunnyImg = "https://ik.imagekit.io/VibeCast/images/badbunny.jpeg?updatedAt=1768896060813";
const drakeImg = "https://ik.imagekit.io/VibeCast/images/drake.jpeg?updatedAt=1768896061506";
const edImg = "https://ik.imagekit.io/VibeCast/images/ed.jpeg?updatedAt=1768896061392";
const eminemImg = "https://ik.imagekit.io/VibeCast/images/eminem.jpeg?updatedAt=1768896061344";
const emiwayImg = "https://ik.imagekit.io/VibeCast/images/emiway.jpg?updatedAt=1768896061370";
const guruImg = "https://ik.imagekit.io/VibeCast/images/guru.jpeg?updatedAt=1768896061745";
const himeshImg = "https://ik.imagekit.io/VibeCast/images/himesh.jpeg?updatedAt=1768896061726";
const karanImg = "https://ik.imagekit.io/VibeCast/images/karan_aujla.jpg?updatedAt=1768896068738";
const krsnaImg = "https://ik.imagekit.io/VibeCast/images/krsna.jpg?updatedAt=1768896068930";
const pritamImg = "https://ik.imagekit.io/VibeCast/images/pritam.jpeg?updatedAt=1768896069609";
const shreyaImg = "https://ik.imagekit.io/VibeCast/images/shreya.jpeg?updatedAt=1768896070881";
const travisImg = "https://ik.imagekit.io/VibeCast/images/travis.jpeg?updatedAt=1768896075554";
const weekndImg = "https://ik.imagekit.io/VibeCast/images/weeknd.jpeg?updatedAt=1768896075423";
const yoYoImg = "https://ik.imagekit.io/VibeCast/images/yo_yo_honey.jpg";
const arianaImg = "https://ik.imagekit.io/VibeCast/images/ariana.jpeg?updatedAt=1768896060923";

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
  { name: "Anuv Jain", image: anuvImg, path: "/artist/anuv", genre: "Indie / Acoustic" },
  { name: "Karan Aujla", image: karanImg, path: "/artist/karan", genre: "Punjabi" },
  { name: "Pritam", image: pritamImg, path: "/artist/pritam", genre: "Composer" },
  { name: "Himesh Reshammiya", image: himeshImg, path: "/artist/himesh", genre: "Pop / Rock" },
  { name: "Ariana Grande", image: arianaImg, path: "/artist/ariana", genre: "Pop" },
  { name: "Bad Bunny", image: badBunnyImg, path: "/artist/badbunny", genre: "Reggaeton" },
  { name: "Krsna", image: krsnaImg, path: "/artist/krsna", genre: "Lyrical Rap" },
  { name: "Emiway Bantai", image: emiwayImg, path: "/artist/emiway", genre: "Street Rap" },
  { name: "Atif Aslam", image: atifImg, path: "/artist/atif", genre: "Sufi / Rock" },
  { name: "Bruno Mars", image: brunoImg, path: "/artist/bruno", genre: "Funk / Soul" },
];

const genres = ["All", ...new Set(artists.map((artist) => artist.genre))];

const Artists = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [filteredArtists, setFilteredArtists] = useState(artists);

  useEffect(() => {
    let result = artists;
    if (selectedGenre !== "All") {
      result = result.filter((artist) => artist.genre === selectedGenre);
    }
    if (searchTerm) {
      result = result.filter((artist) =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredArtists(result);
  }, [searchTerm, selectedGenre]);

  return (
    <div className="w-full min-h-screen text-white bg-black relative overflow-hidden">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] top-1/2 transform perspective-500 rotateX(60deg) origin-top h-[150vh] opacity-30"></div>
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-pink-900/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
         </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-2">
              <span className="text-white">Discover</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Artists</span>
            </h1>
            <p className="text-gray-400 text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-400" />
              Explore genres from Pop to Sufi.
            </p>
          </div>

          <div className="relative group w-full md:w-80 z-20">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative flex items-center bg-[#121212] border border-white/10 rounded-full px-4 py-3">
              <Search className="w-5 h-5 text-gray-400 group-focus-within:text-pink-400 transition-colors" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full bg-transparent border-none outline-none text-white placeholder-gray-500 ml-3"
              />
              {searchTerm && (
                <X onClick={() => setSearchTerm("")} className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide mask-edges z-20 relative">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                selectedGenre === genre
                  ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-105"
                  : "bg-[#181818] text-gray-400 border-white/10 hover:border-white/30 hover:text-white hover:bg-[#222]"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {filteredArtists.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8">
            {filteredArtists.map((artist, idx) => (
              
              <div
                key={artist.name}
                onClick={() => navigate(artist.path)}
                style={{ animationDelay: `${idx * 50}ms` }}
                className="group relative flex flex-col items-center animate-fadeInUp opacity-0 fill-mode-forwards cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-pink-600/0 to-purple-600/0 group-hover:from-pink-600/20 group-hover:to-purple-600/20 rounded-2xl transition-all duration-500 -z-10 blur-xl"></div>

                <div className="relative w-full aspect-square mb-4 rounded-full overflow-hidden shadow-lg ring-4 ring-transparent group-hover:ring-pink-500/30 transition-all duration-300">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-12 h-12 bg-[#1db954] rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Play className="w-6 h-6 text-black fill-current ml-1" />
                    </div>
                  </div>
                </div>

                <div className="text-center z-10">
                  <h3 className="font-bold text-white text-lg truncate group-hover:text-pink-400 transition-colors">
                    {artist.name}
                  </h3>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <Music2 className="w-3 h-3 text-gray-500 group-hover:text-pink-500 transition-colors" />
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide group-hover:text-white transition-colors">
                      {artist.genre}
                    </p>
                  </div>
                </div>
              </div>

            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
             <Search className="w-16 h-16 mb-4 opacity-20" />
             <p className="text-xl font-bold">No artists found</p>
          </div>
        )}

      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .mask-edges {
            mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
    </div>
  );
};

export default Artists;