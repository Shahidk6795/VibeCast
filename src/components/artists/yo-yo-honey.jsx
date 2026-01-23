import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const yoYoImg = "https://ik.imagekit.io/VibeCast/images/yo_yo_honey.jpg";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const YoYoHoney = () => {
  const navigate = useNavigate();

  const {
    playPlaylist,
    playPause,
    isPlaying,
    currentSongIndex,
    playlist, 
    duration,
    setMiniPlayerVisible,
    isShuffle, 
    toggleShuffle 
  } = useContext(PlayerContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const songs = [
    { 
      name: "Blue Eyes", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Blue_Eyes.mp3?updatedAt=1768896798744", 
      image: "https://ik.imagekit.io/VibeCast/images/Blue_Eyes.jpg?updatedAt=1768896061516", 
      durationDisplay: "3:43", 
      artist: "Yo Yo Honey Singh" 
    },
    { 
      name: "Desi Kalakaar", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Desi_Kalakaar.mp3?updatedAt=1768897065700", 
      image: "https://ik.imagekit.io/VibeCast/images/Desi_Kalakaar.jpg?updatedAt=1768896061357", 
      durationDisplay: "4:00", 
      artist: "Yo Yo Honey Singh" 
    },
    { 
      name: "Lungi Dance", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Lungi_Dance.mp3?updatedAt=1768896957819", 
      image: "https://ik.imagekit.io/VibeCast/images/Lungi_Dance.jpg?updatedAt=1768896069084", 
      durationDisplay: "3:58", 
      artist: "Yo Yo Honey Singh" 
    },
    { 
      name: "Char Bottle Vodka", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Char_Bottle.mp3?updatedAt=1768896787609", 
      image: "https://ik.imagekit.io/VibeCast/images/Char_Bottle.jpg?updatedAt=1768896061690", 
      durationDisplay: "4:09", 
      artist: "Yo Yo Honey Singh" 
    },
    { 
      name: "Brown Rang", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Brown_Rang.mp3?updatedAt=1768896686610", 
      image: "https://ik.imagekit.io/VibeCast/images/Brown_Rang.jpg?updatedAt=1768896060864", 
      durationDisplay: "3:42", 
      artist: "Yo Yo Honey Singh" 
    },
    { 
      name: "Angreji Beat", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Angreji_Beat.mp3?updatedAt=1768896828932", 
      image: "https://ik.imagekit.io/VibeCast/images/Angreji_Beat.jpg?updatedAt=1768896060720", 
      durationDisplay: "3:58", 
      artist: "Yo Yo Honey Singh, Gippy Grewal" 
    },
    { 
      name: "Party All Night", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Party_All_Night.mp3?updatedAt=1768897003809", 
      image: "https://ik.imagekit.io/VibeCast/images/Party_All_Night.jpg?updatedAt=1768896069595", 
      durationDisplay: "3:54", 
      artist: "Yo Yo Honey Singh" 
    },
    { 
      name: "Aao Raja", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Aao_Raja.mp3?updatedAt=1768896814555", 
      image: "https://ik.imagekit.io/VibeCast/images/Aao_Raja.jpg?updatedAt=1768896060515", 
      durationDisplay: "4:34", 
      artist: "Yo Yo Honey Singh, Neha Kakkar" 
    },
    { 
      name: "High Heels", 
      path: "https://ik.imagekit.io/VibeCast/music/music/High_Heels.mp3?updatedAt=1768896753293", 
      image: "https://ik.imagekit.io/VibeCast/images/High_Heels.jpg?updatedAt=1768896061736", 
      durationDisplay: "3:32", 
      artist: "Yo Yo Honey Singh, Jaz Dhami" 
    },
    { 
      name: "Loca", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Locaa.mp3?updatedAt=1768896959301", 
      image: "https://ik.imagekit.io/VibeCast/images/Locaa.jpg?updatedAt=1768896068989", 
      durationDisplay: "3:30", 
      artist: "Yo Yo Honey Singh" 
    },
    { 
      name: "Makhna", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Makhna.mp3?updatedAt=1768896959423", 
      image: "https://ik.imagekit.io/VibeCast/images/Makhna.jpg?updatedAt=1768896069235", 
      durationDisplay: "3:25", 
      artist: "Yo Yo Honey Singh, Neha Kakkar, Singhsta" 
    },
    { 
      name: "Dil Chori", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Dil_Chori.mp3?updatedAt=1768896736375", 
      image: "https://ik.imagekit.io/VibeCast/images/Dil_Chori.jpg?updatedAt=1768896061668", 
      durationDisplay: "3:47", 
      artist: "Yo Yo Honey Singh, Simar Kaur, Ishers" 
    },
    { 
      name: "One Bottle Down", 
      path: "https://ik.imagekit.io/VibeCast/music/music/One_Bottle_Down.mp3?updatedAt=1768896965998", 
      image: "https://ik.imagekit.io/VibeCast/images/One_Bottle_Down.jpg?updatedAt=1768896069350", 
      durationDisplay: "3:45", 
      artist: "Yo Yo Honey Singh" 
    },
  ];
  
  const handlePlayPause = () => {
    if (!playlist.length || playlist[0].name !== songs[0].name) {
      playPlaylist(songs, 0);
    } else {
      playPause();
    }
    setMiniPlayerVisible(true);
  };

  const selectSong = (index) => {
    playPlaylist(songs, index, true);
    setMiniPlayerVisible(true);
  };

  const goBack = () => {
    navigate("/");
  };
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        handlePlayPause();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playlist, handlePlayPause]);


  return (
    <div className="min-h-screen text-white flex flex-col items-center overflow-hidden bg-black select-none cursor-default">
      <style jsx="true">{`
        /* GOLD Theme */
        .artist-header {
          background-image: linear-gradient(to bottom, #Eab308, #121212);
        }
        .artist-accent {
          background-color: #Eab308; 
          color: black;
        }
        .clear-bg-on-hover:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .clear-bg-active {
          background-color: rgba(255, 255, 255, 0.2);
        }
        .clear-bg-strip {
          background-color: rgba(18, 18, 18, 0.1);
        }
      `}</style>

      {/* Header */}
      <div className="w-full h-80 pt-16 relative artist-header z-10 shadow-lg">
        <button
          onClick={goBack}
          className="absolute top-4 left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 z-30 transition-transform hover:scale-110 cursor-pointer"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <div className="flex items-end max-w-5xl mx-auto h-full px-6 pb-8">
          <img
            src={yoYoImg}
            alt="Yo Yo Honey Singh"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-black pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-black/80 flex items-center gap-1">
               <span className="bg-black text-yellow-500 px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-6xl md:text-8xl font-black mb-2 drop-shadow-lg tracking-tight">Yo Yo Honey Singh</h1>
            <p className="text-lg font-medium text-white/90 mt-2 italic">
              " The revolutionary icon who brought Desi Hip-Hop to the world. 👑 "
            </p>
            <p className="text-sm font-normal text-white/60 mt-1">
               13 Songs • 1 hr 15 min
            </p>
          </div>
        </div>
      </div>

      {/* Song List */}
      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          {/* Controls: Play & Shuffle */}
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-yellow-500/40 transition-all duration-300 cursor-pointer"
            >
              {isPlaying && playlist.length && playlist[0].name === songs[0].name ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 pl-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            
            {/* ✅ SHUFFLE BUTTON: Original Style, but functional */}
            {/* If toggleShuffle is undefined, it means you haven't updated PlayerContext yet! */}
            <button 
              onClick={toggleShuffle} 
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-yellow-500" : "text-gray-400"}`}
            >
              SHUFFLE
            </button>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-[16px_48px_1fr_60px] gap-4 py-2 border-b border-gray-700/50 text-gray-400 text-xs uppercase font-semibold mb-2 clear-bg-strip pointer-events-none">
            <div>#</div>
            <div></div>
            <div>Title</div>
            <div className="text-right">Time</div>
          </div>

          {/* List */}
          {songs.map((song, idx) => (
            <div
              key={idx}
              onClick={() => selectSong(idx)}
              className={`group grid grid-cols-[16px_48px_1fr_60px] items-center gap-4 px-2 py-2 rounded-md cursor-default transition duration-200 clear-bg-on-hover ${
                playlist.length && playlist[currentSongIndex]?.name === song.name
                  ? "clear-bg-active text-white"
                  : "text-gray-400"
              }`}
            >
              <div className="font-medium text-sm text-center">
                {playlist.length &&
                playlist[currentSongIndex]?.name === song.name &&
                isPlaying ? (
                  <span className="text-yellow-500 animate-pulse">
                    <svg className="w-4 h-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 19v-14h3v14h-3zm8 0V5h3v14h-3z" />
                    </svg>
                  </span>
                ) : (
                  <span className="group-hover:hidden">{idx + 1}</span>
                )}
                 {/* Play icon on hover */}
                <svg className="w-4 h-4 hidden group-hover:block text-white" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              <img
                src={song.image}
                alt={song.name}
                className="w-12 h-12 object-cover rounded shadow-md pointer-events-none"
              />
              
              <div className="flex flex-col truncate">
                <span className="text-base font-semibold truncate">
                  {song.name}
                </span>

                <span className="text-sm font-light text-gray-400">
                  {song.artist}
                </span>
              </div>
              
              <div className="text-right text-sm text-gray-400">
                {playlist.length &&
                playlist[currentSongIndex]?.name === song.name
                  ? formatTime(duration)
                  : song.durationDisplay}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default YoYoHoney;