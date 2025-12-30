import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/index.css";
import { PlayerContext } from "../../context/PlayerContext";

import badBunnyImg from "../../assets/images/badbunny.jpeg";

import ChambeaImg from "../../assets/images/Chambea.jpg";
import MiaImg from "../../assets/images/MIA.jpg";
import LaNocheImg from "../../assets/images/La_Noche.jpg";
import VeteImg from "../../assets/images/Vete.jpg";
import EfectoImg from "../../assets/images/Efecto.jpg";
import OjitosLindosImg from "../../assets/images/Ojitos_Lindos.jpg";
import TitiMePreguntoImg from "../../assets/images/Titi_Me_Pregunto.jpg";
import YonaguniImg from "../../assets/images/Yonaguni.jpg";
import CallaitaImg from "../../assets/images/Callaita.jpg";
import MePortoBonitoImg from "../../assets/images/Me_Porto_Bonito.jpg";
import DakitiImg from "../../assets/images/Dakiti.jpg";

import Chambea from "../../assets/music/Chambea.mp3";
import Mia from "../../assets/music/MIA.mp3";
import LaNoche from "../../assets/music/La_Noche.mp3";
import Vete from "../../assets/music/Vete.mp3";
import Efecto from "../../assets/music/Efecto.mp3";
import OjitosLindos from "../../assets/music/Ojitos_Lindos.mp3";
import TitiMePregunto from "../../assets/music/Titi_Me_Pregunto.mp3";
import Yonaguni from "../../assets/music/Yonaguni.mp3";
import Callaita from "../../assets/music/Callaita.mp3";
import MePortoBonito from "../../assets/music/Me_Porto_Bonito.mp3";
import Dakiti from "../../assets/music/Dakiti.mp3";

const formatTime = (sec) => {
  if (!sec) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const BadBunny = () => {
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
    { name: "Chambea", path: Chambea, image: ChambeaImg, durationDisplay: "3:16", artist: "Bad Bunny" },
    { name: "MIA", path: Mia, image: MiaImg, durationDisplay: "3:30", artist: "Bad Bunny, Drake" },
    { name: "La Noche de Anoche", path: LaNoche, image: LaNocheImg, durationDisplay: "3:23", artist: "Bad Bunny, Rosalía" },
    { name: "Vete", path: Vete, image: VeteImg, durationDisplay: "3:12", artist: "Bad Bunny" },
    { name: "Efecto", path: Efecto, image: EfectoImg, durationDisplay: "3:33", artist: "Bad Bunny" },
    { name: "Ojitos Lindos", path: OjitosLindos, image: OjitosLindosImg, durationDisplay: "4:18", artist: "Bad Bunny, Bomba Estéreo" },
    { name: "Tití Me Preguntó", path: TitiMePregunto, image: TitiMePreguntoImg, durationDisplay: "4:03", artist: "Bad Bunny" },
    { name: "Yonaguni", path: Yonaguni, image: YonaguniImg, durationDisplay: "3:26", artist: "Bad Bunny" },
    { name: "Callaíta", path: Callaita, image: CallaitaImg, durationDisplay: "4:10", artist: "Bad Bunny, Tainy" },
    { name: "Me Porto Bonito", path: MePortoBonito, image: MePortoBonitoImg, durationDisplay: "2:58", artist: "Bad Bunny, Chencho Corleone" },
    { name: "Dákiti", path: Dakiti, image: DakitiImg, durationDisplay: "3:25", artist: "Bad Bunny, Jhay Cortez" },
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
          /* Summer Orange for Bad Bunny */
          background-image: linear-gradient(to bottom, #ff8c00, #121212);
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
            src={badBunnyImg}
            alt="Bad Bunny"
            className="w-56 h-56 shadow-2xl object-cover rounded-full mr-6 border-4 border-gray-900/50"
          />
          <div>
            <p className="text-sm font-bold uppercase text-white/80">Artist</p>
            <h1 className="text-7xl font-black mb-1">Bad Bunny</h1>
            <p className="text-md font-semibold text-white/70 mt-2">
              11 songs • Benito's Global Hits.
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

export default BadBunny;