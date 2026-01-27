import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const krsnaImg = "https://ik.imagekit.io/VibeCast/images/krsna.jpg?updatedAt=1768896068930";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Krsna = () => {
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
      name: "I Guess", 
      path: "https://ik.imagekit.io/VibeCast/music/music/I_Guess.mp3?updatedAt=1768896759511", 
      image: "https://ik.imagekit.io/VibeCast/images/I_Guess.jpg?updatedAt=1768896068457", 
      durationDisplay: "3:55", 
      artist: "KRSNA" 
    },
    { 
      name: "Hola Amigo", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Hola_Amigo.mp3?updatedAt=1768896799009", 
      image: "https://ik.imagekit.io/VibeCast/images/Hola_Amigo.jpg?updatedAt=1768896061381", 
      durationDisplay: "3:40", 
      artist: "KRSNA, Karma" 
    },
    { 
      name: "Knock Knock", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Knock_Knock.mp3?updatedAt=1768896955649", 
      image: "https://ik.imagekit.io/VibeCast/images/Knock_Knock.jpg?updatedAt=1768896068969", 
      durationDisplay: "3:45", 
      artist: "KRSNA, Brodha V" 
    },
    { 
      name: "Joota Japani", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Joota_Japani.mp3?updatedAt=1768896885551", 
      image: "https://ik.imagekit.io/VibeCast/images/Joota_Japani.jpg?updatedAt=1768896068384", 
      durationDisplay: "3:50", 
      artist: "KRSNA" 
    },
    { 
      name: "Sensitive", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Sensitive.mp3?updatedAt=1768897044161", 
      image: "https://ik.imagekit.io/VibeCast/images/Sensitive.jpg?updatedAt=1768896070882", 
      durationDisplay: "4:00", 
      artist: "KRSNA, Raga" 
    },
    { 
      name: "Makasam", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Makasam.mp3?updatedAt=1768897047494", 
      image: "https://ik.imagekit.io/VibeCast/images/Makasam.jpg?updatedAt=1768896069381", 
      durationDisplay: "3:58", 
      artist: "KRSNA, Karma" 
    },
    { 
      name: "Blowing Up", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Blowing_Up.mp3?updatedAt=1768896813977", 
      image: "https://ik.imagekit.io/VibeCast/images/Blowing_Up.jpg?updatedAt=1768896060834", 
      durationDisplay: "4:05", 
      artist: "KRSNA" 
    },
    { 
      name: "Saza-E-Maut", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Saza_E_Maut.mp3?updatedAt=1768897009644", 
      image: "https://ik.imagekit.io/VibeCast/images/Saza_E_Maut.jpg?updatedAt=1768896070709", 
      durationDisplay: "3:52", 
      artist: "KRSNA, Raftaar" 
    },
    { 
      name: "No Cap", 
      path: "https://ik.imagekit.io/VibeCast/music/music/No_Cap.mp3?updatedAt=1768896979276", 
      image: "https://ik.imagekit.io/VibeCast/images/No_Cap.jpg?updatedAt=1768896069242", 
      durationDisplay: "4:02", 
      artist: "KRSNA, Badshah" 
    },
    { 
      name: "Vibrate", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Vibrate.mp3?updatedAt=1768897104293", 
      image: "https://ik.imagekit.io/VibeCast/images/Vibrate.jpg?updatedAt=1768896075478", 
      durationDisplay: "3:48", 
      artist: "KRSNA" 
    },
    { 
      name: "Been A While", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Been_A_While.mp3?updatedAt=1768896785913", 
      image: "https://ik.imagekit.io/VibeCast/images/Been_A_While.jpg?updatedAt=1768896061810", 
      durationDisplay: "4:10", 
      artist: "KRSNA" 
    },
    { 
      name: "Roll Up", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Roll_Up.mp3?updatedAt=1768897002145", 
      image: "https://ik.imagekit.io/VibeCast/images/Roll_Up.jpg?updatedAt=1768896069223", 
      durationDisplay: "3:57", 
      artist: "KRSNA, Badshah" 
    },
    { 
      name: "Mumbai Se Delhi Tak", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Mumbai_Se_Delhi_Tak.mp3?updatedAt=1768896985829", 
      image: "https://ik.imagekit.io/VibeCast/images/Mumbai_Se_Delhi_Tak.jpg?updatedAt=1768896069232", 
      durationDisplay: "3:59", 
      artist: "KRSNA, Emiway Bantai" 
    },
    { 
      name: "Villain", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Villain.mp3?updatedAt=1768897113862", 
      image: "https://ik.imagekit.io/VibeCast/images/Villain.jpg?updatedAt=1768896075406", 
      durationDisplay: "4:15", 
      artist: "KRSNA, IKKA, Shah Rule" 
    },
    { 
      name: "Kaha Tak", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Kaha_Tak.mp3?updatedAt=1768896944314", 
      image: "https://ik.imagekit.io/VibeCast/images/Kaha_Tak.jpg?updatedAt=1768896068474", 
      durationDisplay: "4:12", 
      artist: "KRSNA, Karma" 
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
        /* KR$NA THEME: Dollar Emerald */
        .artist-header {
          background-image: linear-gradient(to bottom, #059669, #121212);
        }
        .artist-accent {
          background-color: #10b981; /* Emerald-500 Accent */
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
            src={krsnaImg}
            alt="Krsna"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-emerald-800 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">KR$NA</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " Still Here. Desi Hip-Hop's Lyrical God. 💸🎤 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              15 songs • Hard-hitting bars & flows.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-emerald-500/40 transition-all duration-300 cursor-pointer"
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
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-emerald-500" : "text-gray-400"}`}
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
                  <span className="text-emerald-500 animate-pulse">
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-emerald-500' : 'text-white'}`}>
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

export default Krsna;