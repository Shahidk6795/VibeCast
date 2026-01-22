import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

// ✅ Updated Profile Image
const badBunnyImg = "https://ik.imagekit.io/VibeCast/images/badbunny.jpeg?updatedAt=1768896060813";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const BadBunny = () => {
  const navigate = useNavigate();

  const {
    playPlaylist,
    playPause,
    isPlaying,
    currentSongIndex,
    playlist,
    duration,
    setMiniPlayerVisible,
    // Import Shuffle state & function
    isShuffle,
    toggleShuffle
  } = useContext(PlayerContext);

  // Scroll to Top on Load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ ALL REAL LINKS INTEGRATED
  const songs = [
    { 
      name: "Chambea", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Chambea.mp3?updatedAt=1768896792857", 
      image: "https://ik.imagekit.io/VibeCast/images/Chambea.jpg?updatedAt=1768896060835", 
      durationDisplay: "3:16", 
      artist: "Bad Bunny" 
    },
    { 
      name: "MIA", 
      path: "https://ik.imagekit.io/VibeCast/music/music/MIA.mp3?updatedAt=1768896965025", 
      image: "https://ik.imagekit.io/VibeCast/images/MIA.jpg?updatedAt=1768896069210", 
      durationDisplay: "3:30", 
      artist: "Bad Bunny, Drake" 
    },
    { 
      name: "La Noche de Anoche", 
      path: "https://ik.imagekit.io/VibeCast/music/music/La_Noche.mp3?updatedAt=1768896955066", 
      image: "https://ik.imagekit.io/VibeCast/images/La_Noche.jpg?updatedAt=1768896069001", 
      durationDisplay: "3:23", 
      artist: "Bad Bunny, Rosalía" 
    },
    { 
      name: "Vete", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Vete.mp3?updatedAt=1768897109849", 
      image: "https://ik.imagekit.io/VibeCast/images/Vete.jpg?updatedAt=1768896075569", 
      durationDisplay: "3:12", 
      artist: "Bad Bunny" 
    },
    { 
      name: "Efecto", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Efecto.mp3?updatedAt=1768896777269", 
      image: "https://ik.imagekit.io/VibeCast/images/Efecto.jpg?updatedAt=1768896061377", 
      durationDisplay: "3:33", 
      artist: "Bad Bunny" 
    },
    { 
      name: "Ojitos Lindos", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Ojitos_Lindos.mp3?updatedAt=1768897023721", 
      image: "https://ik.imagekit.io/VibeCast/images/Ojitos_Lindos.jpg?updatedAt=1768896069550", 
      durationDisplay: "4:18", 
      artist: "Bad Bunny, Bomba Estéreo" 
    },
    { 
      name: "Tití Me Preguntó", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Titi_Me_Pregunto.mp3?updatedAt=1768897117793", 
      image: "https://ik.imagekit.io/VibeCast/images/Titi_Me_Pregunto.jpg?updatedAt=1768896075610", 
      durationDisplay: "4:03", 
      artist: "Bad Bunny" 
    },
    { 
      name: "Yonaguni", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Yonaguni.mp3?updatedAt=1768897114390", 
      image: "https://ik.imagekit.io/VibeCast/images/Yonaguni.jpg?updatedAt=1768896075429", 
      durationDisplay: "3:26", 
      artist: "Bad Bunny" 
    },
    { 
      name: "Callaíta", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Callaita.mp3?updatedAt=1768896808580", 
      image: "https://ik.imagekit.io/VibeCast/images/Callaita.jpg?updatedAt=1768896061710", 
      durationDisplay: "4:10", 
      artist: "Bad Bunny, Tainy" 
    },
    { 
      name: "Me Porto Bonito", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Me_Porto_Bonito.mp3?updatedAt=1768896951655", 
      image: "https://ik.imagekit.io/VibeCast/images/Me_Porto_Bonito.jpg?updatedAt=1768896069199", 
      durationDisplay: "2:58", 
      artist: "Bad Bunny, Chencho Corleone" 
    },
    { 
      name: "Dákiti", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Dakiti.mp3?updatedAt=1768896777535", 
      image: "https://ik.imagekit.io/VibeCast/images/Dakiti.jpg?updatedAt=1768896061363", 
      durationDisplay: "3:25", 
      artist: "Bad Bunny, Jhay Cortez" 
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
    // ✅ Added select-none and cursor-default
    <div className="min-h-screen text-white flex flex-col items-center overflow-hidden bg-black select-none cursor-default">
      <style jsx="true">{`
        /* BAD BUNNY THEME: Sunset Orange / Heat */
        .artist-header {
          background-image: linear-gradient(to bottom, #ea580c, #121212);
        }
        .artist-accent {
          background-color: #f97316; /* Bright Orange Accent */
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
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <div className="flex items-end max-w-5xl mx-auto h-full px-6 pb-8">
          <img
            src={badBunnyImg}
            alt="Bad Bunny"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-orange-600 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Bad Bunny</h1>
            
            {/* Custom Bio for Benito */}
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " El Conejo Malo. The King of Latin Trap. 🐰🔥 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              11 songs • Reggaeton, Trap & Global Hits.
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
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-orange-500/40 transition-all duration-300 cursor-pointer"
            >
              {isPlaying && playlist.length && playlist[0].name === songs[0].name ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 pl-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            
            {/* Functional Shuffle Button */}
            <button 
              onClick={toggleShuffle} 
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-orange-500" : "text-gray-400"}`}
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
                  <span className="text-orange-500 animate-pulse">
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-orange-500' : 'text-white'}`}>
                  {song.name}
                </span>
                <span className="text-sm font-light text-gray-400 group-hover:text-gray-300">
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

export default BadBunny;