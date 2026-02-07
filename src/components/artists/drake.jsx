import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const drakeImg = "https://ik.imagekit.io/VibeCast/images/drake.jpeg?updatedAt=1768896061506";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Drake = () => {
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
      name: "God's Plan", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Gods_Plan.mp3?updatedAt=1768896901014", 
      image: "https://ik.imagekit.io/VibeCast/images/Gods_Plan.jpg?updatedAt=1768896061378", 
      durationDisplay: "3:18", 
      artist: "Drake" 
    },
    { 
      name: "One Dance", 
      path: "https://ik.imagekit.io/VibeCast/music/One_Dance.mp3?updatedAt=1768897555570", 
      image: "https://ik.imagekit.io/VibeCast/images/One_Dance.jpg?updatedAt=1768896069211", 
      durationDisplay: "2:54", 
      artist: "Drake, Wizkid, Kyla" 
    },
    { 
      name: "In My Feelings", 
      path: "https://ik.imagekit.io/VibeCast/music/music/In_My_Feelings.mp3?updatedAt=1768896990997", 
      image: "https://ik.imagekit.io/VibeCast/images/In_My_Feelings.jpg?updatedAt=1768896064751", 
      durationDisplay: "3:37", 
      artist: "Drake" 
    },
    { 
      name: "Hotline Bling", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Hotline_Bling.mp3?updatedAt=1768896855642", 
      image: "https://ik.imagekit.io/VibeCast/images/Hotline_Bling.jpg?updatedAt=1768896062703", 
      durationDisplay: "4:27", 
      artist: "Drake" 
    },
    { 
      name: "Rich Baby Daddy", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Rich_Baby_Daddy.mp3?updatedAt=1768897072058", 
      image: "https://ik.imagekit.io/VibeCast/images/Rich_Baby_Daddy.jpg?updatedAt=1768896069450", 
      durationDisplay: "5:19", 
      artist: "Drake, Sexyy Red, SZA" 
    },
    { 
      name: "Nice For What", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Nice_For_What.mp3?updatedAt=1768897007956", 
      image: "https://ik.imagekit.io/VibeCast/images/Nice_For_What.jpg?updatedAt=1768896069208", 
      durationDisplay: "3:30", 
      artist: "Drake" 
    },
    { 
      name: "Toosie Slide", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Toosie_Slide.mp3?updatedAt=1768897120217", 
      image: "https://ik.imagekit.io/VibeCast/images/Toosie_Slide.jpg?updatedAt=1768896075487", 
      durationDisplay: "4:07", 
      artist: "Drake" 
    },
    { 
      name: "Jimmy Cooks", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Jimmy_Cooks.mp3?updatedAt=1768896921297", 
      image: "https://ik.imagekit.io/VibeCast/images/Jimmy_Cooks.jpg?updatedAt=1768896068464", 
      durationDisplay: "3:38", 
      artist: "Drake, 21 Savage" 
    },
    { 
      name: "Laugh Now Cry Later", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Laugh_Now_Cry_Later.mp3?updatedAt=1768897011593", 
      image: "https://ik.imagekit.io/VibeCast/images/Laugh_Now_Cry_Later.jpg?updatedAt=1768896069112", 
      durationDisplay: "4:21", 
      artist: "Drake, Lil Durk" 
    },
    { 
      name: "First Person Shooter", 
      path: "https://ik.imagekit.io/VibeCast/music/music/First_Person_Shooter.mp3?updatedAt=1768896861039", 
      image: "https://ik.imagekit.io/VibeCast/images/First_Person_Shooter.jpg?updatedAt=1768896061401", 
      durationDisplay: "4:07", 
      artist: "Drake, J. Cole" 
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
        /* DRAKE THEME: OVO Gold */
        .artist-header {
          background-image: linear-gradient(to bottom, #b45309, #121212);
        }
        .artist-accent {
          background-color: #f59e0b; /* Amber/Gold Accent */
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
            src={drakeImg}
            alt="Drake"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-amber-600 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Drake</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " The 6 God. OVO Sound. 🦉 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              10 songs • Certified Hitmaker.
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

export default Drake;