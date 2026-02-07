import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const guruImg = "https://ik.imagekit.io/VibeCast/images/guru.jpeg?updatedAt=1768896061745";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const GuruRandhawa = () => {
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
      name: "High Rated Gabru", 
      path: "https://ik.imagekit.io/VibeCast/music/music/High_Rated_Gabru.mp3?updatedAt=1768896778927", 
      image: "https://ik.imagekit.io/VibeCast/images/High_Rated_Gabru.jpg?updatedAt=1768896061708", 
      durationDisplay: "3:34", 
      artist: "Guru Randhawa" 
    },
    { 
      name: "Lahore", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Lahore.mp3?updatedAt=1768896963175", 
      image: "https://ik.imagekit.io/VibeCast/images/Lahore.jpg?updatedAt=1768896069397", 
      durationDisplay: "3:16", 
      artist: "Guru Randhawa" 
    },
    { 
      name: "Suit Suit", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Suit_Suit.mp3?updatedAt=1768897064358", 
      image: "https://ik.imagekit.io/VibeCast/images/Suit_Suit.jpg?updatedAt=1768896074833", 
      durationDisplay: "3:10", 
      artist: "Guru Randhawa, Arjun" 
    },
    { 
      name: "Patola", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Patola.mp3?updatedAt=1768896946665", 
      image: "https://ik.imagekit.io/VibeCast/images/Patola.jpg?updatedAt=1768896069413", 
      durationDisplay: "3:06", 
      artist: "Guru Randhawa, Bohemia" 
    },
    { 
      name: "Ban Ja Rani", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Ban_Ja_Rani.mp3?updatedAt=1768896797119", 
      image: "https://ik.imagekit.io/VibeCast/images/Ban_Ja_Rani.jpg?updatedAt=1768896061518", 
      durationDisplay: "3:46", 
      artist: "Guru Randhawa" 
    },
    { 
      name: "Made in India", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Made_In_India.mp3?updatedAt=1768896979344", 
      image: "https://ik.imagekit.io/VibeCast/images/Made_In_India.jpg?updatedAt=1768896069435", 
      durationDisplay: "3:25", 
      artist: "Guru Randhawa" 
    },
    { 
      name: "Ishare Tere", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Ishare_Tere.mp3?updatedAt=1768896768579", 
      image: "https://ik.imagekit.io/VibeCast/images/Ishare_Tere.jpg?updatedAt=1768896064892", 
      durationDisplay: "3:10", 
      artist: "Guru Randhawa, Dhvani Bhanushali" 
    },
    { 
      name: "Slowly Slowly", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Slowly_Slowly.mp3?updatedAt=1768897052990", 
      image: "https://ik.imagekit.io/VibeCast/images/Slowly_Slowly.jpg?updatedAt=1768896074141", 
      durationDisplay: "3:26", 
      artist: "Guru Randhawa, Pitbull" 
    },
    { 
      name: "Naach Meri Rani", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Naach_Meri_Rani.mp3?updatedAt=1768896979747", 
      image: "https://ik.imagekit.io/VibeCast/images/Naach_Meri_Rani.jpg?updatedAt=1768896069216", 
      durationDisplay: "3:30", 
      artist: "Guru Randhawa, Nikhita Gandhi" 
    },
    { 
      name: "Dance Meri Rani", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Dance_Meri_Rani.mp3?updatedAt=1768896782609", 
      image: "https://ik.imagekit.io/VibeCast/images/Dance_Meri_Rani.jpg?updatedAt=1768896060901", 
      durationDisplay: "3:42", 
      artist: "Guru Randhawa, Zahrah S Khan" 
    },
    { 
      name: "Surma Surma", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Surma_Surma.mp3?updatedAt=1768897100925", 
      image: "https://ik.imagekit.io/VibeCast/images/Surma_Surma.jpg?updatedAt=1768896074096", 
      durationDisplay: "3:24", 
      artist: "Guru Randhawa, Jay Sean" 
    },
    { 
      name: "Morni Banke", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Morni_Banke.mp3?updatedAt=1768896925306", 
      image: "https://ik.imagekit.io/VibeCast/images/Morni_Banke.jpg?updatedAt=1768896069517", 
      durationDisplay: "3:18", 
      artist: "Guru Randhawa, Neha Kakkar" 
    },
    { 
      name: "Kaun Nachdi", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Kaun_Nachdi.mp3?updatedAt=1768896892262", 
      image: "https://ik.imagekit.io/VibeCast/images/Kaun_Nachdi.jpg?updatedAt=1768896068493", 
      durationDisplay: "3:02", 
      artist: "Guru Randhawa, Neeti Mohan" 
    },
    { 
      name: "Baby Girl", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Baby_Girl.mp3?updatedAt=1768896783015", 
      image: "https://ik.imagekit.io/VibeCast/images/Baby_Girl.jpg?updatedAt=1768896060896", 
      durationDisplay: "3:23", 
      artist: "Guru Randhawa, Dhvani Bhanushali" 
    },
    { 
      name: "Lagdi Lahore Di", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Lagdi_Lahore_Di.mp3?updatedAt=1768896937427", 
      image: "https://ik.imagekit.io/VibeCast/images/Lagdi_Lahore_Di.jpg?updatedAt=1768896069062", 
      durationDisplay: "3:35", 
      artist: "Guru Randhawa, Tulsi Kumar" 
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
        event.stopImmediatePropagation();
        handlePlayPause();
      }
    };
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [playlist, handlePlayPause]);

  return (
    <div className="min-h-screen text-white flex flex-col items-center overflow-hidden bg-black select-none cursor-default">
      <style jsx="true">{`
        /* GURU RANDHAWA THEME: Electric Purple */
        .artist-header {
          background-image: linear-gradient(to bottom, #7c3aed, #121212);
        }
        .artist-accent {
          background-color: #8b5cf6; /* Violet Accent */
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
            src={guruImg}
            alt="Guru Randhawa"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-violet-600 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Guru Randhawa</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " High Rated Gabru. The King of Pop. 🕺🏻💜 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              15 songs • Punjab Pop & Bollywood Hits.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-violet-500/40 transition-all duration-300 cursor-pointer"
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
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-violet-500" : "text-gray-400"}`}
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
                  <span className="text-violet-500 animate-pulse">
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-violet-500' : 'text-white'}`}>
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

export default GuruRandhawa;