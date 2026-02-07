import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const edImg = "https://ik.imagekit.io/VibeCast/images/ed.jpeg?updatedAt=1768896061392";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const EdSheeran = () => {
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
      name: "Sapphire", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Sapphire.mp3?updatedAt=1768897006876", 
      image: "https://ik.imagekit.io/VibeCast/images/Sapphire.jpg?updatedAt=1768896069471", 
      durationDisplay: "2:59", 
      artist: "Ed Sheeran, Arijit Singh" 
    },
    { 
      name: "Shape of You", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Shape_Of_You.mp3?updatedAt=1768897066300", 
      image: "https://ik.imagekit.io/VibeCast/images/Shape_Of_You.jpg?updatedAt=1768896070964", 
      durationDisplay: "3:53", 
      artist: "Ed Sheeran" 
    },
    { 
      name: "Perfect", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Perfect.mp3?updatedAt=1768897036357", 
      image: "https://ik.imagekit.io/VibeCast/images/Perfect.jpg?updatedAt=1768896069253", 
      durationDisplay: "4:23", 
      artist: "Ed Sheeran" 
    },
    { 
      name: "Thinking Out Loud", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Thinking_Out_Loud.mp3?updatedAt=1768897117162", 
      image: "https://ik.imagekit.io/VibeCast/images/Thinking_Out_Loud.jpg?updatedAt=1768896075407", 
      durationDisplay: "4:41", 
      artist: "Ed Sheeran" 
    },
    { 
      name: "Photograph", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Photograph.mp3?updatedAt=1768897037267", 
      image: "https://ik.imagekit.io/VibeCast/images/Photograph.jpg?updatedAt=1768896069229", 
      durationDisplay: "4:19", 
      artist: "Ed Sheeran" 
    },
    { 
      name: "Bad Habits", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Bad_Habits.mp3?updatedAt=1768896797388", 
      image: "https://ik.imagekit.io/VibeCast/images/Bad_Habits.jpg?updatedAt=1768896060778", 
      durationDisplay: "3:50", 
      artist: "Ed Sheeran" 
    },
    { 
      name: "Shivers", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Shivers.mp3?updatedAt=1768897059087", 
      image: "https://ik.imagekit.io/VibeCast/images/Shivers.jpg?updatedAt=1768896070994", 
      durationDisplay: "3:27", 
      artist: "Ed Sheeran" 
    },
    { 
      name: "Castle on the Hill", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Castle_On_The_Hill.mp3?updatedAt=1768896843750", 
      image: "https://ik.imagekit.io/VibeCast/images/Castle_On_The_Hill.jpg?updatedAt=1768896061397", 
      durationDisplay: "4:21", 
      artist: "Ed Sheeran" 
    },
    { 
      name: "Galway Girl", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Galway_Girl.mp3?updatedAt=1768896768013", 
      image: "https://ik.imagekit.io/VibeCast/images/Galway_Girl.jpg?updatedAt=1768896061249", 
      durationDisplay: "2:50", 
      artist: "Ed Sheeran" 
    },
    { 
      name: "I Don't Care", 
      path: "https://ik.imagekit.io/VibeCast/music/music/I_Dont_Care.mp3?updatedAt=1768896782694", 
      image: "https://ik.imagekit.io/VibeCast/images/I_Dont_Care.jpg?updatedAt=1768896068357", 
      durationDisplay: "3:39", 
      artist: "Ed Sheeran, Justin Bieber" 
    },
    { 
      name: "The A Team", 
      path: "https://ik.imagekit.io/VibeCast/music/music/The_A_Team.mp3?updatedAt=1768897115785", 
      image: "https://ik.imagekit.io/VibeCast/images/The_A_Team.jpg?updatedAt=1768896075605", 
      durationDisplay: "4:18", 
      artist: "Ed Sheeran" 
    },
    { 
      name: "Lego House", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Lego_House.mp3?updatedAt=1768896975368", 
      image: "https://ik.imagekit.io/VibeCast/images/Lego_House.jpg?updatedAt=1768896069077", 
      durationDisplay: "3:05", 
      artist: "Ed Sheeran" 
    },
    { 
      name: "Happier", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Happier.mp3?updatedAt=1768896778314", 
      image: "https://ik.imagekit.io/VibeCast/images/Happier.jpg?updatedAt=1768896061499", 
      durationDisplay: "3:27", 
      artist: "Ed Sheeran" 
    },
    { 
      name: "Eyes Closed", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Eyes_Closed.mp3?updatedAt=1768896778155", 
      image: "https://ik.imagekit.io/VibeCast/images/Eyes_Closed.jpg?updatedAt=1768896061709", 
      durationDisplay: "3:14", 
      artist: "Ed Sheeran" 
    },
    { 
      name: "Beautiful People", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Beautiful_People.mp3?updatedAt=1768896785706", 
      image: "https://ik.imagekit.io/VibeCast/images/Beautiful_People.jpg?updatedAt=1768896060761", 
      durationDisplay: "3:17", 
      artist: "Ed Sheeran, Khalid" 
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
        /* ED SHEERAN THEME: Divide Blue */
        .artist-header {
          background-image: linear-gradient(to bottom, #0ea5e9, #121212);
        }
        .artist-accent {
          background-color: #38bdf8; /* Light Blue Accent */
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
            src={edImg}
            alt="Ed Sheeran"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-sky-600 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Ed Sheeran</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " The man with the guitar and the loop pedal. ➗ "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              15 songs • The Mathematics Tour.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-sky-500/40 transition-all duration-300 cursor-pointer"
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
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-sky-400" : "text-gray-400"}`}
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
                  <span className="text-sky-400 animate-pulse">
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-sky-400' : 'text-white'}`}>
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

export default EdSheeran;