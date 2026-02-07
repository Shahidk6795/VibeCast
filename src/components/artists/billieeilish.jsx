import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const billieImg = "https://ik.imagekit.io/VibeCast/images/billie.jpeg?updatedAt=1768896060772";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const BillieEilish = () => {
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
      name: "BIRDS OF A FEATHER", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Birds_Of_A_Feather.mp3?updatedAt=1768896788798", 
      image: "https://ik.imagekit.io/VibeCast/images/Birds_Of_A_Feather.jpg?updatedAt=1768896060857", 
      durationDisplay: "3:30", 
      artist: "Billie Eilish" 
    },
    { 
      name: "bad guy", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Bad_Guy.mp3?updatedAt=1768896772390", 
      image: "https://ik.imagekit.io/VibeCast/images/Bad_Guy.jpg?updatedAt=1768896060798", 
      durationDisplay: "3:14", 
      artist: "Billie Eilish" 
    },
    { 
      name: "lovely", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Lovely.mp3?updatedAt=1768896950948", 
      image: "https://ik.imagekit.io/VibeCast/images/Lovely.jpg?updatedAt=1768896069217", 
      durationDisplay: "3:20", 
      artist: "Billie Eilish, Khalid" 
    },
    { 
      name: "Happier Than Ever", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Happier_Than_Ever.mp3?updatedAt=1768896873381", 
      image: "https://ik.imagekit.io/VibeCast/images/Happier_Than_Ever.jpg?updatedAt=1768896061405", 
      durationDisplay: "4:58", 
      artist: "Billie Eilish" 
    },
    { 
      name: "Ocean Eyes", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Ocean_Eyes.mp3?updatedAt=1768896968907", 
      image: "https://ik.imagekit.io/VibeCast/images/Ocean_Eyes.jpg?updatedAt=1768896069164", 
      durationDisplay: "3:20", 
      artist: "Billie Eilish" 
    },
    { 
      name: "What Was I Made For?", 
      path: "https://ik.imagekit.io/VibeCast/music/music/What_Was_I_Made_For.mp3?updatedAt=1768897118483", 
      image: "https://ik.imagekit.io/VibeCast/images/What_Was_I_Made_For.jpg?updatedAt=1768896075518", 
      durationDisplay: "3:42", 
      artist: "Billie Eilish" 
    },
    { 
      name: "everything i wanted", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Everything_I_Wanted.mp3?updatedAt=1768896843133", 
      image: "https://ik.imagekit.io/VibeCast/images/Everything_I_Wanted.jpg?updatedAt=1768896061702", 
      durationDisplay: "4:05", 
      artist: "Billie Eilish" 
    },
    { 
      name: "LUNCH", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Lunch.mp3?updatedAt=1768896952182", 
      image: "https://ik.imagekit.io/VibeCast/images/Lunch.jpg?updatedAt=1768896069040", 
      durationDisplay: "2:59", 
      artist: "Billie Eilish" 
    },
    { 
      name: "bury a friend", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Bury_A_Friend.mp3?updatedAt=1768896776139", 
      image: "https://ik.imagekit.io/VibeCast/images/Bury_A_Friend.jpg?updatedAt=1768896061751", 
      durationDisplay: "3:13", 
      artist: "Billie Eilish" 
    },
    { 
      name: "when the party's over", 
      path: "https://ik.imagekit.io/VibeCast/music/music/When_The_Partys_Over.mp3?updatedAt=1768897109502", 
      image: "https://ik.imagekit.io/VibeCast/images/When_The_Partys_Over.jpg?updatedAt=1768896075600", 
      durationDisplay: "3:16", 
      artist: "Billie Eilish" 
    },
    { 
      name: "CHIHIRO", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Chihiro.mp3?updatedAt=1768896878830", 
      image: "https://ik.imagekit.io/VibeCast/images/Chihiro.jpg?updatedAt=1768896060944", 
      durationDisplay: "5:03", 
      artist: "Billie Eilish" 
    },
    { 
      name: "idontwannabeyouanymore", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Idontwannabeyouanymore.mp3?updatedAt=1768896771065", 
      image: "https://ik.imagekit.io/VibeCast/images/Idontwannabeyouanymore.jpg?updatedAt=1768896064611", 
      durationDisplay: "3:23", 
      artist: "Billie Eilish" 
    },
    { 
      name: "bellyache", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Bellyache.mp3?updatedAt=1768896775477", 
      image: "https://ik.imagekit.io/VibeCast/images/Bellyache.jpg?updatedAt=1768896060936", 
      durationDisplay: "2:59", 
      artist: "Billie Eilish" 
    },
    { 
      name: "No Time To Die", 
      path: "https://ik.imagekit.io/VibeCast/music/music/No_Time_To_Die.mp3?updatedAt=1768896994955", 
      image: "https://ik.imagekit.io/VibeCast/images/No_Time_To_Die.jpg?updatedAt=1768896069213", 
      durationDisplay: "4:02", 
      artist: "Billie Eilish" 
    },
    { 
      name: "Therefore I Am", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Therefore_I_Am.mp3?updatedAt=1768897117209", 
      image: "https://ik.imagekit.io/VibeCast/images/Therefore_I_Am.jpg?updatedAt=1768896075211", 
      durationDisplay: "2:54", 
      artist: "Billie Eilish" 
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
        /* BILLIE EILISH THEME: Toxic Green / Forest Green */
        .artist-header {
          background-image: linear-gradient(to bottom, #14532d, #121212);
        }
        .artist-accent {
          background-color: #22c55e; /* Neon Green Accent */
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
            src={billieImg}
            alt="Billie Eilish"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-green-600 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Billie Eilish</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " HIT ME HARD AND SOFT. 🕷️ "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              15 songs • Dark Pop, Alternative & Indie.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-green-500/40 transition-all duration-300 cursor-pointer"
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
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-green-500" : "text-gray-400"}`}
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
                  <span className="text-green-500 animate-pulse">
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-green-500' : 'text-white'}`}>
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

export default BillieEilish;