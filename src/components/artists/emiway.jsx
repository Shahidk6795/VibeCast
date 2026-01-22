import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const emiwayImg = "https://ik.imagekit.io/VibeCast/images/emiway.jpg?updatedAt=1768896061370";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Emiway = () => {
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
      name: "Firse Machayenge", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Firse_Machayenge.mp3?updatedAt=1768896798821", 
      image: "https://ik.imagekit.io/VibeCast/images/Firse_Machayenge.jpg?updatedAt=1768896061387", 
      durationDisplay: "3:40", 
      artist: "Emiway Bantai" 
    },
    { 
      name: "Company", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Company.mp3?updatedAt=1768896787730", 
      image: "https://ik.imagekit.io/VibeCast/images/Company.jpg?updatedAt=1768896061327", 
      durationDisplay: "3:32", 
      artist: "Emiway Bantai" 
    },
    { 
      name: "Khatam Hue Waande", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Khatam_Hue_Waande.mp3?updatedAt=1768896922706", 
      image: "https://ik.imagekit.io/VibeCast/images/Khatam_Hue_Waande.jpg?updatedAt=1768896068682", 
      durationDisplay: "3:55", 
      artist: "Emiway Bantai" 
    },
    { 
      name: "Machayenge", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Machayenge.mp3?updatedAt=1768896929052", 
      image: "https://ik.imagekit.io/VibeCast/images/Machayenge.jpg?updatedAt=1768896069097", 
      durationDisplay: "3:50", 
      artist: "Emiway Bantai" 
    },
    { 
      name: "Giraftaar", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Giraftaar.mp3?updatedAt=1768896794217", 
      image: "https://ik.imagekit.io/VibeCast/images/Giraftaar.jpg?updatedAt=1768896061369", 
      durationDisplay: "3:48", 
      artist: "Emiway Bantai ft. Raftaar" 
    },
    { 
      name: "Grind", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Grind.mp3?updatedAt=1768896756891", 
      image: "https://ik.imagekit.io/VibeCast/images/Grind.jpg?updatedAt=1768896061515", 
      durationDisplay: "3:41", 
      artist: "Emiway Bantai" 
    },
    { 
      name: "Boht Hard", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Boht_Hard.mp3?updatedAt=1768896755983", 
      image: "https://ik.imagekit.io/VibeCast/images/Boht_Hard.jpg?updatedAt=1768896061452", 
      durationDisplay: "4:00", 
      artist: "Emiway Bantai ft. Thoratt" 
    },
    { 
      name: "Jump Kar", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Jump_Kar.mp3?updatedAt=1768896895487", 
      image: "https://ik.imagekit.io/VibeCast/images/Jump_Kar.jpg?updatedAt=1768896068485", 
      durationDisplay: "3:37", 
      artist: "Emiway Bantai" 
    },
    { 
      name: "Mera Bhai Mera Bhai", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Mera_Bhai_Mera_Bhai.mp3?updatedAt=1768896896471", 
      image: "https://ik.imagekit.io/VibeCast/images/Mera_Bhai_Mera_Bhai.jpg?updatedAt=1768896069085", 
      durationDisplay: "3:50", 
      artist: "Emiway Bantai & Shaikh Chilli" 
    },
    { 
      name: "Still No.1", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Still_No_1.mp3?updatedAt=1768897077417", 
      image: "https://ik.imagekit.io/VibeCast/images/Still_No_1.jpg?updatedAt=1768896074112", 
      durationDisplay: "3:44", 
      artist: "Emiway Bantai" 
    },
    { 
      name: "Guess", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Guess.mp3?updatedAt=1768896748531", 
      image: "https://ik.imagekit.io/VibeCast/images/Guess.jpg?updatedAt=1768896061270", 
      durationDisplay: "3:29", 
      artist: "Emiway Bantai" 
    },
    { 
      name: "Dependent Kauve", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Dependent_Kauve.mp3?updatedAt=1768896887618", 
      image: "https://ik.imagekit.io/VibeCast/images/Dependent_Kauve.jpg?updatedAt=1768896061697", 
      durationDisplay: "3:51", 
      artist: "Emiway Bantai" 
    },
    { 
      name: "King Of Indian Hip Hop", 
      path: "https://ik.imagekit.io/VibeCast/music/music/King_Of_Indian_Hip_Hop.mp3?updatedAt=1768897089407", 
      image: "https://ik.imagekit.io/VibeCast/images/King_Of_Indian_Hip_Hop.jpg?updatedAt=1768896068553", 
      durationDisplay: "3:33", 
      artist: "Emiway Bantai" 
    },
    { 
      name: "Samjh Me Aya Kya", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Samjh_Me_Aya_Kya.mp3?updatedAt=1768897060666", 
      image: "https://ik.imagekit.io/VibeCast/images/Samjh_Me_Aya_Kya.jpg?updatedAt=1768896069315", 
      durationDisplay: "3:56", 
      artist: "Emiway Bantai" 
    },
    { 
      name: "Kadak Ban", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Kadak_Ban.mp3?updatedAt=1768896905561", 
      image: "https://ik.imagekit.io/VibeCast/images/Kadak_Ban.jpg?updatedAt=1768896068473", 
      durationDisplay: "3:40", 
      artist: "Emiway Bantai" 
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
        /* EMIWAY THEME: Street Red / Bantai Records */
        .artist-header {
          background-image: linear-gradient(to bottom, #b91c1c, #121212);
        }
        .artist-accent {
          background-color: #ef4444; /* Bright Red Accent */
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
            src={emiwayImg}
            alt="Emiway"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-red-600 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Emiway Bantai</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " Machayenge! King of Indian Hip-Hop. 🧢🔥 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              15 songs • Street Hip-Hop & Hard Bars.
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-red-500' : 'text-white'}`}>
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

export default Emiway;