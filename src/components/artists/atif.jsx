import React, { useContext, useEffect } from "react"; // Added useEffect
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

import atifImg from "../../assets/images/atif.jpg";

import DilMereNaSuneImg from "../../assets/images/Dil_Mere_Na_Sune.jpg";
import TereSangYaraImg from "../../assets/images/Tere_Sang_Yara.jpg";
import DilDiyanGallanImg from "../../assets/images/Dil_Diyan_Gallan.jpg";
import TeraHoneLagaHoonImg from "../../assets/images/Tera_Hone_Laga_Hoon.jpg";
import PiyaORePiyaImg from "../../assets/images/Piya_O_Re_Piya.jpg";
import TeraHuaImg from "../../assets/images/Tera_Hua.jpg";
import OSaathiImg from "../../assets/images/O_Saathi.jpg";
import JeenaJeenaImg from "../../assets/images/Jeena_Jeena.jpg";
import DekhteDekhteImg from "../../assets/images/Dekhte_Dekhte.jpg";
import TuJaaneNaImg from "../../assets/images/Tu_Jaane_Na.jpg";
import BeIntehaanImg from "../../assets/images/Be_Intehaan.jpg";
import TajdarEHaramImg from "../../assets/images/Tajdar_E_Haram.jpg";
import PehliDafaImg from "../../assets/images/Pehli_Dafa.jpg";
import TereBinImg from "../../assets/images/Tere_Bin.jpg";

import DilMereNaSune from "../../assets/music/Dil_Mere_Na_Sune.mp3";
import TereSangYara from "../../assets/music/Tere_Sang_Yara.mp3";
import DilDiyanGallan from "../../assets/music/Dil_Diyan_Gallan.mp3";
import TeraHoneLagaHoon from "../../assets/music/Tera_Hone_Laga_Hoon.mp3";
import PiyaORePiya from "../../assets/music/Piya_O_Re_Piya.mp3";
import TeraHua from "../../assets/music/Tera_Hua.mp3";
import OSaathi from "../../assets/music/O_Saathi.mp3";
import JeenaJeena from "../../assets/music/Jeena_Jeena.mp3";
import DekhteDekhte from "../../assets/music/Dekhte_Dekhte.mp3";
import TuJaaneNa from "../../assets/music/Tu_Jaane_Na.mp3";
import BeIntehaan from "../../assets/music/Be_Intehaan.mp3";
import TajdarEHaram from "../../assets/music/Tajdar_E_Haram.mp3";
import PehliDafa from "../../assets/music/Pehli_Dafa.mp3";
import TereBin from "../../assets/music/Tere_Bin.mp3";

// Logic from Arijit.jsx: Local formatTime function
const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Atif = () => {
  const navigate = useNavigate();
  
  // Logic from Arijit.jsx: Context destructuring
  const {
    playPlaylist,
    playPause,
    isPlaying,
    currentSongIndex,
    playlist, // Use 'playlist'
    miniPlayerVisible,
    duration,
    progress,
    setMiniPlayerVisible, // Added
  } = useContext(PlayerContext);

  // Logic from Arijit.jsx: Local array named 'songs'
  const songs = [
    { name: "Dil mere na sune", path: DilMereNaSune, image: DilMereNaSuneImg, durationDisplay: "4:05" },
    { name: "Tere sang yara", path: TereSangYara, image: TereSangYaraImg, durationDisplay: "4:12" },
    { name: "Dil diya gallan", path: DilDiyanGallan, image: DilDiyanGallanImg, durationDisplay: "4:20" },
    { name: "Tera hone laga hoon", path: TeraHoneLagaHoon, image: TeraHoneLagaHoonImg, durationDisplay: "4:18" },
    { name: "Piya o re piya", path: PiyaORePiya, image: PiyaORePiyaImg, durationDisplay: "4:10" },
    { name: "Tera hua", path: TeraHua, image: TeraHuaImg, durationDisplay: "3:58" },
    { name: "O saathi", path: OSaathi, image: OSaathiImg, durationDisplay: "4:06" },
    { name: "Jeena jeena", path: JeenaJeena, image: JeenaJeenaImg, durationDisplay: "3:45" },
    { name: "Dekhte dekhte", path: DekhteDekhte, image: DekhteDekhteImg, durationDisplay: "4:00" },
    { name: "Tu jaane na", path: TuJaaneNa, image: TuJaaneNaImg, durationDisplay: "4:15" },
    { name: "Be intehaan", path: BeIntehaan, image: BeIntehaanImg, durationDisplay: "4:08" },
    { name: "Tajdar e haram", path: TajdarEHaram, image: TajdarEHaramImg, durationDisplay: "5:02" },
    { name: "Pehli dafa", path: PehliDafa, image: PehliDafaImg, durationDisplay: "4:11" },
    { name: "Tere bin", path: TereBin, image: TereBinImg, durationDisplay: "4:07" },
  ];

  // Logic from Arijit.jsx: handlePlayPause logic
  const handlePlayPause = () => {
    if (!playlist.length || playlist[0].name !== songs[0].name) {
      playPlaylist(songs, 0);
    } else {
      playPause();
    }
    setMiniPlayerVisible(true); // Added
  };

  // Logic from Arijit.jsx: selectSong logic
  const selectSong = (index) => {
    playPlaylist(songs, index, true);
  };

  const goBack = () => {
    navigate("/");
  };

  // Logic from Arijit.jsx: Spacebar useEffect
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault(); // stop page scroll
        handlePlayPause(); // play first song / toggle play-pause
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playlist, handlePlayPause]);

  return (
    <div className="min-h-screen text-white flex flex-col items-center overflow-hidden bg-black">
      {/* Logic from Arijit.jsx: Inline style block */}
      <style jsx="true">{`
        .spotify-header {
          background-image: linear-gradient(to bottom, #1db954, #121212);
        }
        .spotify-green {
          background-color: #1db954;
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

      {/* Header section (content updated for Atif) */}
      <div className="w-full h-80 pt-16 relative spotify-header z-10 shadow-lg">
        <button
          onClick={goBack}
          className="absolute top-4 left-4 p-2 rounded-full bg-black/50 hover:bg-black/70 z-30"
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
            src={atifImg}
            alt="Atif Aslam"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Atif Aslam</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              14 songs • A voice that touches souls.
            </p>
          </div>
        </div>
      </div>

      {/* Body section */}
      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24">
        <div className="max-w-5xl mx-auto relative z-20">
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full spotify-green text-black flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
            >
              {/* Logic from Arijit.jsx: isPlaying check */}
              {isPlaying ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 pl-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <button className="ml-4 text-gray-400 font-semibold hover:text-white transition">
              SHUFFLE
            </button>
          </div>

          {/* Logic from Arijit.jsx: Added 'clear-bg-strip' */}
          <div className="grid grid-cols-[16px_48px_1fr_60px] gap-4 py-2 border-b border-gray-700/50 text-gray-400 text-xs uppercase font-semibold mb-2 clear-bg-strip">
            <div>#</div>
            <div></div>
            <div>Title</div>
            <div className="text-right">Time</div>
          </div>

          {songs.map((song, idx) => (
            <div
              key={idx}
              onClick={() => selectSong(idx)}
              // Logic from Arijit.jsx: Styling for active song
              className={`grid grid-cols-[16px_48px_1fr_60px] items-center gap-4 px-2 py-2 rounded-md cursor-pointer transition duration-200 clear-bg-on-hover ${
                playlist.length && playlist[currentSongIndex]?.name === song.name
                  ? "clear-bg-active text-white"
                  : "text-gray-400"
              }`}
            >
              <div className="font-medium text-sm text-center">
                {/* Logic from Arijit.jsx: Check for active song */}
                {playlist.length && playlist[currentSongIndex]?.name === song.name && isPlaying ? (
                  <span className="text-spotify-green">
                    <svg className="w-4 h-4 mx-auto" fill="#1db954" viewBox="0 0 24 24">
                      <path d="M7 19v-14h3v14h-3zm8 0V5h3v14h-3z" />
                    </svg>
                  </span>
                ) : (
                  idx + 1
                )}
              </div>
              <img src={song.image} alt={song.name} className="w-12 h-12 object-cover rounded shadow-md" />
              <div className="flex flex-col truncate">
                <span className="text-base font-semibold truncate">{song.name}</span>
                {/* Content updated for Atif */}
                <span className="text-sm font-light text-gray-400">Atif Aslam</span>
              </div>
              <div className="text-right text-sm text-gray-400">
                {/* Logic from Arijit.jsx: Check for active song duration */}
                {playlist.length && playlist[currentSongIndex]?.name === song.name
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

export default Atif;