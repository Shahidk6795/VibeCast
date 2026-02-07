import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const brunoImg = "https://ik.imagekit.io/VibeCast/images/bruno_mars.jpeg";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const BrunoMars = () => {
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
      name: "APT.", 
      path: "https://ik.imagekit.io/VibeCast/music/music/APT.mp3?updatedAt=1768896750727", 
      image: "https://ik.imagekit.io/VibeCast/images/APT.jpg?updatedAt=1768896060821", 
      durationDisplay: "2:50", 
      artist: "Rosé, Bruno Mars" 
    },
    { 
      name: "Die With A Smile", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Die_With_A_Smile.mp3?updatedAt=1768896808757", 
      image: "https://ik.imagekit.io/VibeCast/images/Die_With_A_Smile.jpg?updatedAt=1768896061733", 
      durationDisplay: "4:11", 
      artist: "Lady Gaga, Bruno Mars" 
    },
    { 
      name: "That's What I Like", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Thats_What_I_Like.mp3?updatedAt=1768897094040", 
      image: "https://ik.imagekit.io/VibeCast/images/Thats_What_I_Like.jpg?updatedAt=1768896075457", 
      durationDisplay: "3:26", 
      artist: "Bruno Mars" 
    },
    { 
      name: "24K Magic", 
      path: "https://ik.imagekit.io/VibeCast/music/music/24K_Magic.mp3?updatedAt=1768896745375", 
      image: "https://ik.imagekit.io/VibeCast/images/24K_Magic.jpg?updatedAt=1768896060879", 
      durationDisplay: "3:46", 
      artist: "Bruno Mars" 
    },
    { 
      name: "Uptown Funk", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Uptown_Funk.mp3?updatedAt=1768897118600", 
      image: "https://ik.imagekit.io/VibeCast/images/Uptown_Funk.jpg?updatedAt=1768896075453", 
      durationDisplay: "4:30", 
      artist: "Mark Ronson, Bruno Mars" 
    },
    { 
      name: "Treasure", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Treasure.mp3?updatedAt=1768897095831", 
      image: "https://ik.imagekit.io/VibeCast/images/Treasure.jpg?updatedAt=1768896075483", 
      durationDisplay: "2:58", 
      artist: "Bruno Mars" 
    },
    { 
      name: "Locked Out of Heaven", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Locked_Out_Of_Heaven.mp3?updatedAt=1768896970659", 
      image: "https://ik.imagekit.io/VibeCast/images/Locked_Out_Of_Heaven.jpg?updatedAt=1768896068989", 
      durationDisplay: "3:53", 
      artist: "Bruno Mars" 
    },
    { 
      name: "The Lazy Song", 
      path: "https://ik.imagekit.io/VibeCast/music/music/The_Lazy_Song.mp3?updatedAt=1768897092335", 
      image: "https://ik.imagekit.io/VibeCast/images/The_Lazy_Song.jpg?updatedAt=1768896075258", 
      durationDisplay: "3:15", 
      artist: "Bruno Mars" 
    },
    { 
      name: "Count on Me", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Count_On_Me.mp3?updatedAt=1768896763702", 
      image: "https://ik.imagekit.io/VibeCast/images/Count_On_Me.jpg?updatedAt=1768896061731", 
      durationDisplay: "3:17", 
      artist: "Bruno Mars" 
    },
    { 
      name: "Billionaire", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Billionaire.mp3?updatedAt=1768896777187", 
      image: "https://ik.imagekit.io/VibeCast/images/Billionaire.jpg?updatedAt=1768896060729", 
      durationDisplay: "3:31", 
      artist: "Travie McCoy, Bruno Mars" 
    },
    { 
      name: "Grenade", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Grenade.mp3?updatedAt=1768896781369", 
      image: "https://ik.imagekit.io/VibeCast/images/Grenade.jpg?updatedAt=1768896061385", 
      durationDisplay: "3:42", 
      artist: "Bruno Mars" 
    },
    { 
      name: "Just the Way You Are", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Just_The_Way_You_Are.mp3?updatedAt=1768896948528", 
      image: "https://ik.imagekit.io/VibeCast/images/Just_The_Way_You_Are.jpg?updatedAt=1768896068518", 
      durationDisplay: "3:40", 
      artist: "Bruno Mars" 
    },
    { 
      name: "Marry You", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Marry_You.mp3?updatedAt=1768896972792", 
      image: "https://ik.imagekit.io/VibeCast/images/Marry_You.jpg?updatedAt=1768896069219", 
      durationDisplay: "3:50", 
      artist: "Bruno Mars" 
    },
    { 
      name: "Lighters", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Lighters.mp3?updatedAt=1768897019374", 
      image: "https://ik.imagekit.io/VibeCast/images/Lighters.jpg?updatedAt=1768896069036", 
      durationDisplay: "5:03", 
      artist: "Bad Meets Evil, Bruno Mars" 
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
        /* BRUNO MARS THEME: Luxury Burgundy & Red */
        .artist-header {
          background-image: linear-gradient(to bottom, #7f1d1d, #121212);
        }
        .artist-accent {
          background-color: #ef4444; /* Bright Red Accent */
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
            src={brunoImg}
            alt="Bruno Mars"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-red-600 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Bruno Mars</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " Pop's golden boy. Pure funk, soul, and 24K magic. ✨ "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              14 songs • Funk, Soul & Pop Perfection.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-red-500/40 transition-all duration-300 cursor-pointer"
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
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-red-500" : "text-gray-400"}`}
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
                  <span className="text-red-500 animate-pulse">
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-red-400' : 'text-white'}`}>
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

export default BrunoMars;