import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

const pritamImg = "https://ik.imagekit.io/VibeCast/images/pritam.jpeg?updatedAt=1768896069609";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Pritam = () => {
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
      name: "Ye Tune Kya Kiya", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Ye_Tune_Kya_Kiya.mp3?updatedAt=1768897122428", 
      image: "https://ik.imagekit.io/VibeCast/images/Ye_Tune_Kya_Kiya.jpg?updatedAt=1768896075548", 
      durationDisplay: "4:03", 
      artist: "Pritam, Javed Bashir" 
    },
    { 
      name: "Jara Sa", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Jara_Sa.mp3?updatedAt=1768896785839", 
      image: "https://ik.imagekit.io/VibeCast/images/Jara_Sa.jpg?updatedAt=1768896068413", 
      durationDisplay: "3:45", 
      artist: "Pritam, KK" 
    },
    { 
      name: "Tum Se Hee", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tum_Se_Hee.mp3?updatedAt=1768897122223", 
      image: "https://ik.imagekit.io/VibeCast/images/Tum_Se_Hee.jpg?updatedAt=1768896075533", 
      durationDisplay: "4:12", 
      artist: "Pritam, Mohit Chauhan" 
    },
    { 
      name: "Shayad", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Shayad.mp3?updatedAt=1768897023637", 
      image: "https://ik.imagekit.io/VibeCast/images/Shayad.jpg?updatedAt=1768896070945", 
      durationDisplay: "3:58", 
      artist: "Pritam, Arijit Singh" 
    },
    { 
      name: "Itne Se Baat Hai", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Itne_Se_Baat_Hai.mp3?updatedAt=1768896775031", 
      image: "https://ik.imagekit.io/VibeCast/images/Itne_Se_Baat_Hai.jpg?updatedAt=1768896066745", 
      durationDisplay: "3:36", 
      artist: "Pritam, Arijit Singh, Antara Mitra" 
    },
    { 
      name: "Tera Hone Laga Hu", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tera_Hone_Laga_Hu.mp3?updatedAt=1768897114864", 
      image: "https://ik.imagekit.io/VibeCast/images/Tera_Hone_Laga_Hu.jpg?updatedAt=1768896075207", 
      durationDisplay: "4:05", 
      artist: "Pritam, Atif Aslam" 
    },
    { 
      name: "Tere Pyaar Me", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tere_Pyaar_Me.mp3?updatedAt=1768897106781", 
      image: "https://ik.imagekit.io/VibeCast/images/Tere_Pyaar_Me.jpg?updatedAt=1768896075217", 
      durationDisplay: "3:50", 
      artist: "Pritam, Arijit Singh" 
    },
    { 
      name: "What Jhumka", 
      path: "https://ik.imagekit.io/VibeCast/music/music/What_Jhumka.mp3?updatedAt=1768897114440", 
      image: "https://ik.imagekit.io/VibeCast/images/What_Jhumka.jpg?updatedAt=1768896075402", 
      durationDisplay: "3:30", 
      artist: "Pritam, Arijit Singh, Jonita Gandhi" 
    },
    { 
      name: "Lut Put Gaya", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Lut_Put_Gaya.mp3?updatedAt=1768896968079", 
      image: "https://ik.imagekit.io/VibeCast/images/Lut_Put_Gaya.jpg?updatedAt=1768896069032", 
      durationDisplay: "3:40", 
      artist: "Pritam, Arijit Singh" 
    },
    { 
      name: "Tu Hi Mera", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tu_E_Mera.mp3?updatedAt=1768897120102", 
      image: "https://ik.imagekit.io/VibeCast/images/Tu_E_Mera.jpg?updatedAt=1768896075493", 
      durationDisplay: "4:00", 
      artist: "Pritam, Shafqat Amanat Ali" 
    },
    { 
      name: "Kesariya", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Kesariya.mp3?updatedAt=1768896903458", 
      image: "https://ik.imagekit.io/VibeCast/images/Kesariya.jpg?updatedAt=1768896068530", 
      durationDisplay: "3:35", 
      artist: "Pritam, Arijit Singh" 
    },
    { 
      name: "O Mahi", 
      path: "https://ik.imagekit.io/VibeCast/music/music/O_Mahi.mp3?updatedAt=1768897006313", 
      image: "https://ik.imagekit.io/VibeCast/images/O_Mahi.jpg?updatedAt=1768896069199", 
      durationDisplay: "3:55", 
      artist: "Pritam, Arijit Singh" 
    },
    { 
      name: "Khairiyat", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Khairiyat.mp3?updatedAt=1768896956545", 
      image: "https://ik.imagekit.io/VibeCast/images/Khairiyat.jpg?updatedAt=1768896068629", 
      durationDisplay: "4:20", 
      artist: "Pritam, Arijit Singh" 
    },
    { 
      name: "Tu Chahiye", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Tu_Chahiye.mp3?updatedAt=1768897109962", 
      image: "https://ik.imagekit.io/VibeCast/images/Tu_Chahiye.jpg?updatedAt=1768896075465", 
      durationDisplay: "3:48", 
      artist: "Pritam, Atif Aslam" 
    },
    { 
      name: "Mai Rang Sharbaton Ka", 
      path: "https://ik.imagekit.io/VibeCast/music/music/Mai_Rang_Sharbaton_Ka.mp3?updatedAt=1768896906630", 
      image: "https://ik.imagekit.io/VibeCast/images/Mai_Rang_Sharbaton_Ka.jpg?updatedAt=1768896069224", 
      durationDisplay: "4:10", 
      artist: "Pritam, Atif Aslam" 
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
        /* PRITAM THEME: Melody Blue */
        .artist-header {
          background-image: linear-gradient(to bottom, #2563eb, #121212);
        }
        .artist-accent {
          background-color: #3b82f6; /* Blue-500 Accent */
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
            src={pritamImg}
            alt="Pritam"
            className="w-56 h-56 shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover rounded-full mr-6 border-4 border-white/10 pointer-events-none"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80 flex items-center gap-1">
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-[10px]">VERIFIED</span> Artist
            </p>
            <h1 className="text-7xl font-black mb-1 drop-shadow-lg">Pritam</h1>
            
            <p className="text-lg font-medium text-white/90 mt-2 italic">
               " Bollywood's Soul of Melody. 🎹🎼 "
            </p>
            
            <p className="text-sm font-normal text-white/60 mt-1">
              15 songs • The Composer of a Generation.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24 bg-gradient-to-b from-[#121212] via-black to-black">
        <div className="max-w-5xl mx-auto relative z-20">
          
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full artist-accent flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer"
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
              className={`ml-4 font-semibold hover:text-white transition cursor-pointer tracking-widest ${isShuffle ? "text-blue-500" : "text-gray-400"}`}
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
                  <span className="text-blue-500 animate-pulse">
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
                <span className={`text-base font-semibold truncate ${playlist.length && playlist[currentSongIndex]?.name === song.name ? 'text-blue-500' : 'text-white'}`}>
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

export default Pritam;