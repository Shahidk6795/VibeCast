import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

// ✅ Updated Profile Image
const arijitImg = "https://ik.imagekit.io/VibeCast/images/arijit.jpeg?updatedAt=1768896061413";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Arijit = () => {
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
      name: "Tum Hi Ho", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tum_Hi_Ho.mp3?updatedAt=1768897116559", 
      image: "https://ik.imagekit.io/VibeCast/images/TumHiHo.jpg?updatedAt=1768896075470", 
      durationDisplay: "4:22", 
      artist: "Arijit Singh" 
    },
    { 
      name: "Channa Mereya", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Channa_Mereya.mp3?updatedAt=1768896757642", 
      image: "https://ik.imagekit.io/VibeCast/images/Channa_Mereya.jpg?updatedAt=1768896060813", 
      durationDisplay: "4:49", 
      artist: "Arijit Singh" 
    },
    { 
      name: "Raabta", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Raabta.mp3?updatedAt=1768897016606", 
      image: "https://ik.imagekit.io/VibeCast/images/raabta.jpg?updatedAt=1768896069430", 
      durationDisplay: "4:43", 
      artist: "Arijit Singh, Hamsika Iyer" 
    },
    { 
      name: "Kun Faya Kun", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Kun_Faya_Kun.mp3?updatedAt=1768897056804", 
      image: "https://ik.imagekit.io/VibeCast/images/Kun%20_Faya_Kun.jpg?updatedAt=1768896068951", 
      durationDisplay: "7:51", 
      artist: "A.R. Rahman, Javed Ali, Mohit Chauhan" 
    },
    { 
      name: "Ae Dil Hai Mushkil", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Ae_Dil_Hai_Mushkil.mp3?updatedAt=1768896866499", 
      image: "https://ik.imagekit.io/VibeCast/images/AeDil.jpg?updatedAt=1768896060919", 
      durationDisplay: "4:29", 
      artist: "Arijit Singh" 
    },
    { 
      name: "Muskurane", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Muskurane.mp3?updatedAt=1768897054237", 
      image: "https://ik.imagekit.io/VibeCast/images/muskurane.jpg?updatedAt=1768896069394", 
      durationDisplay: "5:35", 
      artist: "Arijit Singh" 
    },
    { 
      name: "Phir Bhi Tumko Chahunga", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Phir_Bhi_Tumko_Chahunga.mp3?updatedAt=1768897087788", 
      image: "https://ik.imagekit.io/VibeCast/images/phirbhi.jpg?updatedAt=1768896069443", 
      durationDisplay: "4:48", 
      artist: "Arijit Singh, Shashaa Tirupati" 
    },
    { 
      name: "Hawayein", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Hawayein.mp3?updatedAt=1768896845646", 
      image: "https://ik.imagekit.io/VibeCast/images/Hawayein.jpg?updatedAt=1768896061409", 
      durationDisplay: "4:49", 
      artist: "Arijit Singh" 
    },
    { 
      name: "Kabira", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Kabira.mp3?updatedAt=1768896958518", 
      image: "https://ik.imagekit.io/VibeCast/images/Kabira.jpg?updatedAt=1768896068501", 
      durationDisplay: "3:43", 
      artist: "Arijit Singh, Harshdeep Kaur" 
    },
    { 
      name: "Soch Na Sake", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Soch_Na_Sake.mp3?updatedAt=1768897081275", 
      image: "https://ik.imagekit.io/VibeCast/images/Soch_Na_Sake.jpg?updatedAt=1768896074023", 
      durationDisplay: "4:31", 
      artist: "Arijit Singh, Tulsi Kumar" 
    },
    { 
      name: "Janam Janam", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Janam_Janam.mp3?updatedAt=1768896809603", 
      image: "https://ik.imagekit.io/VibeCast/images/Janam_Janam.jpg?updatedAt=1768896068712", 
      durationDisplay: "4:23", 
      artist: "Arijit Singh, Antara Mitra" 
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
        /* ARIJIT SINGH THEME: Soulful Indigo/Blue */
        .artist-header {
          background-image: linear-gradient(to bottom, #4338ca, #121212);
        }
        .artist-accent {
          background-color: #6366f1; /* Indigo Accent */
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
            src={arijitImg}
            alt="Arijit Singh"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-indigo-600 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Arijit Singh</h1>
            
            {/* Custom Bio for Arijit */}
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " The voice of every broken heart and every new love. 💙 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              11 songs • Soulful, Romantic & Melody.
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
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-indigo-500/40 transition-all duration-300 cursor-pointer"
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
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-indigo-400" : "text-gray-400"}`}
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
                  <span className="text-indigo-400 animate-pulse">
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-indigo-400' : 'text-white'}`}>
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

export default Arijit;