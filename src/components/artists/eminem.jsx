import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const eminemImg = "https://ik.imagekit.io/VibeCast/images/eminem.jpeg?updatedAt=1768896061344";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Eminem = () => {
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
      name: "Lose Yourself", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Lose_Yourself.mp3?updatedAt=1768897033786", 
      image: "https://ik.imagekit.io/VibeCast/images/Lose_Yourself.jpg?updatedAt=1768896069423", 
      durationDisplay: "5:26", 
      artist: "Eminem" 
    },
    { 
      name: "Without Me", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Without_Me.mp3?updatedAt=1768897122259", 
      image: "https://ik.imagekit.io/VibeCast/images/Without_Me.jpg?updatedAt=1768896075484", 
      durationDisplay: "4:50", 
      artist: "Eminem" 
    },
    { 
      name: "The Real Slim Shady", 
      path: "https://ik.imagekit.io/VibeCast/music/music/The_Real_Slim_Shady.mp3?updatedAt=1768897113689", 
      image: "https://ik.imagekit.io/VibeCast/images/The_Real_Slim_Shady.jpg?updatedAt=1768896075476", 
      durationDisplay: "4:44", 
      artist: "Eminem" 
    },
    { 
      name: "Stan", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Stan.mp3?updatedAt=1768897123049", 
      image: "https://ik.imagekit.io/VibeCast/images/Stan.jpg?updatedAt=1768896074108", 
      durationDisplay: "6:44", 
      artist: "Eminem, Dido" 
    },
    { 
      name: "Love The Way You Lie", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Love_The_Way_You_Lie.mp3?updatedAt=1768896995436", 
      image: "https://ik.imagekit.io/VibeCast/images/Love_The_Way_You_Lie.jpg?updatedAt=1768896069083", 
      durationDisplay: "4:23", 
      artist: "Eminem, Rihanna" 
    },
    { 
      name: "Not Afraid", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Not_Afraid.mp3?updatedAt=1768897006274", 
      image: "https://ik.imagekit.io/VibeCast/images/Not_Afraid.jpg?updatedAt=1768896069387", 
      durationDisplay: "4:08", 
      artist: "Eminem" 
    },
    { 
      name: "Mockingbird", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Mockingbird.mp3?updatedAt=1768896997044", 
      image: "https://ik.imagekit.io/VibeCast/images/Mockingbird.jpg?updatedAt=1768896069101", 
      durationDisplay: "4:10", 
      artist: "Eminem" 
    },
    { 
      name: "Godzilla", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Godzilla.mp3?updatedAt=1768896824043", 
      image: "https://ik.imagekit.io/VibeCast/images/Godzilla.jpg?updatedAt=1768896061626", 
      durationDisplay: "3:30", 
      artist: "Eminem, Juice WRLD" 
    },
    { 
      name: "Rap God", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Rap_God.mp3?updatedAt=1768897097542", 
      image: "https://ik.imagekit.io/VibeCast/images/Rap_God.jpg?updatedAt=1768896069406", 
      durationDisplay: "6:03", 
      artist: "Eminem" 
    },
    { 
      name: "Till I Collapse", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Till_I_Collapse.mp3?updatedAt=1768897118674", 
      image: "https://ik.imagekit.io/VibeCast/images/Till_I_Collapse.jpg?updatedAt=1768896075440", 
      durationDisplay: "4:57", 
      artist: "Eminem, Nate Dogg" 
    },
    { 
      name: "The Monster", 
      path: "https://ik.imagekit.io/VibeCast/music/music/The_Monster.mp3?updatedAt=1768897120121", 
      image: "https://ik.imagekit.io/VibeCast/images/The_Monster.jpg?updatedAt=1768896075574", 
      durationDisplay: "4:10", 
      artist: "Eminem, Rihanna" 
    },
    { 
      name: "Smack That", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Smack_That.mp3?updatedAt=1768897071182", 
      image: "https://ik.imagekit.io/VibeCast/images/Smack_That.jpg?updatedAt=1768896074013", 
      durationDisplay: "3:32", 
      artist: "Akon, Eminem" 
    },
    { 
      name: "Forgot About Dre", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Forgot_About_Dre.mp3?updatedAt=1768896872830", 
      image: "https://ik.imagekit.io/VibeCast/images/Forgot_About_Dre.jpg?updatedAt=1768896061369", 
      durationDisplay: "3:42", 
      artist: "Dr. Dre, Eminem" 
    },
    { 
      name: "Venom", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Venom.mp3?updatedAt=1768897120962", 
      image: "https://ik.imagekit.io/VibeCast/images/Venom.jpg?updatedAt=1768896075528", 
      durationDisplay: "4:29", 
      artist: "Eminem" 
    },
    { 
      name: "Sing For The Moment", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Sing_For_The_Moment.mp3?updatedAt=1768897104396", 
      image: "https://ik.imagekit.io/VibeCast/images/Sing_For_The_Moment.jpg?updatedAt=1768896071164", 
      durationDisplay: "5:39", 
      artist: "Eminem" 
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
        /* EMINEM THEME: Gunmetal Grey / Slate */
        .artist-header {
          background-image: linear-gradient(to bottom, #475569, #121212);
        }
        .artist-accent {
          background-color: #94a3b8; /* Light Slate Accent */
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
            src={eminemImg}
            alt="Eminem"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-slate-500 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Eminem</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " The Real Slim Shady. Rap God. 🎤 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              15 songs • Hip-Hop, Rap & Legendary Bars.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-slate-500/40 transition-all duration-300 cursor-pointer"
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
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-slate-400" : "text-gray-400"}`}
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
                  <span className="text-slate-400 animate-pulse">
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-slate-400' : 'text-white'}`}>
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

export default Eminem;