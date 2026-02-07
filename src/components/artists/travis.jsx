import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const travisImg = "https://ik.imagekit.io/VibeCast/images/travis.jpeg?updatedAt=1768896075554";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const TravisScott = () => {
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
      name: "SICKO MODE", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Sicko_Mode.mp3?updatedAt=1768897102480", 
      image: "https://ik.imagekit.io/VibeCast/images/Sicko_Mode.jpg?updatedAt=1768896071151", 
      durationDisplay: "5:12", 
      artist: "Travis Scott, Drake" 
    },
    { 
      name: "goosebumps", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Goosebumps.mp3?updatedAt=1768896807429", 
      image: "https://ik.imagekit.io/VibeCast/images/Goosebumps.jpg?updatedAt=1768896061366", 
      durationDisplay: "4:03", 
      artist: "Travis Scott, Kendrick Lamar" 
    },
    { 
      name: "HIGHEST IN THE ROOM", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Highest_In_The_Room.mp3?updatedAt=1768896753183", 
      image: "https://ik.imagekit.io/VibeCast/images/Highest_In_The_Room.jpg?updatedAt=1768896061366", 
      durationDisplay: "2:55", 
      artist: "Travis Scott" 
    },
    { 
      name: "BUTTERFLY EFFECT", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Butterfly_Effect.mp3?updatedAt=1768896776815", 
      image: "https://ik.imagekit.io/VibeCast/images/Butterfly_Effect.jpg?updatedAt=1768896060837", 
      durationDisplay: "3:10", 
      artist: "Travis Scott" 
    },
    { 
      name: "Antidote", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Antidote.mp3?updatedAt=1768896843920", 
      image: "https://ik.imagekit.io/VibeCast/images/Antidote.jpg?updatedAt=1768896061533", 
      durationDisplay: "4:22", 
      artist: "Travis Scott" 
    },
    { 
      name: "STARGAZING", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Stargazing.mp3?updatedAt=1768897092520", 
      image: "https://ik.imagekit.io/VibeCast/images/Stargazing.jpg?updatedAt=1768896074893", 
      durationDisplay: "4:30", 
      artist: "Travis Scott" 
    },
    { 
      name: "YOSEMITE", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Yosemite.mp3?updatedAt=1768897098208", 
      image: "https://ik.imagekit.io/VibeCast/images/Yosemite.jpg?updatedAt=1768896075616", 
      durationDisplay: "2:30", 
      artist: "Travis Scott, Gunna" 
    },
    { 
      name: "FE!N", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Fein.mp3?updatedAt=1768896774672", 
      image: "https://ik.imagekit.io/VibeCast/images/Fein.jpg?updatedAt=1768896061629", 
      durationDisplay: "3:11", 
      artist: "Travis Scott, Playboi Carti" 
    },
    { 
      name: "I KNOW ?", 
      path: "https://ik.imagekit.io/VibeCast/music/music/I_Know.mp3?updatedAt=1768896777051", 
      image: "https://ik.imagekit.io/VibeCast/images/I_Know.jpg?updatedAt=1768896068466", 
      durationDisplay: "3:31", 
      artist: "Travis Scott" 
    },
    { 
      name: "MY EYES", 
      path: "https://ik.imagekit.io/VibeCast/music/music/My_Eyes.mp3?updatedAt=1768896995691", 
      image: "https://ik.imagekit.io/VibeCast/images/My_Eyes.jpg?updatedAt=1768896069207", 
      durationDisplay: "4:11", 
      artist: "Travis Scott" 
    },
    { 
      name: "TELEKINESIS", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Telekinesis.mp3?updatedAt=1768897120056", 
      image: "https://ik.imagekit.io/VibeCast/images/Telekinesis.jpg?updatedAt=1768896074883", 
      durationDisplay: "5:53", 
      artist: "Travis Scott, SZA, Future" 
    },
    { 
      name: "Type Shit", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Type_Shit.mp3?updatedAt=1768897110693", 
      image: "https://ik.imagekit.io/VibeCast/images/Type_Shit.jpg?updatedAt=1768896075434", 
      durationDisplay: "3:48", 
      artist: "Future, Metro Boomin, Travis Scott" 
    },
    { 
      name: "SKELETONS", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Skeletons.mp3?updatedAt=1768897005968", 
      image: "https://ik.imagekit.io/VibeCast/images/Skeletons.jpg?updatedAt=1768896071357", 
      durationDisplay: "2:25", 
      artist: "Travis Scott, Tame Impala" 
    },
    { 
      name: "WAKE UP", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Wake_Up.mp3?updatedAt=1768897102557", 
      image: "https://ik.imagekit.io/VibeCast/images/Wake_Up.jpg?updatedAt=1768896075516", 
      durationDisplay: "3:51", 
      artist: "Travis Scott, The Weeknd" 
    },
    { 
      name: "TRANCE", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Trance.mp3?updatedAt=1768897095536", 
      image: "https://ik.imagekit.io/VibeCast/images/Trance.jpg?updatedAt=1768896075468", 
      durationDisplay: "3:14", 
      artist: "Metro Boomin, Travis Scott, Young Thug" 
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
        /* TRAVIS SCOTT THEME: Cactus Jack Mocha */
        .artist-header {
          background-image: linear-gradient(to bottom, #5d4037, #121212);
        }
        .artist-accent {
          background-color: #795548; /* Brown-500 Accent */
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
            src={travisImg}
            alt="Travis Scott"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-amber-900 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Travis Scott</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " LA FLAME. It's lit! 🌵🔥 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              15 songs • Rager. Visionary. Icon.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-orange-900/40 transition-all duration-300 cursor-pointer"
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
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-amber-700" : "text-gray-400"}`}
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
                  <span className="text-amber-700 animate-pulse">
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-amber-700' : 'text-white'}`}>
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

export default TravisScott;