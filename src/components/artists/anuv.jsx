import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const anuvImg = "https://ik.imagekit.io/VibeCast/images/anuv.jpeg?updatedAt=1768896060738";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const AnuvJain = () => {
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
      name: "Baarishein", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Baarishein.mp3?updatedAt=1768896773108", 
      image: "https://ik.imagekit.io/VibeCast/images/Baarishein.jpg?updatedAt=1768896061513", 
      durationDisplay: "3:27", 
      artist: "Anuv Jain" 
    },
    { 
      name: "Alag Aasmaan", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Alag_Aasmaan.mp3?updatedAt=1768896784379", 
      image: "https://ik.imagekit.io/VibeCast/images/Alag_Aasmaan.jpg?updatedAt=1768896060813", 
      durationDisplay: "3:32", 
      artist: "Anuv Jain" 
    },
    { 
      name: "Husn", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Husn.mp3?updatedAt=1768896796260", 
      image: "https://ik.imagekit.io/VibeCast/images/Husn.jpg?updatedAt=1768896064658", 
      durationDisplay: "3:38", 
      artist: "Anuv Jain" 
    },
    { 
      name: "Gul", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Gul.mp3?updatedAt=1768896783861", 
      image: "https://ik.imagekit.io/VibeCast/images/Gul.jpg?updatedAt=1768896061491", 
      durationDisplay: "3:35", 
      artist: "Anuv Jain" 
    },
    { 
      name: "Mishri", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Mishri.mp3?updatedAt=1768896966716", 
      image: "https://ik.imagekit.io/VibeCast/images/Mishri.jpg?updatedAt=1768896069206", 
      durationDisplay: "3:20", 
      artist: "Anuv Jain" 
    },
    { 
      name: "Maula", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Maula.mp3?updatedAt=1768896983898", 
      image: "https://ik.imagekit.io/VibeCast/images/Maula.jpg?updatedAt=1768896069156", 
      durationDisplay: "3:46", 
      artist: "Anuv Jain" 
    },
    { 
      name: "Riha", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Riha.mp3?updatedAt=1768897060267", 
      image: "https://ik.imagekit.io/VibeCast/images/Riha.jpg?updatedAt=1768896069308", 
      durationDisplay: "3:29", 
      artist: "Anuv Jain" 
    },
    { 
      name: "Ocean", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Ocean.mp3?updatedAt=1768897008763", 
      image: "https://ik.imagekit.io/VibeCast/images/Ocean.jpg?updatedAt=1768896069216", 
      durationDisplay: "3:45", 
      artist: "Anuv Jain" 
    },
    { 
      name: "Mazaak", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Mazaak.mp3?updatedAt=1768896977307", 
      image: "https://ik.imagekit.io/VibeCast/images/Mazaak.jpg?updatedAt=1768896069449", 
      durationDisplay: "3:30", 
      artist: "Anuv Jain" 
    },
    { 
      name: "Antariksh", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Antariksh.mp3?updatedAt=1768896748753", 
      image: "https://ik.imagekit.io/VibeCast/images/Antariksh.jpg?updatedAt=1768896060910", 
      durationDisplay: "3:52", 
      artist: "Anuv Jain" 
    },
    { 
      name: "Meri Baaton Mein Tu", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Meri_Baaton_Mein_Tu.mp3?updatedAt=1768896976139", 
      image: "https://ik.imagekit.io/VibeCast/images/Meri_Baaton_Mein_Tu.jpg?updatedAt=1768896069358", 
      durationDisplay: "3:10", 
      artist: "Anuv Jain" 
    },
    { 
      name: "Jo Tum Mere Ho", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Jo_Tum_Mere_Ho.mp3?updatedAt=1768896958329", 
      image: "https://ik.imagekit.io/VibeCast/images/Jo_Tum_Mere_Ho.jpg?updatedAt=1768896068730", 
      durationDisplay: "4:09", 
      artist: "Anuv Jain" 
    },
    { 
      name: "Inaam", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Inaam.mp3?updatedAt=1768896828418", 
      image: "https://ik.imagekit.io/VibeCast/images/Inaam.jpg?updatedAt=1768896064714", 
      durationDisplay: "3:18", 
      artist: "Anuv Jain" 
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
        /* ANUV JAIN THEME: Warm Amber/Indie */
        .artist-header {
          background-image: linear-gradient(to bottom, #b45309, #121212);
        }
        .artist-accent {
          background-color: #f59e0b; 
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
            src={anuvImg}
            alt="Anuv Jain"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-amber-600 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Anuv Jain</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " Just a boy with a guitar and stories to tell. 🎸 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              13 songs • Emotional, Acoustic & Indie.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-amber-500/40 transition-all duration-300 cursor-pointer"
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
            
            <button 
              onClick={toggleShuffle} 
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-amber-500" : "text-gray-400"}`}
            >
              SHUFFLE
            </button>
          </div>

          <div className="grid grid-cols-[16px_48px_1fr_60px] gap-4 py-2 border-b border-gray-700/50 text-gray-400 text-xs uppercase font-semibold mb-2 clear-bg-strip pointer-events-none">
            <div>#</div>
            <div></div>
            <div>Title</div>
            <div className="text-right">Time</div>
          </div>

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
                  <span className="text-amber-500 animate-pulse">
                    <svg className="w-4 h-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 19v-14h3v14h-3zm8 0V5h3v14h-3z" />
                    </svg>
                  </span>
                ) : (
                  <span className="group-hover:hidden">{idx + 1}</span>
                )}
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-amber-500' : 'text-white'}`}>
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

export default AnuvJain;