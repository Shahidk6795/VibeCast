import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const karanImg = "https://ik.imagekit.io/VibeCast/images/karan_aujla.jpg?updatedAt=1768896068738";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const KaranAujla = () => {
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
      name: "For A Reason", 
      path: "https://ik.imagekit.io/VibeCast/music/music/For_A_Reason.mp3?updatedAt=1768896760765", 
      image: "https://ik.imagekit.io/VibeCast/images/For_A_Reason.jpg?updatedAt=1768896061500", 
      durationDisplay: "4:15", 
      artist: "Karan Aujla" 
    },
    { 
      name: "Chitta Kurta", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Chitta_Kurta.mp3?updatedAt=1768896800584", 
      image: "https://ik.imagekit.io/VibeCast/images/Chitta_Kurta.jpg?updatedAt=1768896061371", 
      durationDisplay: "3:50", 
      artist: "Karan Aujla" 
    },
    { 
      name: "Don't Worry", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Dont_Worry.mp3?updatedAt=1768896781394", 
      image: "https://ik.imagekit.io/VibeCast/images/Dont_Worry.jpg?updatedAt=1768896061802", 
      durationDisplay: "4:02", 
      artist: "Karan Aujla ft. Gurlez Akhtar" 
    },
    { 
      name: "Hint", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Hint.mp3?updatedAt=1768896890740", 
      image: "https://ik.imagekit.io/VibeCast/images/Hint.jpg?updatedAt=1768896061385", 
      durationDisplay: "3:45", 
      artist: "Karan Aujla" 
    },
    { 
      name: "Jhanjar", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Jhanjar.mp3?updatedAt=1768896950863", 
      image: "https://ik.imagekit.io/VibeCast/images/Jhanjar.jpg?updatedAt=1768896068460", 
      durationDisplay: "4:10", 
      artist: "Karan Aujla" 
    },
    { 
      name: "Neendein", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Neendein.mp3?updatedAt=1768896963793", 
      image: "https://ik.imagekit.io/VibeCast/images/Neendein.jpg?updatedAt=1768896069568", 
      durationDisplay: "3:55", 
      artist: "Karan Aujla" 
    },
    { 
      name: "Gangsta", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Gangsta.mp3?updatedAt=1768896764538", 
      image: "https://ik.imagekit.io/VibeCast/images/Gangsta.jpg?updatedAt=1768896061758", 
      durationDisplay: "4:05", 
      artist: "Karan Aujla" 
    },
    { 
      name: "Kya Baat Aa", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Kya_Baat_Aa.mp3?updatedAt=1768896976702", 
      image: "https://ik.imagekit.io/VibeCast/images/Kya_Baat_Aa.jpg?updatedAt=1768896069092", 
      durationDisplay: "3:50", 
      artist: "Karan Aujla" 
    },
    { 
      name: "Sheesh", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Sheesh.mp3?updatedAt=1768897015936", 
      image: "https://ik.imagekit.io/VibeCast/images/Sheesh.jpg?updatedAt=1768896070960", 
      durationDisplay: "3:58", 
      artist: "Karan Aujla" 
    },
    { 
      name: "Softly", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Softly.mp3", 
      image: "https://ik.imagekit.io/VibeCast/images/Softly.jpg?updatedAt=1769495290289", 
      durationDisplay: "2:35", 
      artist: "Karan Aujla" 
    },
    { 
      name: "White Brown Black", 
      path: "https://ik.imagekit.io/VibeCast/music/music/White_Brown_Black.mp3", 
      image: "https://ik.imagekit.io/VibeCast/images/White_Brown_Black.jpg?updatedAt=1769495290200", 
      durationDisplay: "3:00", 
      artist: "Karan Aujla, Avvy Sra" 
    },
    { 
      name: "Admirin' You", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Admirin_You.mp3", 
      image: "https://ik.imagekit.io/VibeCast/images/Admirin_You.jpg?updatedAt=1769495289560", 
      durationDisplay: "3:34", 
      artist: "Karan Aujla" 
    },
    { 
      name: "Tauba Tauba", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tauba_Tauba.mp3", 
      image: "https://ik.imagekit.io/VibeCast/images/Tauba_Tauba.jpg?updatedAt=1769495289883", 
      durationDisplay: "3:28", 
      artist: "Karan Aujla" 
    },
    { 
      name: "52 Bars", 
      path: "https://ik.imagekit.io/VibeCast/music/music/52_Bars.mp3", 
      image: "https://ik.imagekit.io/VibeCast/images/52_Bars.jpg?updatedAt=1769495291014", 
      durationDisplay: "3:44", 
      artist: "Karan Aujla" 
    },
    { 
      name: "Mexico", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Mexico.mp3", 
      image: "https://ik.imagekit.io/VibeCast/images/Mexico.jpg?updatedAt=1769495289572", 
      durationDisplay: "3:15", 
      artist: "Karan Aujla" 
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
        /* KARAN AUJLA THEME: Vintage Rust / Earthy */
        .artist-header {
          background-image: linear-gradient(to bottom, #9a3412, #121212);
        }
        .artist-accent {
          background-color: #c2410c; /* Orange-Red Accent */
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
            src={karanImg}
            alt="Karan Aujla"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-orange-800 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Karan Aujla</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " Geetan Di Machine. The Modern Punjabi Icon. 🥃🚜 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              15 songs • Punjabi Pop & Hip-Hop.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-orange-700/40 transition-all duration-300 cursor-pointer"
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
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-orange-600" : "text-gray-400"}`}
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
                  <span className="text-orange-600 animate-pulse">
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-orange-600' : 'text-white'}`}>
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

export default KaranAujla;