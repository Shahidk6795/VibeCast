import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const shreyaImg = "https://ik.imagekit.io/VibeCast/images/shreya.jpeg?updatedAt=1768896070881";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const ShreyaGhoshal = () => {
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
      name: "Tere Bina", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tere_Bina.mp3?updatedAt=1768897117325", 
      image: "https://ik.imagekit.io/VibeCast/images/Tere_Bina.jpg?updatedAt=1768896075229", 
      durationDisplay: "4:05", 
      artist: "A.R. Rahman, Shreya Ghoshal" 
    },
    { 
      name: "Pyaar Ki Ek Kahani", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Pyaar_Ki_Ek_Kahani.mp3?updatedAt=1768897100453", 
      image: "https://ik.imagekit.io/VibeCast/images/Pyaar_Ki_Ek_Kahani.jpg?updatedAt=1768896069373", 
      durationDisplay: "4:30", 
      artist: "Sonu Nigam, Shreya Ghoshal" 
    },
    { 
      name: "Agar Tum Mil Jao", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Agar_Tum_Mil_Jao.mp3?updatedAt=1768896914872", 
      image: "https://ik.imagekit.io/VibeCast/images/Agar_Tum_Mil_Jao.jpg?updatedAt=1768896060758", 
      durationDisplay: "4:40", 
      artist: "Shreya Ghoshal" 
    },
    { 
      name: "Saans", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Saans.mp3?updatedAt=1768897084837", 
      image: "https://ik.imagekit.io/VibeCast/images/Saans.jpg?updatedAt=1768896069411", 
      durationDisplay: "5:23", 
      artist: "Shreya Ghoshal, Mohit Chauhan" 
    },
    { 
      name: "Balma", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Balma.mp3?updatedAt=1768896767774", 
      image: "https://ik.imagekit.io/VibeCast/images/Balma.jpg?updatedAt=1768896061906", 
      durationDisplay: "3:30", 
      artist: "Shreya Ghoshal, Sriram" 
    },
    { 
      name: "Teri Meri", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Teri_Meri.mp3?updatedAt=1768897064355", 
      image: "https://ik.imagekit.io/VibeCast/images/Teri_Meri.jpg?updatedAt=1768896075252", 
      durationDisplay: "5:20", 
      artist: "Rahat Fateh Ali Khan, Shreya Ghoshal" 
    },
    { 
      name: "Nagada Sang Dhol", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Nagada_Sang_Dhol.mp3?updatedAt=1768897013002", 
      image: "https://ik.imagekit.io/VibeCast/images/Nagada_Sang_Dhol.jpg?updatedAt=1768896069150", 
      durationDisplay: "4:33", 
      artist: "Shreya Ghoshal, Osman Mir" 
    },
    { 
      name: "Teri Ore", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Teri_Ore.mp3?updatedAt=1768897061115", 
      image: "https://ik.imagekit.io/VibeCast/images/Teri_Ore.jpg?updatedAt=1768896075509", 
      durationDisplay: "5:38", 
      artist: "Rahat Fateh Ali Khan, Shreya Ghoshal" 
    },
    { 
      name: "Saathiya", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Saathiya.mp3?updatedAt=1768897087802", 
      image: "https://ik.imagekit.io/VibeCast/images/Saathiya.jpg?updatedAt=1768896069430", 
      durationDisplay: "5:12", 
      artist: "Ajay-Atul, Shreya Ghoshal" 
    },
    { 
      name: "Chikni Chameli", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Chikni_Chameli.mp3?updatedAt=1768896882701", 
      image: "https://ik.imagekit.io/VibeCast/images/Chikni_Chameli.jpg?updatedAt=1768896061741", 
      durationDisplay: "5:03", 
      artist: "Shreya Ghoshal" 
    },
    { 
      name: "Deewani Mastani", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Deewani_Mastani.mp3?updatedAt=1768896898471", 
      image: "https://ik.imagekit.io/VibeCast/images/Deewani_Mastani.jpg?updatedAt=1768896061269", 
      durationDisplay: "5:40", 
      artist: "Shreya Ghoshal" 
    },
    { 
      name: "Sun Raha Hai", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Sun_Raha_Hai.mp3?updatedAt=1768897083354", 
      image: "https://ik.imagekit.io/VibeCast/images/Sun_Raha_Hai.jpg?updatedAt=1768896074070", 
      durationDisplay: "6:30", 
      artist: "Shreya Ghoshal" 
    },
    { 
      name: "Manwa Laage", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Manwa_Laage.mp3?updatedAt=1768897000089", 
      image: "https://ik.imagekit.io/VibeCast/images/Manwa_Laage.jpg?updatedAt=1768896069091", 
      durationDisplay: "4:30", 
      artist: "Arijit Singh, Shreya Ghoshal" 
    },
    { 
      name: "Kaise Mujhe", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Kaise_Mujhe.mp3?updatedAt=1768897036976", 
      image: "https://ik.imagekit.io/VibeCast/images/Kaise_Mujhe.jpg?updatedAt=1768896068418", 
      durationDisplay: "6:01", 
      artist: "Benny Dayal, Shreya Ghoshal" 
    },
    { 
      name: "Tere Mast Mast Do Nain", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tere_Mast_Mast_Do_Nain.mp3?updatedAt=1768897086097", 
      image: "https://ik.imagekit.io/VibeCast/images/Tere_Mast_Mast_Do_Nain.jpg?updatedAt=1768896075277", 
      durationDisplay: "5:59", 
      artist: "Rahat Fateh Ali Khan, Shreya Ghoshal" 
    },
    { 
      name: "Dagabaaz Re", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Dagabaaz_Re.mp3?updatedAt=1768896784873", 
      image: "https://ik.imagekit.io/VibeCast/images/Dagabaaz_Re.jpg?updatedAt=1768896061473", 
      durationDisplay: "4:48", 
      artist: "Rahat Fateh Ali Khan, Shreya Ghoshal" 
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
        /* SHREYA GHOSHAL THEME: Royal Rose Pink */
        .artist-header {
          background-image: linear-gradient(to bottom, #ec4899, #121212);
        }
        .artist-accent {
          background-color: #f472b6; /* Soft Pink Accent */
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
            src={shreyaImg}
            alt="Shreya Ghoshal"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-pink-600 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Shreya Ghoshal</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " Melody Queen of India. 🎤👑 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              16 songs • The voice of grace.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-pink-500/40 transition-all duration-300 cursor-pointer"
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
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-pink-400" : "text-gray-400"}`}
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
                  <span className="text-pink-400 animate-pulse">
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-pink-400' : 'text-white'}`}>
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

export default ShreyaGhoshal;