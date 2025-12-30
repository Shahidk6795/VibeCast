import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

import anuvImg from "../../assets/images/anuv.jpeg";

import BaarisheinImg from "../../assets/images/Baarishein.jpg";
import AlagAasmaanImg from "../../assets/images/Alag_Aasmaan.jpg";
import GulImg from "../../assets/images/Gul.jpg";
import HusnImg from "../../assets/images/Husn.jpg";
import MishriImg from "../../assets/images/Mishri.jpg";
import MaulaImg from "../../assets/images/Maula.jpg";
import RihaImg from "../../assets/images/Riha.jpg";
import OceanImg from "../../assets/images/Ocean.jpg";
import MazaakImg from "../../assets/images/Mazaak.jpg";
import AntarikshImg from "../../assets/images/Antariksh.jpg";
import MeriBaatonMeinTuImg from "../../assets/images/Meri_Baaton_Mein_Tu.jpg";
import JoTumMereHoImg from "../../assets/images/Jo_Tum_Mere_Ho.jpg";
import InaamImg from "../../assets/images/Inaam.jpg";

import Baarishein from "../../assets/music/Baarishein.mp3";
import AlagAasmaan from "../../assets/music/Alag_Aasmaan.mp3";
import Gul from "../../assets/music/Gul.mp3";
import Husn from "../../assets/music/Husn.mp3";
import Mishri from "../../assets/music/Mishri.mp3";
import Maula from "../../assets/music/Maula.mp3";
import Riha from "../../assets/music/Riha.mp3";
import Ocean from "../../assets/music/Ocean.mp3";
import Mazaak from "../../assets/music/Mazaak.mp3";
import Antariksh from "../../assets/music/Antariksh.mp3";
import MeriBaatonMeinTu from "../../assets/music/Meri_Baaton_Mein_Tu.mp3";
import JoTumMereHo from "../../assets/music/Jo_Tum_Mere_Ho.mp3";
import Inaam from "../../assets/music/Inaam.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const AnuvJain = () => {
  const navigate = useNavigate();

  const {
    playPlaylist,
    playPause,
    isPlaying,
    currentSongIndex,
    playlist,
    miniPlayerVisible,
    duration,
    progress,
    setMiniPlayerVisible,
  } = useContext(PlayerContext);

  const songs = [
    { name: "Baarishein", path: Baarishein, image: BaarisheinImg, durationDisplay: "3:27", artist: "Anuv Jain" },
    { name: "Alag Aasmaan", path: AlagAasmaan, image: AlagAasmaanImg, durationDisplay: "3:32", artist: "Anuv Jain" },
    { name: "Husn", path: Husn, image: HusnImg, durationDisplay: "3:38", artist: "Anuv Jain" },
    { name: "Gul", path: Gul, image: GulImg, durationDisplay: "3:35", artist: "Anuv Jain" },
    { name: "Mishri", path: Mishri, image: MishriImg, durationDisplay: "3:20", artist: "Anuv Jain" },
    { name: "Maula", path: Maula, image: MaulaImg, durationDisplay: "3:46", artist: "Anuv Jain" },
    { name: "Riha", path: Riha, image: RihaImg, durationDisplay: "3:29", artist: "Anuv Jain" },
    { name: "Ocean", path: Ocean, image: OceanImg, durationDisplay: "3:45", artist: "Anuv Jain" },
    { name: "Mazaak", path: Mazaak, image: MazaakImg, durationDisplay: "3:30", artist: "Anuv Jain" },
    { name: "Antariksh", path: Antariksh, image: AntarikshImg, durationDisplay: "3:52", artist: "Anuv Jain" },
    { name: "Meri Baaton Mein Tu", path: MeriBaatonMeinTu, image: MeriBaatonMeinTuImg, durationDisplay: "3:10", artist: "Anuv Jain" },
    { name: "Jo Tum Mere Ho", path: JoTumMereHo, image: JoTumMereHoImg, durationDisplay: "4:09", artist: "Anuv Jain" },
    { name: "Inaam", path: Inaam, image: InaamImg, durationDisplay: "3:18", artist: "Anuv Jain" },
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
    <div className="min-h-screen text-white flex flex-col items-center overflow-hidden bg-black">
      <style jsx="true">{`
        .spotify-header {
          /* Warm Amber for Anuv Jain */
          background-image: linear-gradient(to bottom, #b45309, #121212);
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div className="flex items-end max-w-5xl mx-auto h-full px-6 pb-8">
          <img
            src={anuvImg}
            alt="Anuv Jain"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Anuv Jain</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              13 songs • Stories told through a guitar.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen relative z-10 pt-8 px-6 pb-24">
        <div className="max-w-5xl mx-auto relative z-20">
          <div className="flex items-center mb-6">
            <button
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full spotify-green text-black flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
            >
              {isPlaying && playlist.length && playlist[0].name === songs[0].name ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8 pl-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            <button className="ml-4 text-gray-400 font-semibold hover:text-white transition">
              SHUFFLE
            </button>
          </div>

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
              className={`grid grid-cols-[16px_48px_1fr_60px] items-center gap-4 px-2 py-2 rounded-md cursor-pointer transition duration-200 clear-bg-on-hover ${
                playlist.length && playlist[currentSongIndex]?.name === song.name
                  ? "clear-bg-active text-white"
                  : "text-gray-400"
              }`}
            >
              <div className="font-medium text-sm text-center">
                {playlist.length &&
                playlist[currentSongIndex]?.name === song.name &&
                isPlaying ? (
                  <span className="text-spotify-green">
                    <svg
                      className="w-4 h-4 mx-auto"
                      fill="#1db954"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 19v-14h3v14h-3zm8 0V5h3v14h-3z" />
                    </svg>
                  </span>
                ) : (
                  idx + 1
                )}
              </div>
              <img
                src={song.image}
                alt={song.name}
                className="w-12 h-12 object-cover rounded shadow-md"
              />
              <div className="flex flex-col truncate">
                <span className="text-base font-semibold truncate">
                  {song.name}
                </span>
                <span className="text-sm font-light text-gray-400">
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

export default AnuvJain;