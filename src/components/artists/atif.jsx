import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const atifImg = "https://ik.imagekit.io/VibeCast/images/atif.jpg?updatedAt=1768896060776";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Atif = () => {
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
      name: "Dil Mere Na Sune", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Dil_Mere_Na_Sune.mp3?updatedAt=1768896819901", 
      image: "https://ik.imagekit.io/VibeCast/images/Dil_Mere_Na_Sune.jpg?updatedAt=1768896061353", 
      durationDisplay: "4:05", 
      artist: "Atif Aslam" 
    },
    { 
      name: "Tere Sang Yara", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tere_Sang_Yara.mp3?updatedAt=1768897122279", 
      image: "https://ik.imagekit.io/VibeCast/images/Tere_Sang_Yara.jpg?updatedAt=1768896075253", 
      durationDisplay: "4:12", 
      artist: "Atif Aslam" 
    },
    { 
      name: "Dil Diyan Gallan", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Dil_Diyan_Gallan.mp3?updatedAt=1768896758620", 
      image: "https://ik.imagekit.io/VibeCast/images/Dil_Diyan_Gallan.jpg?updatedAt=1768896061376", 
      durationDisplay: "4:20", 
      artist: "Atif Aslam" 
    },
    { 
      name: "Tera Hone Laga Hoon", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tera_Hone_Laga_Hoon.mp3?updatedAt=1768897113415", 
      image: "https://ik.imagekit.io/VibeCast/images/Tera_Hone_Laga_Hoon.jpg?updatedAt=1768896075249", 
      durationDisplay: "4:18", 
      artist: "Atif Aslam, Alisha Chinai" 
    },
    { 
      name: "Piya O Re Piya", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Piya_O_Re_Piya.mp3?updatedAt=1768897037030", 
      image: "https://ik.imagekit.io/VibeCast/images/Piya_O_Re_Piya.jpg?updatedAt=1768896069279", 
      durationDisplay: "4:10", 
      artist: "Atif Aslam, Shreya Ghoshal" 
    },
    { 
      name: "Tera Hua", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tera_Hua.mp3?updatedAt=1768897096926", 
      image: "https://ik.imagekit.io/VibeCast/images/Tera_Hua.jpg?updatedAt=1768896075207", 
      durationDisplay: "3:58", 
      artist: "Atif Aslam" 
    },
    { 
      name: "O Saathi", 
      path: "https://ik.imagekit.io/VibeCast/music/music/O_Saathi.mp3?updatedAt=1768897023827", 
      image: "https://ik.imagekit.io/VibeCast/images/O_Saathi.jpg?updatedAt=1768896069217", 
      durationDisplay: "4:06", 
      artist: "Atif Aslam" 
    },
    { 
      name: "Jeena Jeena", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Jeena_Jeena.mp3?updatedAt=1768896794483", 
      image: "https://ik.imagekit.io/VibeCast/images/Jeena_Jeena.jpg?updatedAt=1768896068484", 
      durationDisplay: "3:45", 
      artist: "Atif Aslam" 
    },
    { 
      name: "Dekhte Dekhte", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Dekhte_Dekhte.mp3?updatedAt=1768896817874", 
      image: "https://ik.imagekit.io/VibeCast/images/Dekhte_Dekhte.jpg?updatedAt=1768896061823", 
      durationDisplay: "4:00", 
      artist: "Atif Aslam" 
    },
    { 
      name: "Tu Jaane Na", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tu_Jaane_Na.mp3?updatedAt=1768897122338", 
      image: "https://ik.imagekit.io/VibeCast/images/Tu_Jaane_Na.jpg?updatedAt=1768896075568", 
      durationDisplay: "4:15", 
      artist: "Atif Aslam" 
    },
    { 
      name: "Be Intehaan", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Be_Intehaan.mp3?updatedAt=1768896838779", 
      image: "https://ik.imagekit.io/VibeCast/images/Be_Intehaan.jpg?updatedAt=1768896061661", 
      durationDisplay: "4:08", 
      artist: "Atif Aslam, Sunidhi Chauhan" 
    },
    { 
      name: "Tajdar E Haram", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tajdar_E_Haram.mp3?updatedAt=1768897125777", 
      image: "https://ik.imagekit.io/VibeCast/images/Tajdar_E_Haram.jpg?updatedAt=1768896074663", 
      durationDisplay: "5:02", 
      artist: "Atif Aslam" 
    },
    { 
      name: "Pehli Dafa", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Pehli_Dafa.mp3?updatedAt=1768897036421", 
      image: "https://ik.imagekit.io/VibeCast/images/Pehli_Dafa.jpg?updatedAt=1768896069251", 
      durationDisplay: "4:11", 
      artist: "Atif Aslam" 
    },
    { 
      name: "Tere Bin", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tere_Bin.mp3?updatedAt=1768897091909", 
      image: "https://ik.imagekit.io/VibeCast/images/Tere_Bin.jpg?updatedAt=1768896075206", 
      durationDisplay: "4:07", 
      artist: "Atif Aslam" 
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
        /* ATIF ASLAM THEME: Mystic Emerald Green */
        .artist-header {
          background-image: linear-gradient(to bottom, #047857, #121212);
        }
        .artist-accent {
          background-color: #10b981; /* Emerald Accent */
          color: white;
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
            src={atifImg}
            alt="Atif Aslam"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-emerald-600 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Atif Aslam</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " A voice that transcends borders. The Rockstar of the nation. 🎸 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              14 songs • Soulful, Rock & Sufi.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-emerald-500/40 transition-all duration-300 cursor-pointer"
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
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-emerald-500" : "text-gray-400"}`}
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
                  <span className="text-emerald-500 animate-pulse">
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-emerald-500' : 'text-white'}`}>
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

export default Atif;