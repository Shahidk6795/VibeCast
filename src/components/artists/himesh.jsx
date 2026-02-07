import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const himeshImg = "https://ik.imagekit.io/VibeCast/images/himesh.jpeg?updatedAt=1768896061726";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Himesh = () => {
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
      name: "Dil Ke Taj Mehal Me", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Dil_Ke_Taj.mp3?updatedAt=1768896760573", 
      image: "https://ik.imagekit.io/VibeCast/images/Dil_Ke_Taj.jpg?updatedAt=1768896060849", 
      durationDisplay: "4:05", 
      artist: "Himesh Reshammiya" 
    },
    { 
      name: "Tera Chehra", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tera_Chehra.mp3?updatedAt=1768897107439", 
      image: "https://ik.imagekit.io/VibeCast/images/Tera_Chehra.jpg?updatedAt=1768896074659", 
      durationDisplay: "3:50", 
      artist: "Himesh Reshammiya" 
    },
    { 
      name: "Sanam Tere Kasam", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Sanam_Tere_Kasam.mp3?updatedAt=1768897089225", 
      image: "https://ik.imagekit.io/VibeCast/images/Sanam_Tere_Kasam.jpg?updatedAt=1768896069291", 
      durationDisplay: "4:10", 
      artist: "Himesh Reshammiya, Ankit Tiwari" 
    },
    { 
      name: "Tera Fitoor", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tera_Fitoor.mp3?updatedAt=1768897115176", 
      image: "https://ik.imagekit.io/VibeCast/images/Tera_Fitoor.jpg?updatedAt=1768896075085", 
      durationDisplay: "3:55", 
      artist: "Arijit Singh, Himesh Reshammiya" 
    },
    { 
      name: "Hookah Bar", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Hookah_Bar.mp3?updatedAt=1768896751239", 
      image: "https://ik.imagekit.io/VibeCast/images/Hookah_Bar.jpg?updatedAt=1768896061694", 
      durationDisplay: "3:45", 
      artist: "Himesh Reshammiya, Honey Singh" 
    },
    { 
      name: "Jhalak Dikh La Ja", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Jhalak_Dikh_La_Ja.mp3?updatedAt=1768896899833", 
      image: "https://ik.imagekit.io/VibeCast/images/Jhalak_Dikh_La_Ja.jpg?updatedAt=1768896068490", 
      durationDisplay: "3:35", 
      artist: "Himesh Reshammiya" 
    },
    { 
      name: "Tuzhe Bhol Jana", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tuzhe_Bhol_Jana.mp3?updatedAt=1768897114956", 
      image: "https://ik.imagekit.io/VibeCast/images/Tuzhe_Bhol_Jana.jpg?updatedAt=1768896075586", 
      durationDisplay: "4:00", 
      artist: "Himesh Reshammiya" 
    },
    { 
      name: "Samjho Na Kuch", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Samjho_Na_Kuch.mp3?updatedAt=1768897097478", 
      image: "https://ik.imagekit.io/VibeCast/images/Samjho_Na_Kuch.jpg?updatedAt=1768896069426", 
      durationDisplay: "3:40", 
      artist: "Himesh Reshammiya" 
    },
    { 
      name: "Aap Ke Kashish", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Aap_Ke_Kashish.mp3?updatedAt=1768896877173", 
      image: "https://ik.imagekit.io/VibeCast/images/Aap_Ke_Kashish.jpg?updatedAt=1768896060760", 
      durationDisplay: "3:55", 
      artist: "Himesh Reshammiya" 
    },
    { 
      name: "Ek Haseena Thee", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Ek_Haseena_Thee.mp3?updatedAt=1768896926839", 
      image: "https://ik.imagekit.io/VibeCast/images/Ek_Haseena_Thee.jpg?updatedAt=1768896061691", 
      durationDisplay: "3:50", 
      artist: "Himesh Reshammiya, Shreya Ghoshal" 
    },
    { 
      name: "Tere Pyaar Mein", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tere_Pyaar_Mein.mp3?updatedAt=1768897116927", 
      image: "https://ik.imagekit.io/VibeCast/images/Tere_Pyaar_Mein.jpg?updatedAt=1768896075239", 
      durationDisplay: "4:15", 
      artist: "Himesh Reshammiya" 
    },
    { 
      name: "Ashiq Banaya", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Ashiq_Banaya.mp3?updatedAt=1768896860468", 
      image: "https://ik.imagekit.io/VibeCast/images/Ashiq_Banaya.jpg?updatedAt=1768896060778", 
      durationDisplay: "3:45", 
      artist: "Himesh Reshammiya, Shreya Ghoshal" 
    },
    { 
      name: "Naam Hai Tera Mera", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Naam_Hai_Tera_Mera.mp3?updatedAt=1768897014578", 
      image: "https://ik.imagekit.io/VibeCast/images/Naam_Hai_Tera_Mera.jpg?updatedAt=1768896069200", 
      durationDisplay: "4:00", 
      artist: "Himesh Reshammiya" 
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
        /* HIMESH THEME: Suroor Magenta */
        .artist-header {
          background-image: linear-gradient(to bottom, #c026d3, #121212);
        }
        .artist-accent {
          background-color: #d946ef; /* Fuchsia Accent */
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
            src={himeshImg}
            alt="Himesh"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-fuchsia-600 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Himesh</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " The Suroor Hit Machine. 🧢 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              13 songs • Bollywood’s hitmaker.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-fuchsia-500/40 transition-all duration-300 cursor-pointer"
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
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-fuchsia-500" : "text-gray-400"}`}
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
                  <span className="text-fuchsia-500 animate-pulse">
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-fuchsia-500' : 'text-white'}`}>
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

export default Himesh;